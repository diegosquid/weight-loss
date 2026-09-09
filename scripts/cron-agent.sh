#!/bin/bash
# Compatibility entry point: scheduling now belongs to the Codex thread automation.
# This command only reports state; it never launches a second publishing agent.
set -euo pipefail
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
echo "Publication is managed by the Metabolic Science Codex automation. Current job state:"
exec node "$PROJECT_DIR/scripts/editorial-job.mjs" status
