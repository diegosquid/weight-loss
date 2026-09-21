// Generated in ClickBank on 2026-09-09 for affiliate diegodiasm.
// Each seller and checkout affiliate/TID were verified without purchasing.
export const affiliateOffers = {
  plantbc: {
    hopLink: "https://f751e-kaqes3dg09q3zji27o36.hop.clickbank.net/",
    tidPrefix: "ms_pb",
    sources: ["sg", "nt", "mp", "fp", "gl", "home", "resources", "direct"],
    limitation: "This is a review of published information; we have not purchased the cookbook or tested its recipes.",
    summary: "This cookbook is an optional cooking resource; buying it does not guarantee weight loss.",
    purchaseNote: "Compare the basic cookbook and bundle, check the final total, and review any optional extras before paying.",
    cta: "See the cookbook and current pricing",
  },
  fitin56: {
    hopLink: "https://f3ef6zycj9ffmox0xpya6rauem.hop.clickbank.net/",
    tidPrefix: "ms_f56",
    sources: ["mm", "bm", "hw", "home", "resources", "direct"],
    limitation: "This is a review of the public offer and checkout; we have not purchased FITin56 or tested its workouts, member access or support.",
    summary: "FITin56 is an optional exercise resource, not personalized medical care or a guarantee of weight loss.",
    purchaseNote: "The quarterly plan renews automatically. Compare it with the fixed-term passes, and check the total, billing schedule and cancellation terms before paying.",
    cta: "See FITin56 plans and current pricing",
  },
} as const;

export type AffiliateOfferId = keyof typeof affiliateOffers;

export function isAffiliateOffer(value: unknown): value is AffiliateOfferId {
  return value === "plantbc" || value === "fitin56";
}

export function affiliateHopLink(offer: AffiliateOfferId, source: string | null, qa = false): string {
  const config = affiliateOffers[offer];
  const accepted: readonly string[] = config.sources;
  const safeSource = source && accepted.includes(source) ? source : "direct";
  const url = new URL(config.hopLink);
  // Fixed codes only. Never forward free text, health inputs or identifiers.
  url.searchParams.set("tid", `${config.tidPrefix}_${qa ? "qa" : safeSource}_review`);
  return url.toString();
}
