#!/bin/bash
# Retired duplicate runner. Use the existing Codex job's resume command for failures.
set -euo pipefail
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
exec "$PROJECT_DIR/scripts/cron-agent.sh"
