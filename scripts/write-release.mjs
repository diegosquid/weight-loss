import fs from "node:fs";
import { execFileSync } from "node:child_process";
const commit = execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
fs.writeFileSync("public/release.json", JSON.stringify({ commit, builtAt: new Date().toISOString() }) + "\n");
