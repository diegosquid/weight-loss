# Editorial and commercial review — October 2, 2026

## Decision

Publish today's scheduled digital-cookbook versus meal-planning-service comparison, with source `dc`, a resources entry and contextual incoming links. Keep both existing offers and the pilot cadence. The commercial report has nine assessment-load events and no recorded referral or offer clicks; this is insufficient to identify a winning product. ClickBank reconciliation remains unavailable without an authenticated reporting session.

The new guide addresses deliverables and access: recipe files, fixed menus and interactive planning tools; meal swaps and list quantities; continuing charges, expiry and recipe exports. September 18's free-recipes comparison answers whether to spend at all. September 21's guide teaches manual grocery-list arithmetic. Link between these intents instead of repeating their worked menus or claiming a new search-demand opportunity.

## Search evidence inspected today

Google Search Console, `sc-domain:metabolicscience.org`, Web, **September 23–29**, displayed **17 clicks, 5,715 impressions, 0.3% CTR and average position 16.5**. Last update: 4.5 hours earlier. Selected query rows (clicks / impressions): “ubt251 peptide” 2 / 136; “semaglutide” 0 / 309; “semaglutide weight loss” 0 / 104; “metabolic science” 0 / 38; “natural thermogenics” 0 / 14. Selected page rows: UBT251 5 / 579; Qsymia 3 / 190; GLP-1/COPD 2 / 143; GLP-1/stroke 1 / 162; GLP-1/infection risk 1 / 126. These are selected table rows, not a complete export.

Bing Webmaster Tools, correct site, **7 D / All**, displayed **209 clicks, 7.9K rounded impressions and 2.65% CTR**. Its chart label says September 24–30, but the accessible daily table lists only September 25–29; those five click values (35, 22, 30, 58, 64) sum to 209. Preserve this UI boundary discrepancy rather than claiming seven complete daily rows. Page and keyword tables are explicitly Web only.

Selected Bing Web page rows:

| Page | Displayed impressions | Clicks | Average position |
| --- | ---: | ---: | ---: |
| Mounjaro dosage chart | 1.9K | 17 | 5.27 |
| Supplements for weight loss | 342 | 4 | 5.47 |
| GLP-1 nausea management | 313 | 19 | 4.33 |
| GLP-1 storage and handling | 246 | 7 | 4.63 |
| Natural thermogenics | 153 | 3 | 4.57 |

Selected Bing queries: “mounjaro dosing” 274 impressions / 0 clicks / position 7.82; “mounjaro dosage chart” 82 / 0 / 2.34; “mounjaro doses” 78 / 0 / 8.44; “mounjaro dosage” 75 / 2 / 4.36. The leading inspected search intent remains medical. This does not establish demand or keyword volume for today's exact comparison. Search windows differ from each other and from the funnel period; do not merge them or use search clicks as a denominator for instrumented-page events.

## Site funnel — September 26–October 2, QA excluded

The signed seven-day report returned `qa: false` and **107 page-load events, 0 recorded review-click events and 0 recorded offer-click events**. October 2 is partial: this is the morning snapshot before today's controlled public QA. Counts are actions, not unique visitors, and cover only instrumented pages. Bots, repeat loads and unflagged visits may contribute; blocking or interrupted scripts can omit events.

Entry-page views total **98**, excluding the nine assessment loads:

| Entry page / fixed code | Views | Recorded review clicks |
| --- | ---: | ---: |
| Home | 29 | 0 |
| Resources | 8 | 0 |
| Supplements (`sg`) | 23 | 0 |
| Natural thermogenics (`nt`) | 13 | 0 |
| Muscle (`mm`) | 3 | 0 |
| Boosting metabolism (`bm`) | 1 | 0 |
| Beginner workouts (`hw`) | 1 | 0 |
| Beginner meal planning (`mp`) | 1 | 0 |
| Free recipes (`fp`) | 1 | 0 |
| Grocery-list guide (`gl`) | 2 | 0 |
| Workout billing (`wc`) | 5 | 0 |
| Free workout comparison (`fv`) | 4 | 0 |
| Budget meal prep (`bp`) | 4 | 0 |
| Small-space workouts (`ss`) | 3 | 0 |

The recorded review-click/load ratio is **0 / 98 = 0%** across these entry pages. This is an action ratio, not unique-person conversion. A source absent from this snapshot has no estimable rate; do not assign a rate to today's new `dc` path before it exists publicly.

Compatible assessment-view denominators:

| Assessment / source | Views | Summary clicks | End clicks | Offer clicks / views |
| --- | ---: | ---: | ---: | ---: |
| Cookbook / `fp` | 1 | 0 | 0 | 0 / 1 |
| Cookbook / `mp` | 1 | 0 | 0 | 0 / 1 |
| Cookbook / `gl` | 1 | 0 | 0 | 0 / 1 |
| Cookbook / `bp` | 1 | 0 | 0 | 0 / 1 |
| Cookbook / home | 1 | 0 | 0 | 0 / 1 |
| FITin56 / `wc` | 1 | 0 | 0 | 0 / 1 |
| FITin56 / direct | 2 | 0 | 0 | 0 / 2 |
| FITin56 / `fv` | 1 | 0 | 0 | 0 / 1 |

