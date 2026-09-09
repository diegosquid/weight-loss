"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import config from "@/config/funnel.json";

// A count of page loads/actions, never a visitor or session identifier.
let lastView = "";
export function FunnelTracker() {
  const pathname = usePathname();
  useEffect(() => {
    const route = pathname === "/" ? "/" : pathname.replace(/\/+$/, "") + "/";
    const page = (config.pages as Record<string, string>)[route];
    if (!page) { lastView = ""; return; }
    if (navigator.doNotTrack === "1" || (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl) return;
    const query = new URLSearchParams(window.location.search);
    const qa = query.get("qa") === "1";
    const active = Object.entries(config.offers).find(([, item]) => item.page === page);
    const source = query.get("source") || "direct";
    const entry = active && active[1].sources.includes(source) ? source : "direct";
    const send = (event: string, offer: string, placement: string) => {
      void fetch("/api/funnel/", {
        method: "POST", credentials: "omit", referrerPolicy: "no-referrer", keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event, page, offer, entry: active ? entry : "direct", placement, ...(qa ? { qa: true } : {}) }),
      }).catch(() => {});
    };
    const viewKey = `${route}:${entry}:${qa}`;
    if (lastView !== viewKey) { lastView = viewKey; send("view", active?.[0] || "none", "context"); }
    const clicked = (event: MouseEvent) => {
      const anchor = (event.target as Element)?.closest?.("a");
      if (!anchor) return;
      const url = new URL(anchor.href, location.origin);
      const offer = anchor.dataset.funnelOffer;
      if (offer && active?.[0] === offer && url.hostname.endsWith(".hop.clickbank.net")) {
        send("offer_click", offer, anchor.dataset.funnelPlacement || "end");
      } else if (url.origin === location.origin) {
        if (qa) { url.searchParams.set("qa", "1"); anchor.href = url.toString(); }
        const target = Object.entries(config.offers).find(([, item]) => item.path === url.pathname);
        if (target && target[1].sources.includes(page)) send("review_click", target[0], page === "home" || page === "resources" ? page : "context");
        // Keep explicit QA journeys isolated across Next.js client navigation.
        if (qa && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
          event.preventDefault(); event.stopPropagation(); window.location.assign(url.toString());
        }
      }
    };
    document.addEventListener("click", clicked, true);
    return () => document.removeEventListener("click", clicked, true);
  }, [pathname]);
  return null;
}
