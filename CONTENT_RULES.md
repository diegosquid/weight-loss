# Regras de Geração de Conteúdo - Weight Loss (Metabolic Health Authority)

## ⚠️ OBRIGATÓRIO: Buscar Papers Científicos

**Toda geração de artigo DEVE incluir citações científicas de PubMed/PMC.**

### Processo de Criação:
1. **Buscar papers** sobre o tema antes de escrever
2. **Mínimo 4 citações** por artigo (máximo 8)
3. **Priorizar:** Meta-análises, RCTs, guidelines (2019-2024)
4. **Formato:**
   ```markdown
   > **Evidence:** "Quote" — *Author, et al. Journal. Year.* [DOI](link)
   ```
5. **Incluir DOI** em todas as referências
6. **Adicionar seção References** no final

### ⚠️ REGRA CRÍTICA - Links nas Referências:
**TODAS as referências na seção ## References DEVEM ter links clicáveis:**

| Tipo de Fonte | Formato Obrigatório | Exemplo |
|---------------|---------------------|---------|
| **DOI** | `[DOI: 10.xxxx](https://doi.org/10.xxxx)` | `[DOI: 10.1056/NEJMoa2032183](https://doi.org/10.1056/NEJMoa2032183)` |
| **PubMed** | `[PubMed](https://pubmed.ncbi.nlm.nih.gov/XXXX/)` | `[PubMed](https://pubmed.ncbi.nlm.nih.gov/33567185/)` |
| **FDA** | `[FDA](https://www.fda.gov/...)` | `[FDA](https://www.fda.gov/drugs/...)` |
| **ArXiv/Preprint** | `[ArXiv](https://arxiv.org/abs/...)` | `[ArXiv](https://arxiv.org/abs/2401.xxxxx)` |

**❌ NUNCA deixar referência sem link:**
- Errado: `Wilding JPH, et al. N Engl J Med. 2021.`
- Certo: `Wilding JPH, et al. N Engl J Med. 2021. DOI: [10.1056/NEJMoa2032183](https://doi.org/10.1056/NEJMoa2032183)`

**Verificação obrigatória:** Antes de fazer commit, conferir se TODAS as referências têm links clicáveis.

### Fontes Aceitáveis (Prioridade):
1. **NEJM, Lancet, JAMA, Nature Medicine** — Top tier
2. **Cell Metabolism, Diabetes Care, Obesity** — Especializadas
3. **Cochrane Reviews** — Meta-análises gold standard
4. **FDA/EMA guidelines** — Regulatórias

### Fontes NÃO Aceitáveis:
- Blogs, sites de notícias
- Estudos sem peer-review
- White papers de empresas
- Anedotas, "estudos" sem metodologia

---

## 📝 Template de Artigo

```markdown
---
title: "Título SEO-friendly"
description: "Meta description 150-160 caracteres"
publishedAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
author: "sarah-mitchell"
medicalReviewer: "james-chen"
category: "Category Name"
tags: ["tag1", "tag2"]
featured: false
---

## Introdução

Contexto + hook. Citar estatística relevante com fonte.

> **Evidence:** "Estatística ou claim importante" — *Autor. Journal. Ano.* [DOI](link)

## Seção Principal

### Subseção

Conteúdo com citações inline:

> **Evidence:** "Dado específico comprovando claim" — *Autor. Journal. Ano.* [DOI](link)

### Tabelas de Dados

| Parâmetro | Valor | P-value | Fonte |
|-----------|-------|---------|-------|
| Resultado A | X% | <0.001 | Autor, Journal |

## Conclusão

Resumo + takeaway. Citação de guideline ou revisão.

---

## References

1. Autor AB, et al. Título do estudo. *Journal*. Ano;Vol(Issue):Pages. DOI: [link](https://doi.org/...)
2. ...

---

*Last updated: YYYY-MM-DD*  
*Medical review: Dr. James Chen, MD, PhD, FACE*
```

