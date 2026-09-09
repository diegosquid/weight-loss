# Metabolic Science — editorial operation

The owner authorized this four-week SEO and ClickBank cycle on September 9, 2026. The public site is English. Read this file, CONTENT_RULES.md and config/editorial-schedule.json before a scheduled job. Use the current thread's native Codex automation; do not launch another agent or the retired Claude cron.

## Schedule and scope

The single schedule is config/editorial-schedule.json: September 14–October 9, 2026, weekdays at 10:00 America/Sao_Paulo. Monday/Wednesday/Friday: at most one new article. Tuesday/Thursday: one existing article revision. Friday also reviews commercial metrics. After this cycle, report the results and propose the next queue; do not keep mass-producing beyond the configured dates. Safety-critical corrections take precedence over new commercial content.

## Begin safely

1. Run `npm run editorial:status` in the saved project. If no task or already complete, stay quiet. After the cycle ends, deliver one final cycle report and pause the matching automation using the Codex automation tool.
2. Run `node scripts/editorial-job.mjs begin`. It acquires an exclusive lock, fetches origin/main, checks for an existing publication and creates an isolated worktree under ~/.local/state/metabolic-science/editorial/worktrees/. It never stashes or overwrites the owner's working tree. If an active/failed job exists, inspect its record and worktree; use `resume` for that day's job. Never delete someone else's work or start a second publication to bypass a lock.
3. Work only in the returned worktree. Run `npm ci`. Verify the day, source path and published state. Missed days are not permission to publish a batch or backdate an article. Record and report a failure that needs intervention.

## Research and publish

4. Inspect current search intent and available Bing/Search Console queries. If unavailable, label this limitation; do not invent keyword volume. Check the existing archive for overlap. Research primary sources appropriate to the claim. Check seller and checkout terms live before changing a product assessment; never purchase or send a message to a seller without separate authorization.
5. Follow CONTENT_RULES.md. For each new guide, add a resources-hub entry and at least one contextual link from a genuinely relevant existing article. Link to an existing assessment only where useful. Add a fixed source code to config/funnel.json and lib/affiliate.ts when introducing a tracked entry path; validate both allowlists. Never add a direct paid link to clinical articles, calculators or their results.
6. Run `npm run test:operations`, `npm run build`, `npm run verify:pilot`, and `npm run verify:seo`. Review the actual mobile page, links, footnotes and disclosures. Correct failures before publishing. Do not invent hands-on experience, author credentials or a medical review.
7. Stage only that job's files; commit on its codex/editorial-YYYY-MM-DD branch. Fetch origin/main again. Rebase the isolated branch on origin/main if needed, preserving concurrent work; repeat affected checks. Push the verified commit with `git push origin HEAD:main` (never force). Stop on a rejected push until the divergence is resolved.
8. Wait for the automatic Netlify deploy. Verify public release.json identifies the commit, then inspect the actual article, canonical, both incoming and outgoing links, metadata and mobile page. Call `node scripts/editorial-job.mjs complete <full deployed commit>`. This requires production identity and article verification before it records success.
9. Submit just the changed canonical URLs and their changed index pages to IndexNow. Record its response separately; accepted submission is not indexing. A failed submission is retried independently, never by republishing. Keep TLS verification enabled.
10. If a step fails, record the concrete reason with `node scripts/editorial-job.mjs fail <reason>` and report what remains. Do not claim successful publication from a log terminator, build result or HTTP 200 alone. Preserve failed worktrees for recovery.

## Friday commercial review

Run `npm run report:funnel -- --days=7`. This signs a private request using the local key at ~/.config/metabolic-science/funnel-report-key.pem; never print, commit or transmit that key. Compare page loads, review clicks and offer clicks by fixed source/position. These are action counts, not unique visitors. Exclude QA. Use compatible denominators and show counts with each rate.

Inspect ClickBank's available reports for matching ms_pb_*_review and ms_f56_*_review TIDs, real hops, initial sales, refunds, recurring commissions actually paid and net earnings. If browser access is unavailable, say unavailable, not zero. Exclude TIDs used for manual QA. Do not infer revenue from our on-site events.

Record a dated report in docs/reports/ with observations and next action. No winner/loser claim from a handful of clicks; insufficient volume means improve distribution or continue measurement. Keep review pricing and cancellation terms current. Notify only on a meaningful completion, failure, changed commercial finding or required action. Stay quiet on unchanged/skipped jobs. No email/Slack messages are authorized.
