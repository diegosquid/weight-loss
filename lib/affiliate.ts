// Generated in ClickBank on 2026-09-09: affiliate diegodiasm, seller plantbc.
// The seller redirect and checkout affiliate/TID were verified without a purchase.
const COOKBOOK_HOPLINK = "https://f751e-kaqes3dg09q3zji27o36.hop.clickbank.net/";

export const affiliateSources = ["sg", "nt", "direct"] as const;
export type AffiliateSource = (typeof affiliateSources)[number];

export function normalizeAffiliateSource(value: string | null): AffiliateSource {
  return affiliateSources.includes(value as AffiliateSource)
    ? (value as AffiliateSource)
    : "direct";
}

export function cookbookHopLink(source: AffiliateSource): string {
  const url = new URL(COOKBOOK_HOPLINK);
  // Fixed codes only: never pass search strings, health inputs or identifiers.
  url.searchParams.set("tid", `ms_pb_${normalizeAffiliateSource(source)}_review`);
  return url.toString();
}
