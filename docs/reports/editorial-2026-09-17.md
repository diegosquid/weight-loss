# September 17, 2026 — storage guide review

Scheduled archive review: `content/medications/glp1-storage-handling.mdx`. Started from `6398954f8b297eee932720fa92c9f70ef7affce3` in the isolated `codex/editorial-2026-09-17` worktree. The saved project's untracked reports were preserved. No new article or later calendar task was advanced.

## Current search context

Authenticated dashboards were inspected on September 17:

- Bing, selected 30 days, August 17–September 15: rounded totals 1.2K clicks and 49.8K impressions, with the All traffic filter. Keyword rows represent Web traffic; visible leaders include Mounjaro dosing, dosage chart and doses, plus Contrave. These totals must not be treated as Web-only keyword totals.
- Google Search Console, selected 28 days, August 18–September 14: 45 clicks, 19.1K impressions, 0.2% CTR and average position 41.6. Visible queries include semaglutide, the site name and semaglutide weight-loss variations.
- The storage topic is an existing scheduled support article. The visible leading queries do not establish storage-specific search volume. No growth or commercial effect is attributed to this update.

## Evidence and changes

The September 15 revision was already present on origin/main; the older saved checkout was not used as the editing baseline. Current manufacturer PDFs were opened and their storage sections checked:

- [Mounjaro US prescribing information](https://pi.lilly.com/us/mounjaro-uspi.pdf), section 16.2, printed pages 24–25.
- [Zepbound US prescribing information](https://pi.lilly.com/us/zepbound-uspi.pdf), section 16.2, printed page 31.
- [Ozempic US prescribing information](https://www.novo-pi.com/ozempic.pdf), recommended storage, printed page 9.
- [Wegovy US prescribing information](https://www.novo-pi.com/wegovy.pdf), recommended storage, printed page 17.
- [Trulicity US prescribing information](https://pi.lilly.com/us/trulicity-uspi.pdf), section 16.2, printed page 30.

The existing eight storage rows matched the current documents. Added Trulicity's single-dose presentation and distinguished printed expiry, cumulative room-temperature exposure and time after first use. Added short explanations that refrigerating an opened Ozempic multidose pen does not restart its 56-day period, and that the Wegovy single-dose storage allowance does not allow device reuse.

An incoming-link inspection found a contradictory storage claim in `content/glp-1/trulicity-vs-ozempic.mdx`: it assigned Ozempic a 14-day limit. Corrected that paragraph from the current labels and scoped the adjacent device description to the available presentations. This is a targeted safety correction supporting the scheduled review, not a full review of the comparison article; its visible revision note explicitly states that limitation.

Both original publication dates and editorial-team authorship were preserved; updatedAt reflects substantive storage/device corrections. Neither page contains direct paid links. No affiliate offer, price, attribution code or calculator was changed, and no purchase or third-party message was made.

## Validation

- Six operational tests passed. Production export, TypeScript and lint passed.
- Affiliate pilot verification passed: historical routes, offer attribution and disclosures preserved.
- SEO export verification passed for all 168 canonical pages, including metadata, one H1, structured data, footnotes and internal links.
- At a 390 px browser viewport both revised pages had 384 px document width and correct canonicals. The storage table remained independently scrollable, 352 px visible / 480 px content. The new deadline list and corrected comparison paragraph were visually checked.
- The original URLs remain unchanged. Existing incoming navigation from the Mounjaro guide and comparison, plus the article/category indexes, is retained. The storage article still links to the Mounjaro dose explainer.

After deployment, verify release identity, compare both public article bodies with the validated export, check navigation and mobile rendering, then record completion. Dated production evidence is retained under `~/.local/state/metabolic-science/editorial/`. Submit only affected canonical pages and changed index pages to IndexNow; acceptance is not indexing or ranking.
