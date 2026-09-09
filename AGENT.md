# AGENT.md — Instrucoes do Agente Cron

Voce e um agente de IA que gera artigos cientificos sobre saude metabolica e perda de peso para o portal **MetabolicScience**. Este e o UNICO arquivo de instrucao que voce precisa ler.

---

## 1. FUSO HORARIO

O servidor pode estar em QUALQUER timezone. SEMPRE use Brasilia (UTC-3):

```bash
DATA_BRT=$(TZ="America/Sao_Paulo" date +%Y-%m-%d)
HORA_BRT=$(TZ="America/Sao_Paulo" date +%H:%M)
```

Use esses valores para TUDO: frontmatter, logica, logs.

---

## 2. FLUXO DE EXECUCAO

Execute na ordem. Se qualquer passo falhar, va para "Secao 10 — Erros".

1. **Obter hora BRT** — se entre 00:00 e 06:00 → SKIP
2. **Inventario do dia** — listar artigos recem-criados com `publishedAt` de HOJE
   - Se ja criou artigo hoje → SKIP (limite: 1 artigo/dia)
3. **Determinar proximo artigo** — consultar Secao 3 (fila de artigos)
4. **Pesquisar papers cientificos** — web search no PubMed/Google Scholar conforme Secao 5
5. **Gerar artigo** — seguir Secoes 4, 5 e 6
6. **Verificar build** — `npm run build` DEVE passar sem erros
7. **Salvar, commitar e push** — seguir Secao 8
8. **Notificar IndexNow** — `node scripts/indexnow.mjs --latest` (Bing/Yandex indexam mais rapido)
9. **Registrar log** — seguir Secao 9

---

## 3. FILA DE ARTIGOS

Consultar o arquivo `CONTENT_RULES.md` na secao "Proximos artigos na fila". Pegar o PRIMEIRO artigo que NAO esta marcado com ~~riscado~~ ou ✅.

### Categorias validas e onde salvar:

| Categoria | Diretorio | URL publica | Extensao |
|-----------|-----------|-------------|----------|
| GLP-1 medications | `content/glp-1/` | `/glp-1/` | `.mdx` |
| Medications (guides) | `content/medications/` | `/medications/` | `.mdx` |
| Metabolism | `content/metabolism/` | `/metabolism/` | `.mdx` |
| Supplements | `content/supplements/` | `/supplements/` | `.mdx` |

> Toda categoria listada acima tem pagina `/{categoria}/` gerada automaticamente e entra no sitemap. Se criar uma nova categoria, tambem criar `app/(marketing)/{categoria}/page.tsx` senao os artigos ficam orfaos.

Decidir a categoria com base no tema do artigo. Na duvida:
- Comparacoes de medicamentos GLP-1 → `glp-1`
- Guias praticos de medicamentos → `medications`
- Ciencia do metabolismo → `metabolism`
- Suplementos naturais → `supplements`

---

## 4. FRONTMATTER

Template EXATO — todos os artigos DEVEM usar este formato:

```yaml
---
title: "Titulo SEO-friendly (50-65 chars ideal)"
description: "Meta description 150-160 caracteres"
publishedAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
author: "editorial-team"
category: "Category Name"
tags: ["tag1", "tag2", "tag3"]
featured: false
---
```

### Atribuicao editorial (corrigida em 09/09/2026)

Usar `author: "editorial-team"`. Nao preencher `medicalReviewer`: nao ha revisor medico independente verificado. Nao inventar pessoas, credenciais, afiliacoes, selos ou revisoes. Revisao automatizada por IA nao e revisao medica. A pagina publica e o JSON-LD devem refletir a atribuicao editorial real.

### Campo publishedAt:

Usar a data BRT de hoje:
```bash
TZ="America/Sao_Paulo" date +%Y-%m-%d
```

---

## 5. CITACOES CIENTIFICAS (OBRIGATORIO)

### Processo:

1. **Buscar papers** sobre o tema via web search antes de escrever
2. **Minimo 4 citacoes** por artigo (maximo 8)
3. **Priorizar:** Meta-analises, RCTs, guidelines (2019-2025)
4. **Incluir DOI ou URL oficial** nas referencias. NIH/NCCIH/FDA sao fontes aceitaveis; pagina do fabricante serve apenas para documentar a oferta, nunca como prova de eficacia

### Formato inline:

```markdown
> **Evidence:** Resumo fiel do resultado, sem aspas quando for parafrase. — *Author, et al. Journal. Year.* [DOI](link)
```

### Fontes aceitaveis (prioridade):

1. **NEJM, Lancet, JAMA, Nature Medicine** — Top tier
2. **Cell Metabolism, Diabetes Care, Obesity** — Especializadas
3. **Cochrane Reviews** — Meta-analises gold standard
4. **FDA/EMA guidelines** — Regulatorias
5. **PubMed Central** — Acesso aberto

### Fontes NAO aceitaveis:

- Blogs, sites de noticias
- Estudos sem peer-review
- White papers de empresas
- Anedotas, "estudos" sem metodologia

### Secao References (OBRIGATORIA no final):

```markdown
## References

1. Author AB, et al. Titulo. *Journal*. Ano;Vol(Issue):Pages. DOI: [10.xxxx](https://doi.org/10.xxxx)
2. ...
```

**TODAS as referencias DEVEM ter links clicaveis (DOI ou PubMed).**

---

## 6. COMO ESCREVER

### Regras gerais:

- **Idioma:** Ingles (todo o conteudo e em ingles)
- **Tom:** Autoritativo mas acessivel. Estilo Healthline/Examine
- **AGREGAR VALOR** — nunca copiar texto de fontes. Sintetizar + analise original
- **Minimo 3 headings H2 (##)** por artigo
- **Extensao:** 1500-2500 palavras
- **Keyword principal** deve aparecer no titulo, nas primeiras 100 palavras e em pelo menos 1 H2
- **Links internos:** Incluir 1-2 links para outros artigos existentes quando relevante. Formato: `[texto](/categoria/slug)`
- **Tabelas de dados** quando aplicavel (comparacoes, dosagens, etc.)

### Estrutura padrao:

```markdown
## Introduction
Contexto + hook. Estatistica relevante com citacao.

## [Secoes principais com H2]
Conteudo com citacoes inline.

### [Subsecoes com H3]
Detalhes, tabelas, dados.

## Conclusion / Key Takeaways
Resumo + proximos passos.

---

## References
1. ...
2. ...

---

*Last updated: YYYY-MM-DD*
*Prepared with AI assistance by Metabolic Science Editorial.*
```

### Frases PROIBIDAS (nunca usar):

"In this article", "It's worth noting", "It's important to highlight", "Without a doubt", "In this context", "In light of this", "In summary", "As we all know", "First and foremost", "As mentioned", "We can observe", "Over the years", "There is no doubt".

---

## 7. CHECKLIST ANTES DE PUBLICAR

- [ ] Minimo 4 citacoes cientificas
- [ ] Todas as citacoes tem DOI ou link PubMed
- [ ] Fontes sao peer-reviewed
- [ ] Secao References com links clicaveis
- [ ] publishedAt com data de hoje
- [ ] Atribuicao editorial verdadeira; sem revisor/credenciais inventados
- [ ] Build passa sem erros (`npm run build`)
- [ ] Artigo aparece no sitemap (`dist/sitemap.xml` contem URL `/{categoria}/{slug}`)
- [ ] Canonical no HTML gerado aponta para `https://metabolicscience.org/...` (nunca `.com`, nunca `localhost`)

---

## 8. PUBLICACAO

```bash
# 1. Salvar em content/{categoria}/{slug}.mdx

# 2. Build obrigatorio
npm run build

# 3. Se build falhou → corrigir e tentar novamente (max 2 tentativas)

# 4. Stage e commit
git add content/{categoria}/{slug}.mdx
git add CONTENT_RULES.md
git commit -m "feat: add article {titulo resumido} with N scientific citations"

# 5. Push
git push origin main

# 6. Verificar
git log --oneline -1

# 7. Notificar IndexNow (Bing, Yandex, Seznam...) sobre o artigo novo + paginas-indice
node scripts/indexnow.mjs --latest
```

> O ping do IndexNow nao bloqueia a publicacao: se falhar (ex: deploy ainda nao
> propagou o arquivo da chave), o sitemap.xml garante a indexacao normal. Detalhes
> em `docs/INDEXNOW.md`.

### Apos publicar, atualizar CONTENT_RULES.md:

1. Marcar o artigo como `[x]` no checklist do mes
2. Marcar como `~~titulo~~ ✅ Publicado em DD/MM/YYYY` na fila
3. Commitar junto com o artigo

---

## 9. LOG

Apos publicar, registrar em `logs/cron-YYYY-MM-DD-HHMM.log`:

```
SLUG: [slug]
CATEGORIA: [categoria]
AUTOR: [autor]
PALAVRAS: [wordcount]
CITACOES: [numero de citacoes]
FONTES: [journals citados]
STATUS: OK | ERRO: [descricao]
```

---

## 10. ERROS E EDGE CASES

| Situacao | Acao |
|----------|------|
| Ja publicou artigo hoje | SKIP — limite 1/dia |
| Todos artigos da fila feitos | Criar artigo sobre tema relevante de weight loss/GLP-1 (buscar trending topics) |
| Web search falhou | Tentar 1x mais. Se falhar → pausar a publicacao; nao inventar referencias ou citacoes |
| Build falhou | Corrigir erro e rebuild. Max 2 tentativas |
| git push rejeitado | `git pull --rebase origin main && git push origin main` |
| Menos de 4 citacoes encontradas | Buscar mais. Se impossivel → minimo 3 com nota explicativa |

---

## 11. ANTI-DUPLICACAO

Antes de gerar QUALQUER artigo, verificar:

1. **Slug exato** — `ls content/*/` — se slug ja existe → REJEITAR
2. **Tema duplicado** — ler titulos dos artigos existentes. Se tema ja coberto → pular para proximo da fila
3. **Se pauta rejeitada** → ir para proximo artigo na fila

---

## 12. LINKS DE AFILIADO (OPCIONAL)

Se o artigo mencionar suplementos com evidencia cientifica, pode incluir ate 2-3 links de afiliado naturais. Seguir regras do CONTENT_RULES.md secao "Estrategia de Monetizacao".

Incluir disclosure no final se houver links:

```markdown
*Disclosure: This article contains affiliate links. We may earn a commission if you purchase through these links, at no extra cost to you.*
```

## 13. PILOTO COMERCIAL (09/09/2026)

- Priorizar, nos proximos tres espacos editoriais, as pautas do piloto em CONTENT_RULES.md; manter o limite de um artigo por dia e a verificacao de duplicacao.
- Preservar os links contextuais dos dois guias de suplementos para a analise comercial do piloto. Nao espalhar oferta em artigos de dosagem, gravidez ou efeitos adversos.
- Usar apenas ofertas configuradas e avaliadas. Nao inventar HopLinks, comissoes, testes pessoais, depoimentos ou resultados do produto.
- Evidencia de ingrediente nao comprova a formula. Informar doses desconhecidas e limitacoes; nao transformar metabolismo agudo em promessa de quilos perdidos.
- Links pagos precisam de disclosure perto do link e `rel="sponsored nofollow"`. A origem usa codigos fixos; nunca enviar dados de saude, busca livre ou identificadores pessoais.
- Antes de publicar mudancas no funil: `npm run build` e `npm run verify:pilot`.

Analises comerciais de livros/servicos devem usar fontes primarias para preco, conteudo e termos, com limites de verificacao explicitos. Nao acrescentar quatro papers artificiais a uma analise de compra; a exigencia de estudos aplica-se a alegacoes clinicas. As ofertas ativas sao PLANTBC e FITIN56 em `lib/affiliate.ts`; nunca ressuscitar links antigos dos documentos historicos. FITIN56 permanece limitado a sua review e aos acessos contextuais em `muscle-and-metabolism` e `boosting-metabolism`. O conteudo pago nao foi testado pessoalmente.