Totals: Cookbook **0 / 5 = 0%**; FITin56 **0 / 4 = 0%** recorded offer-click/load ratios. These small denominators cannot support a winner/loser or sales conclusion. Assessment views with campaign codes can arrive through saved/shared URLs, automation or repeat visits; they are not substitutes for a captured review-click event. The absence of recorded referral clicks alone does not identify a tracking defect. Today's QA journey checks the current implementation separately.

## ClickBank and offer availability

The ClickBank homepage's login link opened the primary-account sign-in page in the Chrome profile used for the owner's search properties. It remained on that page on recheck. Requested that the owner sign in while independent publication work continued. **Real hops, initial sales, refunds, recurring commissions actually paid, net earnings, EPC and sales conversion by TID are unavailable, not zero.** No account credentials were recovered or changed and no purchase or third-party message was made.

When access is restored, reconcile `ms_pb_*_review` and `ms_f56_*_review`, excluding `ms_pb_qa_review`, `ms_f56_qa_review` and other known manual checks. The on-site event report does not establish ClickBank earnings.

Public seller pages checked October 2:

- [Plant-Based Cookbook](https://plantbasedcookbook.com/): displayed Essentials $9 and Full Bundle $17, digital delivery, one-time payment and advertised 60-day guarantee, matching the existing assessment's US-dollar snapshot.
- [FITin56](https://get.fitin56.com/): displayed $57 every three months, $85 six-month one-time pass and $114 annual one-time pass, with an advertised 60-day guarantee, matching the existing assessment snapshot.

No changed headline price was observed. No new vendor price, checkout, nutrition or efficacy claim was added to either assessment. Checkout currency/taxes, optional selections, cancellation execution, refunds, support and member contents were not re-tested in this weekly inspection. Original assessment dates remain unchanged; the cookbook assessment received a navigation-only link to the new comparison.

## Sources, attribution and distribution

Primary provider documentation and public-health/consumer guidance were read today:

- [Plan to Eat public features](https://www.plantoeat.com/): saving recipes, calendar planning and grocery-list generation, described as published features rather than tested results. Provider survey savings claims were not adopted.
- Provider documentation on [subscription expiry](https://learn.plantoeat.com/help/what-happens-when-my-subscription-expires), [recipe exports](https://learn.plantoeat.com/help/account-basics-faq) and [trial/cancellation](https://learn.plantoeat.com/help/how-do-i-cancel-my-30-day-trial-or-subscription): retained data versus active access, website-based recipe exports and a no-card trial that does not automatically charge. No account was created or feature tested.
- [FTC subscription guidance](https://consumer.ftc.gov/articles/getting-and-out-free-trials-auto-renewals-and-negative-option-subscriptions): check terms, deadlines and selected extras. No claim about the legal status of a cancellation rule was made.
- [NHS free recipes](https://www.nhs.uk/healthier-families/recipes/) and [NIDDK program evaluation](https://www.niddk.nih.gov/health-information/weight-management/choosing-a-safe-successful-weight-loss-program): free alternatives and evidence/qualification limits. No personalized menu or weight-loss outcome was asserted.

The article uses original, explicitly fictional payment and decision examples. Contextual incoming links were added to the September 18 comparison, September 21 grocery guide and September 9 cookbook assessment, with a resources-hub card. Existing dates and URLs are preserved. Source `dc` was added to the new page map and the cookbook source allowlists in both config/funnel.json and lib/affiliate.ts. The guide's commercial route goes through the existing disclosed assessment; there is no direct HopLink.

## Validation and publication boundary

Six operational tests passed. Build: 181 generated pages. Affiliate checks passed; SEO checks verified 175 canonical pages, unique titles, metadata, structured data, valid footnotes and internal links. Explicit source assertions confirmed `ms_pb_dc_review`, isolated `ms_pb_qa_review` and rejection of `dc` for FITin56 attribution.

At a 390 × 844 viewport, the local article has no document overflow (384 px client/scroll widths). Its comparison table is horizontally scrollable (352 px visible, 640 px content; actual scroll reached 288 px). Six footnotes have valid anchors; a clicked reference settled 96 px below the top, beneath the 65 px sticky header, and the return link worked. The commission disclosure is adjacent to the assessment link.

This report records preparation, not deployment completion. Public release identity, exact article/export equality, incoming/outgoing links and the mobile QA journey must pass before coordinator completion. Operational receipts are outside Git in the editorial state directory. IndexNow acceptance is recorded separately from indexing. The owner's four untracked reports in the main checkout remain untouched.

Next action: continue the authorized pilot and contextual distribution, restore ClickBank report access, and reassess with more actual assessment and offer activity. Do not replace products or add broad banners based on nine assessment loads. No future queued article or catch-up batch was published.
