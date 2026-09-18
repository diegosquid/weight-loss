# Editorial and commercial review — September 18, 2026

## Decision

Keep the authorized September 14–October 9 cadence and both existing assessments. Publish today's comparison with useful free alternatives, relevant incoming links and fixed source `fp`. There is not enough recorded commercial activity to choose a winning offer or justify a new banner, offer replacement or increased publication volume. Prioritize distribution and reconciliation with ClickBank.

## Available first-party search data

Checked live in the owner's Chrome profile on September 18. Initial checks in another connected profile had no access; the owner supplied the Search Console property and the correct profile became available. The figures below supersede that initial access limitation. Dates differ across reports; do not combine them into one conversion denominator.

### Google Search Console — Web

Property: `sc-domain:metabolicscience.org`.

| Displayed period | Clicks | Impressions (rounded by UI) | CTR | Average position |
| --- | ---: | ---: | ---: | ---: |
| August 19–September 15 (28 days) | 43 | 18.9K | 0.2% | 41.4 |
| September 9–15 (7 days) | 5 | 4.47K | 0.1% | 35.4 |

Selected 28-day page rows (clicks / impressions): Qsymia comparison 5 / 943; CX11/VCT220 explainer 5 / 210; UBT251 explainer 4 / 255; what-is-semaglutide 2 / 5,563; natural thermogenics 1 / 720. The semaglutide query itself had 2 clicks / 2,761 impressions. These are selected observations, not a complete export. The broad semaglutide query and medical pages do not establish demand for a paid cookbook.

Indexing report last updated September 13: 120 indexed and 127 not indexed. The exclusions comprise 55 pages with redirects, 7 duplicates without a selected canonical, 3 redirect errors, 1 not-found URL and 61 crawled/currently-not-indexed URLs. This is not a count of 127 current defects; historical URLs, reporting lag and Google's indexing decisions must be separated.

The three redirect-error examples were last crawled April 18: `/glp-1/what-is-semaglutide`, `/medications`, `/glp-1/glp1-side-effects`. Today's live HTTP checks found a single 301 to the trailing-slash URL, final HTTP 200 and matching canonical for all three. Requested validation; Search Console visibly confirmed **Validation started, September 18**. This is pending validation, not a passed Google result. No redirect code change was necessary.

The submitted `/sitemap.xml` showed Success, last read September 17, 168 discovered pages before today's publication. The legacy `/api/sitemap` remains in the report with its old March read date; no sitemap was removed or resubmitted during this check. Core Web Vitals had no field data; no performance score is inferred.

### Bing Webmaster Tools

Signed back into the existing Bing account with the same Google profile; selected `metabolicscience.org`. The **7 D / All** report's chart labels September 10–16 and shows **283 clicks, 13.3K impressions, 2.13% CTR**. Totals use All; the UI explicitly states keyword/page tables cover Web only. Do not treat these as identical scopes or directly compare their rates with Google's different dates.

Selected Web page rows:

| Page | Clicks | Impressions | Average position |
| --- | ---: | ---: | ---: |
| Mounjaro dosage chart | 58 | 3.6K | 4.89 |
| Supplements for weight loss | 14 | 855 | 4.96 |
| GLP-1 storage and handling | 14 | 267 | 4.56 |
| GLP-1 gastroparesis | 12 | 420 | 3.14 |
| Muscle and metabolism | 2 | 167 | 3.16 |

Selected Web queries: “mounjaro dosing” 552 impressions / 0 clicks / position 7.09; “mounjaro dosage chart” 103 / 2 / 2.14; “supplements for weight loss” 8 / 2 / 5.75. Small samples cannot establish a commercial winner. The already-scheduled supplement review remains relevant; the Mounjaro and storage articles were revised earlier this week. Do not advance the queue or add paid links to clinical explainers.

## Site funnel — QA excluded

Command: `npm run report:funnel -- --days=7`. Signed private report retrieved at 13:04:29 UTC / 10:04:29 BRT on September 18; September 12–18, America/Sao_Paulo, `qa: false`. September 18 is partial. Raw data stays in local operational state outside the repository; no private signing material is included here.

**129 recorded page-load events; 0 recorded review-click events; 0 recorded offer-click events.** These are actions, not unique visitors. Bots, repeat visits and unflagged manual visits may be included; browser blocking can omit events. Not all site routes are instrumented, so these are not total site traffic.

| Instrumented page | Views | Review clicks | Offer clicks |
| --- | ---: | ---: | ---: |
| Home | 23 | 0 | Not applicable |
| Resources | 3 | 0 | Not applicable |
| Supplements guide (`sg`) | 42 | 0 | Not applicable |
| Natural thermogenics (`nt`) | 14 | 0 | Not applicable |
| Muscle and metabolism (`mm`) | 20 | 0 | Not applicable |
| Boosting metabolism (`bm`) | 2 | 0 | Not applicable |
| Beginner meal planning (`mp`) | 2 | 0 | Not applicable |
| Beginner home workout (`hw`) | 2 | 0 | Not applicable |
| Cookbook assessment | 13 | Not applicable | 0 |
| FITin56 assessment | 8 | Not applicable | 0 |

