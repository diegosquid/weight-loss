# Editorial release preparation — September 23, 2026

## Scope and search evidence

Today's scheduled new guide is `/metabolism/home-workout-subscriptions-cancellation/`. It answers a billing decision: amount payable now, future commitment, renewal, access and cancellation. The September 16 guide covers choosing exercises, equipment and progression. The September 25 free-videos comparison remains unpublished. No missed or future publication was added.

Search Console was inspected in the correct `sc-domain:metabolicscience.org` property, Web search, August 24–September 20, filtered to the exact beginner-workout guide URL. It displayed 0 clicks, 0 impressions and no query rows. This is no recorded search activity in that filter, not evidence of no potential demand or an indexing diagnosis.

Bing Webmaster Tools was inspected for metabolicscience.org, September 15–21. Its All overview displayed 263 clicks and 11.9K impressions; these rounded overview figures are not commercial funnel counts. The Web pages table showed `muscle-and-metabolism` at 164 impressions and 2 clicks. The visible highest-impression queries were predominantly medication questions. A focused public search also surfaced billing/cancellation help and fitness subscription comparisons. No keyword volume or proven demand for today's title is claimed.

## Evidence and editorial decisions

Primary sources checked September 23:

- FTC: https://consumer.ftc.gov/articles/getting-and-out-free-trials-auto-renewals-and-negative-option-subscriptions — trial conversion, reviewing terms, cancellation records and continued charges. No claim about a universal click-to-cancel law.
- Apple: https://support.apple.com/en-us/118428 — subscription billing route, iPhone cancellation path and Apple-specific trial cutoff. Page marked September 14, 2026.
- Google Play: https://support.google.com/googleplay/answer/7018481?hl=en — uninstalling does not cancel, access after cancellation and remaining committed payments.
- ClickBank: https://support.clickbank.com/en/articles/10535349-clickbank-s-return-and-subscription-cancellation-policy — stopping future billing is distinct from refunding past payments; approved recurring refunds cancel the subscription. No unconditional refund guarantee.
- NHS: https://www.nhs.uk/live-well/exercise/strength-and-flex-exercise-plan-how-to-videos/ — free exercise demonstrations with suitability guidance.

The pricing table is explicitly invented, in US dollars, with identical features and excluded taxes/equipment/refunds/price changes. Its arithmetic distinguishes cash paid from monthly equivalents. No actual FITin56 prices, effectiveness findings or product assessment terms were changed; no product, refund or cancellation was tested.

English editorial-team attribution, publication/update September 23, AI-assistance policy link, free alternative and a disclosed optional assessment link are present. The guide has no direct paid link. Existing articles received navigation additions only, with dates preserved. The muscle article's substantive clinical revision remains in the September 24 review queue; this release does not claim its medical content was re-reviewed.

## Distribution and measurement

Explicit incoming links: resources hub, beginner-workout guide and muscle-and-metabolism callout. The export also links from the article index, metabolism index and related-article lists, totaling eight incoming pages. This addresses discoverability without generic banners or paid links in medical guidance.

Fixed entry code `wc` is registered in the page map and the FITin56 server/client allowlists. Normal seller TID: `ms_f56_wc_review`; QA TID: `ms_f56_qa_review`. The source is not accepted for the cookbook. No visitor text or health inputs are tracked.

## Validation before publication

- Six operational tests passed, including client/server allowlist equality, QA isolation, private-report authentication and input rejection.
- Focused source checks passed for guide view, assessment click/view, offer click, cross-offer rejection, normal/QA TIDs and unknown-source fallback.
- Production build passed: 177 generated pages. Pilot verification passed. SEO export verification passed for 171 canonical URLs, metadata, JSON-LD, footnotes and internal links. `git diff --check` passed.
- Actual Chrome mobile review at 390 × 844: rendered page width and scroll width both 384 px. Cost table scrolls 288 px (640/352); billing table scrolls 128 px (480/352). Title, example, billing links, disclosure and editorial-policy link were visibly legible.
- The owner's four untracked reports were preserved; all publication work is in the day's isolated worktree.

Publication is not asserted by this preparation report. Completion requires matching public release commit, exported/public article equality, incoming/outgoing link verification, public mobile inspection and isolated QA funnel events. Dated receipts are stored outside Git under `~/.local/state/metabolic-science/editorial/`; the coordinator records the deployed hash only after those checks. IndexNow acceptance is logged separately and does not establish indexing or rankings.
