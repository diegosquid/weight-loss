"use client";

import { useEffect, useState } from "react";
import { AffiliateOfferId, affiliateHopLink, affiliateOffers } from "@/lib/affiliate";

export function AffiliateOffer({ offer }: { offer: AffiliateOfferId }) {
  const [source, setSource] = useState<string | null>(null);
  const config = affiliateOffers[offer];

  useEffect(() => {
    setSource(new URLSearchParams(window.location.search).get("source"));
  }, []);

  return (
    <aside aria-labelledby="offer-heading" className="mt-10 rounded-xl border border-blue-200 bg-blue-50 p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-800">Commercial disclosure</p>
      <h2 id="offer-heading" className="mt-2 text-xl font-semibold text-gray-900">Check the seller’s current terms</h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        This is an affiliate link. We may earn a commission if you buy, at no additional cost to you.
        {" "}{config.summary}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        {config.purchaseNote}
      </p>
      <a href={affiliateHopLink(offer, source)} rel="sponsored nofollow noopener" referrerPolicy="no-referrer"
        className="mt-4 inline-flex min-h-11 items-center font-semibold text-blue-800 underline underline-offset-4 hover:text-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
        {config.cta} →
      </a>
    </aside>
  );
}