Cookbook assessment entry codes: direct 4, home 2, sg 4, mp 1, nt 1, resources 1. FITin56: direct 2, mm 2, bm 1, home 1, hw 1, resources 1. No commercial click events were returned for either summary/end position or any source. Source-coded page views do not prove a matching prior click or a joined user journey, so no entry-to-review conversion rate is calculated.

The QA baseline for September 18 was empty. Controlled browser navigation subsequently produced separate `qa: true` review-click and offer-click rows, including resources → cookbook → seller and the FITin56 summary CTA. This confirms those tested paths reached the collector; it does not prove universal coverage across browsers. All seller/checkout inspections used `ms_pb_qa_review` or `ms_f56_qa_review` and are excluded from the commercial result.

## ClickBank and current offer checks

ClickBank's reporting account showed the sign-in form with empty credentials in both available Chrome profiles. **Hops, initial sales, refunds, recurring commissions actually paid and net earnings by TID are unavailable**, not zero. No sales rate, earnings per click or revenue conclusion can be reconciled from the site report. The owner needs to reopen the reporting session to complete this step; no password recovery was attempted.

Public offer and checkout spot checks, September 18, without purchase or payment/customer entry:

- Plant-Based Cookbook seller: Essentials US$9 and Full Bundle US$17, digital access and one-time payment. Basic checkout showed R$52.39 total for this locale, an optional R$139.71 add-on (not selected), 60-day return/replacement text, expected affiliate ID and `ms_pb_qa_review`.
- FITin56 seller: US$57 every three months, US$85 six-month one-time pass, US$114 annual one-time pass. Quarterly checkout showed R$331.82 today and R$331.82 every three months, cancellation wording, 60-day return/replacement text, expected affiliate ID and `ms_f56_qa_review`. Payment agreement was not selected. Other checkout variants and the affiliate-page trial were not rechecked today.

Localized amounts are snapshots, not guaranteed exchange rates or prices for every buyer. No material change to the reviewed public plans was observed. The products, member access, recipes, workouts, support and claimed outcomes have not been tested. Existing assessment dates were preserved because today's edits only add navigation.

## Today's article and distribution

`/metabolism/free-recipes-vs-paid-meal-plans/` answers when organizing features might justify paying, with a three-dinner free exercise, a clearly fictional cost example and a renewal/access checklist. It does not claim paid plans are medically superior or a cookbook is a treatment. The later October 2 format comparison remains unpublished.

Primary sources checked today:

- [NHS recipe library](https://www.nhs.uk/healthier-families/recipes/): actual filters and free alternative; not all recipes are vegan.
- [FTC subscription guidance](https://consumer.ftc.gov/articles/getting-and-out-free-trials-auto-renewals-and-negative-option-subscriptions): cost, trials, cancellation deadlines and records.
- [NIDDK program evaluation](https://www.niddk.nih.gov/health-information/weight-management/choosing-a-safe-successful-weight-loss-program): actual-program evidence, costs, adaptability and qualifications.

Research intent remains an editorial hypothesis; neither account snapshot establishes search volume for this exact comparison. Archive review separated this purchase-decision exercise from the existing ingredient/grocery-list guide and public-product assessment.

Incoming paths verified in export: resources hub, all articles, metabolism index, beginner plant-based guide and cookbook assessment. The guide links to the cookbook assessment using fixed source `fp`, next to a commission disclosure. No direct paid link was added to the guide. Client and server allowlists both accept `fp` only for Plant-Based Cookbook; the normal TID is `ms_pb_fp_review`, with a separate QA TID. Cross-offer attribution is rejected.

## Validation and next actions

Before publication: six operational tests, production build with TypeScript/lint, affiliate-pilot verification, SEO export verification for 169 canonical pages, five incoming links, normal/QA/cross-offer TID assertions and whitespace checks passed. The exported article, cost example, source links, commercial disclosure and resources card were inspected at a 390px viewport; no horizontal overflow was observed.

Publication success must be recorded only after pushing the isolated branch, matching the public release commit and checking actual deployed content and links. The editorial job record and dated live-verification evidence in local operational state are the authoritative completion receipt. Submit changed canonical URLs through IndexNow afterward; acceptance is not indexing.

Next scheduled work remains September 21's grocery-list guide and September 22's supplement revision. Continue distribution and measurement; reconcile real ClickBank reports once the owner restores access. Recheck Google's pending redirect validation on a later authorized run. Do not interpret indexing queues, search impressions or QA clicks as sales.
