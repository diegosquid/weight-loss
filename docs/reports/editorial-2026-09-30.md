# Editorial execution — September 30, 2026

Today's scheduled new guide: `/metabolism/small-space-home-workout-setup/`.

The isolated `codex/editorial-2026-09-30` checkout started from current origin/main. The owner's four untracked SEO reports were preserved in the main checkout. No missed or future articles were added.

## Intent and scope

The archive already covers program selection, free versus paid structure, and subscription billing. Today's guide answers a separate setup question: usable movement space, noise, equipment storage, screen access and setup time. It offers a constraints table and a fictional comparison, not a workout prescription or a claim that a particular program fits a small room.

Search Console, Web (text), June 28–September 27, inspected September 30: site total 120 clicks and 54,383 impressions, displayed CTR 0.2%, position 38.6. A query-containing `workout` filter returned 0 clicks and 1 impression (position 37), for `thermogenic blends for workouts`. Filtered data may be partial. This is not demonstrated demand for today's topic, nor a measure of total market demand.

Bing, 3 months, All, June 29–September 28: displayed site totals 2.4K clicks, 111.1K impressions, CTR 2.16%. The first 25 of 1,796 keyword rows were inspected, sorted by impressions; they were dominated by medication queries (for example, `mounjaro dosing`: displayed 3.1K impressions, 1 click). No small-space workout query appeared in that inspected slice. Topic-specific Bing totals are unavailable from this observation; they are not recorded as zero. Bing's keyword table is Web-only even when headline metrics use All. Windows and scopes are not combined.

The scheduled topic remains a distribution experiment within the existing exercise collection. No search-volume, ranking, sales or product-effectiveness claim is made.

## Sources checked

- NHS strength exercises: https://www.nhs.uk/live-well/exercise/strength-exercises/ — chair requirements and illustrated sit-to-stand/wall press-up examples.
- NHS sitting exercises: https://www.nhs.uk/live-well/exercise/sitting-exercises/ — gentle seated resource.
- NHS Strength and Flex demonstrations: https://www.nhs.uk/live-well/exercise/strength-and-flex-exercise-plan-how-to-videos/ — demonstrations and suitability guidance; page reviewed August 19, 2026.
- CDC adult activity overview: https://www.cdc.gov/physical-activity-basics/guidelines/adults.html — general weekly guidance and shorter activity periods.

Room checks and examples are identified as editorial planning aids. No universal floor dimensions, calorie-burn promise, product trial, invented author credential or medical review is claimed.

## Distribution and attribution

- Added resources-hub card.
- Added contextual incoming links in `choosing-beginner-home-workout` and `free-workout-videos-vs-paid-programs`. Their original publication/update dates remain unchanged for these link-only additions.
- Added fixed `ss` page/source code to both funnel and affiliate allowlists.
- Guide links to free resources and to the existing FITin56 assessment with adjacent commission disclosure. It contains no direct paid link, product price or new claim about the seller's contents.
- Production TID is `ms_f56_ss_review`; manual QA uses `ms_f56_qa_review`. These are action counts, not sales or unique visitors.

## Validation and publication gate

- `npm ci` completed; existing dependency audit reports one high and one critical advisory. No dependency changes in this editorial job.
- All six operational tests passed.
- Production build, including lint/type checks, passed: 180 generated pages.
- Affiliate pilot validation passed.
- SEO export verification passed: 174 canonical pages, one H1, valid metadata/JSON-LD, resolved footnotes and internal links.
- Additional assertions passed for the three incoming links, absence of a HopLink in the guide, `ss` attribution, separate QA TID and collector acceptance.
- Browser preview checked at 390 × 844: document client/scroll width 384/384; table 352/480 with horizontal overflow auto. Reference 3 lands at y=95.95 below the 65px sticky header; reference return works.

Publication is recorded as complete only after the public release identifies the pushed commit, rendered content/incoming/outgoing links are verified, and the public QA journey is checked. Deployment, journey and IndexNow receipts are stored outside the repository under `~/.local/state/metabolic-science/editorial/` for today's date. IndexNow acceptance is not indexing. Today is not the Friday commercial report; no ClickBank sales result is inferred from testing.
