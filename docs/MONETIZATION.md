# ClickBank pilot — MetabolicScience

Decision and account verification: 2026-09-09. This replaces the earlier speculative monetization plan. No revenue forecast is implied.

## Selected offer

**The Complete Plant-Based Cookbook (PLANTBC)**, a digital cooking resource. The decision is based on a lower entry price and a public sales page focused on recipes and convenience. It is not a proven weight-loss treatment. We did not purchase the book or test the recipes, delivery or refunds.

Live ClickBank Marketplace snapshot:

| Offer | Avg net commission/conversion | CVR | EPC | Gravity |
|---|---:|---:|---:|---:|
| Plant-Based Cookbook | $12.96 | 1.95% | $0.18 | 7.9 |
| Mediterranean Diet (MEDITERR) | $29.65 | 2.45% | $0.60 | 1.0 |
| Smoothie Diet | $20.76 | 0.14% | $0.03 | 12.7 |
| CitrusBurn | $184.63 | 0.00% | $0.00 | 7.4 |

Marketplace definitions: average net commission and gravity use a 90-day window; CVR and EPC use 30 days. Different traffic mixes and undisclosed sample sizes prevent a fair controlled comparison. Zero displayed by the Marketplace is not proof that an offer cannot sell. These are platform statistics, not this site's results.

Mediterranean Diet had higher displayed EPC but a low gravity and a sales page with sweeping weight-loss and disease-related claims. Smoothie Diet was less aligned with a general cooking resource. CitrusBurn's large payout does not establish demand or product efficacy. PlantBC is a pilot choice, not a claim that it is ClickBank's best offer.

Primary offer sources: [sales page](https://plantbasedcookbook.com/), [affiliate tools](https://plantbasedcookbook.com/affiliate-tools), [Mediterranean sales page](https://mediterraneanplan.com/), [CitrusBurn sales page](https://citrusburn.com/). Affiliate promotional metrics and prices differ from the live Marketplace and consumer checkout; do not reuse promotional projections.

## Purchase path and identity

In the logged-in Marketplace, selected the available affiliate nickname **diegodiasm** and seller **plantbc**, default sales landing page. ClickBank generated the encrypted HopLink in `lib/affiliate.ts`.

Verified without purchasing:

- HopLink redirected to `plantbasedcookbook.com` with `hop=diegodiasm`.
- Basic cookbook checkout showed the same encrypted affiliate ID and `TID = ms_pb_qa_review`.
- Seller page advertised $9 basic / $17 bundle; checkout localized currency to BRL and displayed an optional paid recipe add-on.
- Seller advertised one-time digital delivery and 60-day guarantee; ClickBank checkout also displayed its 60-day return notice. Delivery and refund execution are untested.

The `qa` TID is only for manual validation and must be excluded from performance reports. Never buy through your own link as a validation step.

## Pilot routes

1. `/supplements/supplements-for-weight-loss/` → contextual cooking alternative → `/metabolism/plant-based-cookbook-review/?source=sg`.
2. `/supplements/natural-thermogenics/` → contextual cooking alternative → `/metabolism/plant-based-cookbook-review/?source=nt`.
3. Product assessment → labeled affiliate link → seller → ClickBank checkout.

The commercial link appears only on the product assessment. Keep dosage, pregnancy and adverse-effect articles free of offer placements. Existing article URLs and publication dates remain intact. Editorial attribution was corrected across the archive; this does not mean the archive received a clinical review.

The assessment explains its lack of hands-on testing, compares the base and bundle, mentions optional checkout extras and includes a free NHS recipe alternative. No invented rating, testimonial, clinician, accreditation or promised weight change is allowed.

## Tracking actually implemented

| TID | Meaning |
|---|---|
| `ms_pb_sg_review` | Review reached through supplement guide's coded link |
| `ms_pb_nt_review` | Review reached through thermogenics guide's coded link |
| `ms_pb_direct_review` | Other entry to review, missing/unknown source, or JavaScript unavailable |

Only the fixed `sg`, `nt` and `direct` codes are accepted. No query text, calculator input, health information or personal identifier is forwarded. The canonical URL omits query parameters. Paid links use `rel="sponsored nofollow noopener"` and omit the referrer.

ClickBank records hops and attributed transactions. There is no first-party page-view/CTA analytics or email capture installed. A TID labels the immediately preceding guide, not the original search engine or an individual session. Search clicks are not review visits; do not use them as a precise CTA-conversion denominator.

Reference: [ClickBank HopLinks guide](https://support.clickbank.com/en/articles/10535278-hoplinks-guide). TIDs use lowercase letters, numbers and underscores, with no hyphens.

## Baseline observed before launch

Bing, 30 days Aug 9–Sep 7: 985 clicks / 41.7K impressions, Web and Chat. USA 813 clicks, Canada 51, UK 23. Supplement guide 52 clicks / 4K impressions; natural thermogenics 9 clicks / 447 impressions. Mounjaro dosage chart led at 199 clicks and remains informational.

Google Search Console, 28 days Aug 10–Sep 6: 45 clicks / 19.9K impressions; CTR 0.2%, average position 42.8. Different windows and surfaces should not be combined into a single conversion denominator.

ClickBank dashboard last 7 days Sep 3–9 displayed $0 earnings and $0 refunds. This is not an all-time statement and does not establish site-attributed history.

## Operating the pilot

Run `npm run build` then `npm run verify:pilot`. Visually check the review and both incoming paths at desktop and mobile sizes. Follow one QA-coded HopLink to confirm seller and checkout attribution after any offer change. Do not submit payment.

After the release is live, record its date and compare equal date windows. In the account's Reporting / Analytics area, filter the seller PLANTBC and group by TID. Record hops, initial sales, gross/net commissions, refunds and chargebacks; exclude QA traffic. Check the two source URLs and the review separately in Bing and GSC.

Review weekly manually. No new scheduled automation is configured. Start by checking that genuine hops arrive. If there are few hops, improve relevant content and the transition to the review before replacing the product. If hops arrive without sales, inspect audience fit, price and checkout. Do not declare a winner from a handful of events. Track later refunds before treating commissions as durable revenue.

The next three editorial slots prioritize beginner meal planning, free vs paid resources and meal plans vs supplements, as listed in `CONTENT_RULES.md`. Research them independently and preserve the existing one-article-per-day workflow.
