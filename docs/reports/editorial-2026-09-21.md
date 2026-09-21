# Editorial run — September 21, 2026

## Scope and evidence

Today's scheduled new article is `/metabolism/weekly-grocery-list-from-recipes/`. `editorial:status` returned this task with no completed record or active job. `editorial-job.mjs begin` acquired the lock and created the dated isolated worktree from `25eccb1`; the owner's checkout and its four existing untracked reports were left untouched. No future or missed article was published.

Archive comparison found two adjacent pieces: the September 14 guide supplies a particular four-dinner example; the September 18 comparison addresses purchase decisions. Today's article teaches the calculation for readers' own recipes, including serving factors, like-for-like units, supplies already allocated elsewhere, drained yield, package rounding and remainders. It does not repeat a complete meal plan or claim dietary adequacy, tested recipes, savings or weight-loss outcomes.

Current public search results showed intent around turning selected recipes into a combined shopping list, including app requests and how-to articles. This supports a how-to format, not a search-volume claim. The only connected Chrome profile lacked access to the Search Console property; the previously authorized account was absent from its account menu. Bing opened its sign-in page. Current first-party query metrics and the pending Google validation outcome are **unavailable** today, not zero. September 18 figures were not reused as current data. Monday's scope does not include a new commercial performance report.

## Primary-source research

Checked September 21:

- [EPA: Preventing Wasted Food at Home](https://www.epa.gov/recycle/preventing-wasted-food-home), page updated June 22, 2026: meal planning, quantities and inventory. Opened and read current page.
- [USDA FSIS: How do I handle leftovers safely?](https://ask.fsis.usda.gov/article/How-do-I-handle-leftovers-safely): prompt refrigeration, 40°F or below, two-hour/one-hour limits and three-to-four-day refrigerated storage. The web fetch timed out; the actual browser page loaded and its full guidance was read. The visible source update was December 20, 2024.
- [NHS recipe library](https://www.nhs.uk/healthier-families/recipes/): free recipe alternative. Opened current page; no assumption that every recipe is vegan or suitable for every allergy.

MyPlate and the longer FSIS page returned fetch errors during research; those pages and the MyPlate PDF are not used as article references. The serving arithmetic and package examples are original, explicitly hypothetical illustrations, not recipes attributed to the agencies.

## Distribution and commercial path

Added a resources-hub card and contextual incoming links from both earlier guides, preserving their publication and update dates because these are navigation additions. All-articles and metabolism indexes include the new piece automatically: five incoming pages verified in export.

The optional cookbook-assessment link uses fixed source `gl` with a nearby affiliate disclosure. Both allowlists accept it only for Plant-Based Cookbook: normal TID `ms_pb_gl_review`, QA TID `ms_pb_qa_review`. FITin56 rejects this source. The new article has no direct paid link, new price claim or product-efficacy claim. No product assessment or checkout terms were changed; no purchase was made.

## Prepublication checks

- `npm ci` completed. Its existing dependency advisory was not addressed with an unrelated forced major upgrade.
- Six operational tests, production build, TypeScript/lint, affiliate-pilot checks and SEO checks passed. Export contains 170 canonical pages with no broken internal links reported.
- Focused assertions passed for all five incoming links, the assessment source, normal/QA TIDs, source-specific collector events and cross-offer rejection.
- Worked quantities independently checked: chickpeas 120 + 480 = 600 g; minus 240 g already owned leaves 360 g; two 240 g cans cover that and leave 120 g. Pasta requirement 100 g minus 60 g owned leaves 40 g; a 250 g bag leaves 210 g after that use.
- The actual export was inspected at a 390px mobile viewport, including the ingredient example, disclosure, sources and resources link. Content and scroll widths were both 384px, without horizontal overflow. The public canonical excluded QA query parameters.

## Completion gate

Push only the verified job files after checking origin/main. Confirm the public release commit and actual article bodies, incoming/outgoing links and mobile flow before `editorial-job.mjs complete`. Keep dated production, browser/QA and IndexNow receipts under local editorial state. IndexNow acceptance is submission, not indexing. Do not include QA events in commercial results; ensure client hydration before following a QA link.
