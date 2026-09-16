# September 16, 2026 — choosing a beginner home workout

Scheduled task: one new guide at `/metabolism/choosing-beginner-home-workout/`. Work started from `b40b573` in the isolated `codex/editorial-2026-09-16` worktree. Existing untracked owner reports in the saved project were preserved. No future publication or archive review was moved forward.

## Current search evidence and intent

- Bing Webmaster Tools, checked September 16: selected 30 days, August 16–September 14, 2026; displayed rounded totals of 1.1K clicks and 45.7K impressions. Leading visible queries by impressions concern Mounjaro dosing and other medications.
- Google Search Console, checked September 16: selected 28 days, August 17–September 13, 2026; 44 clicks, 19.1K impressions, 0.2% CTR and average position 41.6. Visible queries include semaglutide and the site name.
- General web search for choosing a beginner home workout surfaced program-selection, equipment and schedule intent. This supports an editorial format, not a measured keyword volume or a claim that this site already attracts that audience.
- Archive search found the FITin56 assessment and general metabolism/exercise articles, but no dedicated beginner program-selection guide. The new piece addresses equipment, time, instruction, adaptations and progression. Later cancellation, free-versus-paid and small-space tasks retain their own narrower purposes.

## Sources and editorial boundaries

Primary sources opened and checked September 16:

- [CDC: Adding Physical Activity as an Adult](https://www.cdc.gov/physical-activity-basics/adding-adults/index.html), dated December 4, 2025: weekly recommendations, shorter activity periods, matching activity to ability and circumstances requiring medical advice.
- [NHS: Strength exercises](https://www.nhs.uk/live-well/exercise/strength-exercises/), reviewed February 28, 2024: home demonstrations, stable-chair criteria and gradual repetition increases.
- [NHS: How to improve strength and flexibility](https://www.nhs.uk/live-well/exercise/how-to-improve-strength-flexibility/), reviewed July 21, 2026: gradual progression and the absence of a fixed required strength-session duration.
- [NHS: Strength and Flex videos](https://www.nhs.uk/live-well/exercise/strength-and-flex-exercise-plan-how-to-videos/): free movement demonstrations and suitability/safety information.

The worked comparison is explicitly fictional. The article offers program-selection criteria, not an individualized workout prescription, product test or weight-loss promise. It links to the existing dated FITin56 public-offer assessment without adding new price, billing, efficacy or seller claims. The assessment itself was not changed.

## Distribution and measurement

Added a free-guide card to `/resources/` and contextual links from `/metabolism/muscle-and-metabolism/` and `/metabolism/boosting-metabolism/`. The article is also included in the article index, metabolism category and sitemap. The nutrition guide is not a sufficiently close match to warrant a forced contextual exercise link.

The new `hw` source is present in both funnel and affiliate allowlists for FITin56 only. Normal attribution is `ms_f56_hw_review`; explicit QA remains `ms_f56_qa_review`. The guide contains a nearby affiliate disclosure, free NHS alternatives and no direct paid link. Existing article publication/update dates were preserved because the edits only add navigation.

## Validation

Six operational tests, production build, type/lint checks, affiliate pilot verification and the 168-page SEO export verification passed. The new route was separately checked for its five intended incoming pages, outgoing assessment link, all four funnel event contracts, normal/QA TIDs and offer-specific source isolation.

At 390 px, the rendered guide had one H1, the expected canonical and no horizontal document overflow (384 px content width). The title, comparison, disclosure and resources entry were reviewed in the browser. Lists avoid narrow mobile comparison columns. The day's QA report was empty before production testing.

Production identity, article content, live navigation and QA event evidence are checked after deployment and retained in the dated local editorial evidence files. Completion requires the matching public release and `editorial-job.mjs complete`; the build alone is not publication. IndexNow acceptance is recorded separately and does not establish indexing, rankings or sales.
