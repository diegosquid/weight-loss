# Scheduling

The former Claude cron and catch-up publisher have been retired. Their compatibility scripts only show status; neither runs an LLM, stashes files nor publishes. There is no secondary cron to install.

The active schedule is the Codex automation attached to the owner's Metabolic Science task, backed by config/editorial-schedule.json and AGENT.md. It runs at 10:00 America/Sao_Paulo on weekdays during the September 14–October 9, 2026 pilot. The local machine and Codex must be available for local execution. Missed jobs do not justify backdated or bulk publication.

Use `npm run editorial:status` to inspect a deterministic job. Completion is recorded under ~/.local/state/metabolic-science/editorial/ only after production identity and page verification. IndexNow status is independent. See AGENT.md for failure recovery and weekly commercial reporting.