---

## 🎯 Estratégia de Conteúdo (6 Meses)

### Mês 1: Fundação (8 artigos)
- [x] What is Semaglutide?
- [x] Ozempic vs Wegovy
- [x] GLP-1 Side Effects
- [x] Tirzepatide Explained
- [ ] How GLP-1 Medications Work
- [ ] Mounjaro vs Ozempic
- [ ] Starting GLP-1: What to Expect
- [ ] Insurance Coverage

### Mês 2: Deep Dive (10 artigos)
- [ ] Semaglutide Dosage Guide
- [ ] Wegovy Dosing Schedule
- [ ] Ozempic Off-Label
- [ ] Saxenda vs Wegovy
- [ ] Rybelsus
- [ ] Injection Techniques
- [ ] Storage and Handling
- [ ] Traveling with GLP-1
- [ ] Missed Dose Protocol
- [ ] Switching GLP-1 Drugs

### Mês 3: Comparisons (10 artigos)
- [ ] Trulicity vs Ozempic
- [ ] Bydureon vs Victoza
- [ ] Natural GLP-1 Boosters
- [ ] Phentermine vs GLP-1
- [ ] Contrave Review
- [ ] Qsymia Comparison
- [ ] Plenity
- [ ] Diet vs Medication
- [ ] Exercise with GLP-1
- [ ] Supplements That Help

---

## 🤖 Cron Job: Geração Automática

**Frequência:** 5x por semana (Segunda a Sexta, 09:00 BRT)
**Total:** ~20 artigos/mês = 240/ano

**Estratégia SEO:**
- Volume alto para topical authority rápida
- Fresh content signal diário para Google
- Long-tail keywords de baixa competição primeiro
- Build de backlinks naturais acelerado

**Próximos artigos na fila:**
1. How GLP-1 Medications Work
2. Mounjaro vs Ozempic
3. Starting GLP-1: What to Expect
4. Insurance Coverage for Weight Loss Drugs
5. Semaglutide Dosage Guide
6. Wegovy Dosing Schedule
7. Ozempic Off-Label Use
8. Saxenda vs Wegovy
9. Rybelsus Guide
10. Injection Techniques
11. Storage and Handling
12. Traveling with GLP-1
13. Missed Dose Protocol
14. Switching GLP-1 Drugs
15. Trulicity vs Ozempic
16. Bydureon vs Victoza
17. Natural GLP-1 Boosters
18. Phentermine vs GLP-1
19. Contrave Review
20. Qsymia Comparison

**Instruções para o cron:**
1. Buscar papers no PubMed antes de gerar
2. Usar template acima
3. Mínimo 4 citações por artigo
4. Salvar em `content/{category}/{slug}.mdx`
5. **FAZER BUILD:** `npm run build` (obrigatório!)
6. **FAZER COMMIT:** `git add -A && git commit -m "feat: add article [título]"`
7. **FAZER PUSH:** `git push`
8. Notificar usuário no Telegram com link do artigo

---

## ✅ Checklist de Qualidade

Antes de publicar qualquer artigo:

- [ ] Mínimo 4 citações científicas
- [ ] Todas as citações têm DOI
- [ ] Fontes são peer-reviewed
- [ ] Relevância: cada citação comprova uma claim
- [ ] Formato das citações está correto
- [ ] Seção References adicionada
- [ ] updatedAt atualizado
- [ ] Medical reviewer atribuído
- [ ] Build passa sem erros

---

## 📊 Métricas de Sucesso

**SEO:**
- E-E-A-T score alto
- Rich snippets para citações médicas
- Backlinks de sites acadêmicos

**Engajamento:**
- Tempo na página >5 minutos
- Bounce rate <40%
- Return visits

---

*Criado em: 21/02/2026*  
*Última atualização: 21/02/2026*  
*Total de artigos enriquecidos: 13*  
*Total de citações adicionadas: 71*
