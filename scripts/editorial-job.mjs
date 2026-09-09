#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import matter from "gray-matter";
import schedule from "../config/editorial-schedule.json" with { type: "json" };

export const brtDay = (date = new Date()) => new Intl.DateTimeFormat("en-CA", { timeZone: schedule.timezone, year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
export function taskForDay(day) {
  if (day < schedule.startDate || day > schedule.endDate) return null;
  const weekday = new Date(`${day}T12:00:00-03:00`).getUTCDay();
  return schedule.tasks.find(task => task.date === day) || ([2, 4].includes(weekday) ? { date: day, kind: "review", path: schedule.reviewQueue[(Math.floor((Date.parse(day) - Date.parse(schedule.startDate)) / 86400000 / 7) * 2 + (weekday === 4 ? 1 : 0)) % schedule.reviewQueue.length] } : null);
}
export function assertPublicationDay(frontmatter, day) {
  if (String(frontmatter.publishedAt) !== day) throw new Error("Publication date does not match the scheduled day");
}
const run = () => {
  const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
  const directory = path.join(os.homedir(), ".local/state/metabolic-science/editorial");
  fs.mkdirSync(directory, { recursive: true, mode: 0o700 });
  const day = brtDay(); const task = taskForDay(day);
  const record = path.join(directory, `${day}.json`); const lock = path.join(directory, "active.json");
  const git = (args, cwd = root) => execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  const read = file => fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : null;
  const save = (file, data) => { fs.writeFileSync(file + ".tmp", JSON.stringify(data, null, 2) + "\n", { mode: 0o600 }); fs.renameSync(file + ".tmp", file); };
  const command = process.argv[2] || "status";
  const print = data => console.log(JSON.stringify(data, null, 2));
  if (command === "status") return print({ day, task, record: read(record), active: read(lock), schedule: { start: schedule.startDate, end: schedule.endDate, timezone: schedule.timezone } });
  if (command === "begin") {
    if (!task) return print({ status: "skip", reason: "No scheduled work today", day });
    if (read(record)?.status === "complete") return print({ status: "skip", reason: "Already verified complete", day });
    if (fs.existsSync(lock)) throw new Error("An active job exists. Inspect status and resume that worktree, or record an explicit failure; never start a duplicate.");
    const worktree = path.join(directory, "worktrees", day);
    const active = { day, task, worktree, startedAt: new Date().toISOString(), status: "running" };
    fs.writeFileSync(lock, JSON.stringify(active), { flag: "wx", mode: 0o600 });
    try {
      git(["fetch", "origin", "main"]);
      if (task.kind === "new") {
        const files = git(["ls-tree", "-r", "--name-only", "origin/main", "content"]).split("\n").filter(x => /\.mdx?$/.test(x));
        if (files.includes(task.path)) throw new Error("Queued URL already exists: review instead of publishing a duplicate");
        for (const file of files) { const { data } = matter(git(["show", `origin/main:${file}`])); if (String(data.publishedAt) === day) throw new Error("An article is already published today; no second automated publication"); }
      }
      if (fs.existsSync(worktree)) throw new Error("Worktree already exists. Resume it after inspecting the previous failure; do not overwrite it.");
      git(["worktree", "add", "-b", `codex/editorial-${day}`, worktree, "origin/main"]);
      save(record, active); print(active);
    } catch (error) { save(record, { ...active, status: "failed", error: error.message }); fs.unlinkSync(lock); throw error; }
    return;
  }
  if (command === "resume") {
    const active = read(lock) || read(record);
    if (!active?.worktree || active.day !== day || active.status === "complete") throw new Error("No resumable job today");
    if (!fs.existsSync(lock)) fs.writeFileSync(lock, JSON.stringify({ ...active, status: "running" }), { flag: "wx", mode: 0o600 });
    return print(active);
  }
  if (command === "fail") {
    const active = read(lock); if (!active) throw new Error("No active job");
    const reason = process.argv.slice(3).join(" "); if (!reason) throw new Error("Include the concrete failure reason");
    save(path.join(directory, `${active.day}.json`), { ...active, status: "failed", error: reason }); fs.unlinkSync(lock); return print({ status: "failed", reason });
  }
  if (command === "complete") return (async () => {
    const active = read(lock); if (!active || active.day !== day) throw new Error("No active job for today");
    const commit = process.argv[3]; if (!/^[a-f0-9]{40}$/.test(commit || "")) throw new Error("Pass the full deployed commit hash");
    git(["fetch", "origin", "main"]); git(["merge-base", "--is-ancestor", commit, "origin/main"]);
    const { data } = matter(git(["show", `${commit}:${active.task.path}`]));
    if (active.task.kind === "new") assertPublicationDay(data, day);
    const relative = active.task.path.replace(/^content\//, "").replace(/\.mdx?$/, "");
    const url = `https://metabolicscience.org/${relative}/`;
    const releaseResponse = await fetch(`https://metabolicscience.org/release.json?verify=${Date.now()}`, { signal: AbortSignal.timeout(30000) });
    if (!releaseResponse.ok || (await releaseResponse.json()).commit !== commit) throw new Error("Production does not identify the requested commit");
    const response = await fetch(url, { signal: AbortSignal.timeout(30000) }); const html = await response.text();
    const escaped = String(data.title).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
    if (!response.ok || !html.includes(escaped) || !html.includes(`rel="canonical" href="${url}"`)) throw new Error("Public article identity or canonical verification failed");
    const completed = { ...active, status: "complete", commit, url, completedAt: new Date().toISOString() };
    save(record, completed); fs.unlinkSync(lock); print(completed);
  })();
  throw new Error("Commands: status, begin, resume, fail <reason>, complete <full deployed commit>");
};
if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) await run();
