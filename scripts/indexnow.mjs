#!/usr/bin/env node
// indexnow.mjs — Notifica o IndexNow (Bing, Yandex, Seznam, Naver, Yep) sobre
// URLs novas ou atualizadas, para indexacao quase imediata.
//
// Uso:
//   node scripts/indexnow.mjs <url> [url2 ...]   # submete URLs especificas
//   node scripts/indexnow.mjs --latest           # artigo mais recente em content/ + paginas-indice
//   node scripts/indexnow.mjs --sitemap          # TODAS as URLs de dist/sitemap.xml (backfill)
//
// Sem dependencias externas — usa o fetch nativo (Node 18+).
//
// A chave fica em public/<key>.txt e e servida em https://metabolicscience.org/<key>.txt.
// O IndexNow valida a posse do dominio buscando esse arquivo, entao ele PRECISA estar
// publicado (deploy feito) antes que a submissao seja aceita.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HOST = "metabolicscience.org";
const BASE_URL = `https://${HOST}`;
// Hub unico do IndexNow — repassa a notificacao a todos os buscadores participantes
// (Bing, Yandex, Seznam, Naver, Yep). Pingar so um endpoint ja cobre todos.
const ENDPOINT = "https://api.indexnow.org/indexnow";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

/** Descobre a chave a partir do arquivo de verificacao em public/ (fonte unica de verdade). */
function resolveKey() {
  const publicDir = path.join(ROOT, "public");
  const candidates = fs
    .readdirSync(publicDir)
    .filter((f) => /^[a-f0-9-]{8,128}\.txt$/i.test(f));
  for (const file of candidates) {
    const key = file.replace(/\.txt$/i, "");
    const content = fs.readFileSync(path.join(publicDir, file), "utf8").trim();
    if (content === key) return key;
  }
  throw new Error(
    "Arquivo de chave do IndexNow nao encontrado em public/. " +
      "Esperado: public/<key>.txt cujo conteudo seja exatamente <key>."
  );
}

/** Le o frontmatter (campos simples) de um arquivo .md/.mdx sem dependencias. */
function readFrontmatter(file) {
  const raw = fs.readFileSync(file, "utf8");
  const block = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!block) return {};
  const fm = {};
  for (const line of block[1].split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*"?([^"]*?)"?\s*$/);
    if (m) fm[m[1]] = m[2].trim();
  }
  return fm;
}

/** Acha o artigo mais recente (por updatedAt/publishedAt) em content/<categoria>/. */
function findLatestArticle() {
  const contentDir = path.join(ROOT, "content");
  let best = null;
  for (const cat of fs.readdirSync(contentDir, { withFileTypes: true })) {
    if (!cat.isDirectory()) continue;
    const dir = path.join(contentDir, cat.name);
    for (const file of fs.readdirSync(dir)) {
      if (!/\.mdx?$/i.test(file)) continue;
      const fm = readFrontmatter(path.join(dir, file));
      const date = fm.updatedAt || fm.publishedAt;
      if (!date) continue;
      const slug = file.replace(/\.mdx?$/i, "");
      if (!best || date > best.date) {
        best = { date, category: cat.name, slug, url: `${BASE_URL}/${cat.name}/${slug}` };
      }
    }
  }
  return best;
}

/** Extrai todas as <loc> do sitemap gerado em dist/sitemap.xml. */
function readSitemapUrls() {
  const sitemap = path.join(ROOT, "dist", "sitemap.xml");
  if (!fs.existsSync(sitemap)) {
    throw new Error("dist/sitemap.xml nao existe. Rode `npm run build` antes de usar --sitemap.");
  }
  const xml = fs.readFileSync(sitemap, "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function submit(urls) {
  const unique = [...new Set(urls.filter(Boolean))];
  if (unique.length === 0) {
    console.error("Nenhuma URL para submeter.");
    process.exit(1);
  }

  const key = resolveKey();
  const payload = {
    host: HOST,
    key,
    keyLocation: `${BASE_URL}/${key}.txt`,
    urlList: unique,
  };

  console.log(`IndexNow → ${ENDPOINT}`);
  console.log(`Chave: ${key} (${BASE_URL}/${key}.txt)`);
  console.log(`Submetendo ${unique.length} URL(s):`);
  for (const u of unique) console.log(`  • ${u}`);

  if (process.argv.includes("--dry-run")) {
    console.log("\n[dry-run] Nada foi enviado.");
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const meanings = {
    200: "OK — URLs aceitas.",
    202: "Aceito — recebido; validacao da chave pendente.",
    400: "Bad Request — formato invalido.",
    403: "Forbidden — chave invalida (arquivo nao encontrado ou conteudo divergente). O arquivo da chave ja esta publicado no dominio?",
    422: "Unprocessable — URLs nao pertencem ao host ou chave nao confere.",
    429: "Too Many Requests — excesso de submissoes; tente mais tarde.",
  };
  const note = meanings[res.status] || "(status inesperado)";
  console.log(`\nResposta: HTTP ${res.status} — ${note}`);

  if (res.status === 200 || res.status === 202) {
    console.log("✓ Submissao concluida.");
    return;
  }
  const text = await res.text().catch(() => "");
  if (text) console.error(text);
  process.exit(1);
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    console.log(
      [
        "Uso:",
        "  node scripts/indexnow.mjs <url> [url2 ...]   submete URLs especificas",
        "  node scripts/indexnow.mjs --latest           artigo mais recente + paginas-indice",
        "  node scripts/indexnow.mjs --sitemap          todas as URLs de dist/sitemap.xml",
      ].join("\n")
    );
    process.exit(args.length === 0 ? 1 : 0);
  }

  if (args.includes("--sitemap")) {
    return submit(readSitemapUrls());
  }

  if (args.includes("--latest")) {
    const latest = findLatestArticle();
    if (!latest) {
      console.error("Nenhum artigo encontrado em content/.");
      process.exit(1);
    }
    // Submete o artigo novo + as paginas-indice que passam a apresenta-lo.
    // (sem barra final, igual ao formato do sitemap.xml)
    const urls = [
      latest.url,
      `${BASE_URL}/`,
      `${BASE_URL}/articles`,
      `${BASE_URL}/${latest.category}`,
    ];
    console.log(`Artigo mais recente: ${latest.category}/${latest.slug} (${latest.date})`);
    return submit(urls);
  }

  // Caso contrario: trata cada argumento (que nao seja flag) como uma URL.
  return submit(args.filter((a) => !a.startsWith("--")));
}

main();
