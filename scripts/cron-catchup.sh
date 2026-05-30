#!/bin/bash
# cron-catchup.sh — Fallback das 14h: verifica se o artigo do dia ja foi criado
# Se nao foi (ex: Mac dormindo as 10h), executa o cron principal
# Cron: 0 14 * * * /Users/diegodmacedo/Documents/weight-loss/scripts/cron-catchup.sh

set -uo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
LOG_DIR="$PROJECT_DIR/logs"
DATA_BRT=$(TZ="America/Sao_Paulo" date +%Y-%m-%d)

mkdir -p "$LOG_DIR"

# Verifica se ja rodou hoje com sucesso (procura logs do dia com "CRON END")
if ls "$LOG_DIR"/cron-${DATA_BRT}-*.log 1>/dev/null 2>&1; then
  for logfile in "$LOG_DIR"/cron-${DATA_BRT}-*.log; do
    if grep -q "CRON END" "$logfile" 2>/dev/null; then
      # Ja rodou com sucesso hoje — nada a fazer
      exit 0
    fi
  done
fi

# Nao rodou hoje — executar o cron principal
echo "[$(TZ='America/Sao_Paulo' date '+%Y-%m-%d %H:%M:%S')] CATCHUP: cron principal nao rodou hoje, executando agora..." >> "$LOG_DIR/catchup.log"
exec "$PROJECT_DIR/scripts/cron-agent.sh"
