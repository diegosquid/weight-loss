#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { sign } from "node:crypto";
const args = process.argv.slice(2);
const days = Number(args.find(x => x.startsWith("--days="))?.split("=")[1] || 7);
if (!Number.isInteger(days) || days < 1 || days > 90) throw new Error("Use --days=1 through --days=90");
const day = date => new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
const pathname = `/api/funnel-report/?from=${day(new Date(Date.now() - (days - 1) * 86400000))}&to=${day(new Date())}${args.includes("--qa") ? "&qa=1" : ""}`;
const timestamp = Date.now().toString();
const key = readFileSync(`${homedir()}/.config/metabolic-science/funnel-report-key.pem`);
const signature = sign(null, Buffer.from(`${timestamp}\nGET\n${pathname}`), key).toString("base64");
const response = await fetch(`https://metabolicscience.org${pathname}`, { headers: { "x-report-time": timestamp, "x-report-signature": signature }, signal: AbortSignal.timeout(30000) });
if (!response.ok) throw new Error(`Private report unavailable: HTTP ${response.status}`);
console.log(JSON.stringify(await response.json(), null, 2));
