# Editorial revision — September 22, 2026

## Scope

Tuesday's scheduled revision is `/supplements/supplements-for-weight-loss/`. `editorial:status` returned this task with no completed record or active job; `editorial-job.mjs begin` created the isolated dated worktree from `36ea79c`. Production identified that same starting commit. The owner's checkout and four untracked reports were preserved. No new or future article was published.

## Search evidence and intent

Read the authorized site's live dashboards on September 22. The figures below describe different windows and must not be combined or treated as before/after evidence.

- Google Search Console, Web, exact article URL, August 23–September 19: **267 impressions, 0 clicks, 0% CTR, average position 9.9**. Visible queries include “what are the most effective dietary supplements for weight loss?” (6 impressions), “most effective dietary supplements weight loss” (2), and three single-impression queries. The visible query rows do not account for every page impression.
- Bing Webmaster Tools, this article's Web page report with **7 D** selected: **600 impressions, 4 clicks, 0.67% CTR, average position 5.57**. The chart is labeled September 14–20, while its visible daily table contains September 15–20; preserve that UI discrepancy rather than inventing a seventh daily value. Queries shown include “weight loss supplements” (17 impressions, position 8.53), “weight loss supplements ingredients” (7, 2.71), and “effective supplements for weight loss” (5, 5.00). These small counts support an evidence/safety explainer, not a product ranking or a sales forecast.

The Google dashboard initially changed to another property during inspection. That state was not used. A separate tab with the explicit Metabolic Science property, exact page and dates provided the article figures above. No account changes or credentials were needed. Tuesday does not include a ClickBank sales review; revenue and conversions were not inferred from search metrics or QA.

## Research and changes

Current primary sources opened and checked:

- [NIH ODS weight-loss supplement fact sheet](https://ods.od.nih.gov/factsheets/WeightLoss-HealthProfessional/): retained ingredient uncertainty, formulation differences and safety context.
- [NCCIH berberine assessment](https://www.nccih.nih.gov/health/berberine-and-weight-loss-what-you-need-to-know): inconclusive evidence, digestive effects, interactions and pregnancy/infant cautions. This page's own last update is November 2023; checking it today does not make it a 2026 research review.
- [Lei et al., JAMA Network Open, January 16, 2026](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2844037): added a concise account of the randomized study in 337 adults in China with obesity and MASLD without diabetes. The text distinguishes the studied regimen and six-month duration, primary fat outcomes and secondary body weight, shared lifestyle guidance and population limits. It does not prescribe the trial dose or claim that a commercial formula was tested.
- [FDA 101: Dietary Supplements](https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements), [FDA supplement overview](https://www.fda.gov/consumers/consumer-updates/dietary-supplements) and [weight-loss product notifications](https://www.fda.gov/drugs/medication-health-fraud-notifications/weight-loss-product-notifications): clarified US premarket approval, medicine interactions and adverse-reaction advice. Absence from the warning list remains explicitly insufficient to establish safety.
- [NIH ODS supplement quality guidance](https://ods.od.nih.gov/factsheets/WYNTK-Consumer/): distinguished manufacturing/ingredient verification from evidence of effectiveness. The bottle comparison is an original hypothetical example, not a review of actual brands.

Updated the search description to answer effectiveness and safety intent. Preserved the title, canonical URL, March 27 original publication date and editorial-team author; September 22 is the substantive revision date. No new condition-specific treatment or supplement recommendation was added.

## Distribution and monetization

The revised callout offers the free beginner plan and the existing recipe-to-grocery-list guide, then the optional Plant-Based Cookbook assessment with its costs/free-alternatives context and nearby affiliate disclosure. The existing fixed `source=sg` remains unchanged; there is no direct paid link in the medical explainer. No offer, price claim, checkout term or tracking code changed. Existing article/category entries and contextual incoming links remain in place; the article description updates those generated cards.

## Validation and completion gate

Six operational tests, the production build (including TypeScript/lint), affiliate-pilot verification and SEO export verification passed: 170 canonical pages, no broken internal links reported. The final export was inspected at 390px, including the comparison table, citations, preserved dates and disclosed callout. Page client/scroll widths were both 384px; the 352px table viewport contains 480px of scrollable content. Focused content assertions confirmed the new study, source links and free guide, the fixed assessment source, one H1 and no direct paid link. Recheck origin/main before pushing only the revision and this report. Publication requires the exact public release commit, matching article body and metadata, live incoming/outgoing links and mobile QA before recording completion. Store dated verification, QA and targeted IndexNow receipts in local editorial state. IndexNow acceptance means submission, not confirmed indexing; QA events are excluded from commercial results.
