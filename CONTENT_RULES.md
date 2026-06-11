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
- [x] How GLP-1 Medications Work
- [x] Mounjaro vs Ozempic
- [x] Starting GLP-1: What to Expect
- [x] Insurance Coverage

### Mês 2: Deep Dive (10 artigos)
- [x] Semaglutide Dosage Guide
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
- [x] Supplements That Help

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
1. ~~How GLP-1 Medications Work~~ ✅ Publicado em 23/02/2026
2. ~~Mounjaro vs Ozempic~~ ✅ Publicado em 27/02/2026
3. ~~Starting GLP-1: What to Expect~~ ✅ Publicado em 26/02/2026
4. ~~Insurance Coverage for Weight Loss Drugs~~ ✅ Publicado em 05/03/2026
5. ~~Semaglutide Dosage Guide~~ ✅ Publicado em 07/03/2026
6. ~~Wegovy Dosing Schedule~~ ✅ Publicado em 08/03/2026
7. ~~Ozempic Off-Label Use~~ ✅ Publicado em 09/03/2026
8. ~~Saxenda vs Wegovy~~ ✅ Publicado em 10/03/2026
9. ~~Rybelsus Guide~~ ✅ Publicado em 11/03/2026
10. ~~Injection Techniques~~ ✅ Publicado em 12/03/2026
11. ~~Storage and Handling~~ ✅ Publicado em 13/03/2026
12. ~~Traveling with GLP-1~~ ✅ Publicado em 14/03/2026
13. ~~Missed Dose Protocol~~ ✅ Publicado em 15/03/2026
14. ~~Switching GLP-1 Drugs~~ ✅ Publicado em 16/03/2026
15. ~~Trulicity vs Ozempic~~ ✅ Publicado em 17/03/2026
16. ~~Bydureon vs Victoza~~ ✅ Publicado em 18/03/2026
17. ~~Natural GLP-1 Boosters~~ ✅ Publicado em 19/03/2026
18. ~~Phentermine vs GLP-1~~ ✅ Publicado em 20/03/2026
19. ~~Contrave Review~~ ✅ Publicado em 21/03/2026
20. ~~Qsymia Comparison~~ ✅ Publicado em 23/03/2026
21. ~~Plenity~~ ✅ Publicado em 24/03/2026
22. ~~Exercise with GLP-1 Medications~~ ✅ Publicado em 25/03/2026
23. ~~Diet vs Medication for Weight Loss~~ ✅ Publicado em 26/03/2026
24. ~~Best Supplements for Weight Loss~~ ✅ Publicado em 27/03/2026
25. ~~Weight Regain After Stopping GLP-1 Medications~~ ✅ Publicado em 28/03/2026
26. ~~Tirzepatide vs Semaglutide: Which Is More Effective for Weight Loss?~~ ✅ Publicado em 29/03/2026
27. ~~GLP-1 Medications and Heart Health: Cardiovascular Benefits Beyond Weight Loss~~ ✅ Publicado em 30/03/2026
28. ~~GLP-1 Medications and Muscle Loss: How to Preserve Lean Mass~~ ✅ Publicado em 31/03/2026
29. ~~GLP-1 Medications and Alcohol: What the Research Shows~~ ✅ Publicado em 01/04/2026
30. ~~GLP-1 Medications and Sleep Apnea: What the Research Shows~~ ✅ Publicado em 02/04/2026
31. ~~What Is Food Noise? How GLP-1 Medications Help Silence It~~ ✅ Publicado em 03/04/2026
32. ~~GLP-1 Medications for PCOS: What the Research Shows~~ ✅ Publicado em 04/04/2026
33. ~~GLP-1 Medications and Fatty Liver Disease: What the Research Shows~~ ✅ Publicado em 06/04/2026
34. ~~GLP-1 Medications and Kidney Health: What the Research Shows~~ ✅ Publicado em 07/04/2026
35. ~~GLP-1 Medications and Brain Health: What the Research Shows~~ ✅ Publicado em 08/04/2026
36. ~~GLP-1 Medications and Bone Health: What the Research Shows~~ ✅ Publicado em 09/04/2026
37. ~~GLP-1 Medications and Hair Loss: What the Research Shows~~ ✅ Publicado em 10/04/2026
38. ~~GLP-1 Medications and Mental Health: What the Research Shows~~ ✅ Publicado em 11/04/2026
39. ~~GLP-1 Medications and Gut Health: What the Research Shows~~ ✅ Publicado em 12/04/2026
40. ~~GLP-1 Medications and Inflammation: What the Research Shows~~ ✅ Publicado em 13/04/2026
41. ~~GLP-1 Medications and Skin Health: What the Research Shows~~ ✅ Publicado em 14/04/2026
42. ~~GLP-1 Medications and Thyroid Health: What the Research Shows~~ ✅ Publicado em 15/04/2026
43. ~~GLP-1 Medications and Blood Pressure: What the Research Shows~~ ✅ Publicado em 16/04/2026
44. ~~GLP-1 Medications and Fertility: What the Research Shows~~ ✅ Publicado em 17/04/2026
45. ~~GLP-1 Medications and Cholesterol: What the Research Shows~~ ✅ Publicado em 18/04/2026
46. ~~GLP-1 Medications and Insulin Resistance: What the Research Shows~~ ✅ Publicado em 19/04/2026
47. ~~GLP-1 Medications and Addiction: What the Research Shows~~ ✅ Publicado em 20/04/2026
48. ~~Oral Semaglutide for Weight Loss: The New Wegovy Pill~~ ✅ Publicado em 21/04/2026
49. ~~Retatrutide: Triple-Agonist Drug with 24% Weight Loss~~ ✅ Publicado em 22/04/2026
50. ~~Orforglipron: The Oral GLP-1 Pill for Weight Loss~~ ✅ Publicado em 23/04/2026
51. ~~GLP-1 Medications and Type 2 Diabetes Remission~~ ✅ Publicado em 24/04/2026
52. ~~GLP-1 Medications and Joint Pain: What the Research Shows~~ ✅ Publicado em 25/04/2026
53. ~~Compounded Semaglutide: Safety, Efficacy, and What the FDA Says~~ ✅ Publicado em 26/04/2026
54. ~~GLP-1 Medications and Cancer Risk: What the Research Shows~~ ✅ Publicado em 27/04/2026
55. ~~CagriSema: The First GLP-1 + Amylin Combo for Obesity~~ ✅ Publicado em 28/04/2026
56. ~~GLP-1 Weight Loss Plateau: Why It Happens and How to Break It~~ ✅ Publicado em 29/04/2026
57. ~~GLP-1 Medications and Menopause: What the Research Shows~~ ✅ Publicado em 30/04/2026
58. ~~Survodutide: The Glucagon/GLP-1 Dual Agonist with 16.6% Weight Loss~~ ✅ Publicado em 01/05/2026
59. ~~GLP-1 Resistance: Why Ozempic Doesn't Work for 1 in 10 People~~ ✅ Publicado em 03/05/2026
60. ~~MariTide (Maridebart Cafraglutide): Amgen's Once-Monthly Obesity Drug~~ ✅ Publicado em 04/05/2026
61. ~~GLP-1 Medications and Surgery: Perioperative Safety and Anesthesia Considerations~~ ✅ Publicado em 05/05/2026
62. ~~GLP-1 Medications and Gallbladder Disease: What the Research Shows~~ ✅ Publicado em 06/05/2026
63. ~~GLP-1 Medications and Pancreatitis: What the Research Shows~~ ✅ Publicado em 07/05/2026
64. ~~GLP-1 Medications and Eye Health: NAION, Retinopathy, and Vision Risks~~ ✅ Publicado em 08/05/2026
65. ~~GLP-1 Medications for Heart Failure (HFpEF): What the Research Shows~~ ✅ Publicado em 09/05/2026
66. ~~GLP-1 Medications for Adolescents: What the Research Shows~~ ✅ Publicado em 11/05/2026
67. ~~GLP-1 Medications and Parkinson's Disease: What the Research Shows~~ ✅ Publicado em 12/05/2026
68. ~~GLP-1 Medications and Migraine: What the Research Shows~~ ✅ Publicado em 13/05/2026
69. ~~GLP-1 Medications and Gastroparesis: What the Research Shows~~ ✅ Publicado em 14/05/2026
70. ~~GLP-1 Medications and Alzheimer's Disease: What the Research Shows~~ ✅ Publicado em 15/05/2026
71. ~~GLP-1 Medications and Sexual Function: What the Research Shows~~ ✅ Publicado em 16/05/2026
72. ~~Bariatric Surgery vs GLP-1 Medications: Which Works Better?~~ ✅ Publicado em 17/05/2026
73. ~~GLP-1 Medications and Pregnancy: Safety and Discontinuation~~ ✅ Publicado em 18/05/2026
74. ~~Mazdutide: China's GLP-1/Glucagon Dual Agonist for Obesity~~ ✅ Publicado em 19/05/2026
75. ~~Tirzepatide vs Retatrutide: Which Weight Loss Drug Works Better?~~ ✅ Publicado em 20/05/2026
76. ~~GLP-1 Medications for Binge Eating Disorder: What the Research Shows~~ ✅ Publicado em 21/05/2026
77. ~~GLP-1 Medications and Longevity: Can They Slow Aging?~~ ✅ Publicado em 05/06/2026
78. ~~Amycretin: Novo Nordisk's GLP-1 + Amylin Drug With 22% Weight Loss~~ ✅ Publicado em 06/06/2026
79. ~~VK2735: Viking Therapeutics' Dual GIP/GLP-1 Obesity Drug~~ ✅ Publicado em 07/06/2026
80. ~~GLP-1 Medications and Metabolic Syndrome: What the Research Shows~~ ✅ Publicado em 08/06/2026
81. ~~GLP-1 Medications and Peripheral Artery Disease: What the Research Shows~~ ✅ Publicado em 10/06/2026
82. ~~Microdosing GLP-1 Medications: Does It Work for Weight Loss?~~ ✅ Publicado em 11/06/2026

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

## 💰 Estratégia de Monetização (Links de Afiliado)

**Objetivo:** Inserir links de afiliado naturalmente nos artigos, sem prejudicar a autoridade médica.

### Onde Encaixar Links de Afiliado:

| Seção do Artigo | Tipo de Link | Exemplo |
|-----------------|--------------|---------|
| **Introdução** | Leve menção | "...suplementos como [termogênico X] podem auxiliar..." |
| **Seção 'Top Supplements'** | Lista com links | "1. [Green Tea Extract](link) - Estudos mostram..." |
| **Comparativos** | Links para produtos | "vs [produto concorrente](link)" |
| **Call-to-Action final** | Link direto | "Quer experimentar? [Veja preço aqui](link)" |
| **Sidebar/Related** | Produtos relacionados | "Leitores também buscam: [produto](link)" |

### Regras para Links de Afiliado:

1. **Relevância obrigatória:** Link deve fazer sentido no contexto
2. **Não forçar:** Se não houver produto relevante, não colocar
3. **Disclosure:** Incluir disclaimer de afiliado no footer
4. **Máximo 2-3 links** por artigo (não saturar)
5. **Priorizar:** Suplementos com evidência científica
6. **Formato:** Link natural no texto, não botão chamativo

### Categorias com Potencial de Afiliado:

- **Suplementos:** Termogênicos, berberina, cromo, CLA
- **Proteínas:** Whey protein, plant-based
- **Fibra:** Psyllium, glucomannan
- **Probiotícos:** L. gasseri, Akkermansia
- **Equipamentos:** Balança bioimpedância, fitas métricas
- **Livros:** Best-sellers de saúde/metabolismo

### Exemplo de Implementação:

```markdown
## Best Supplements for Metabolism

Based on current evidence, these supplements show promise:

1. **Green Tea Extract** ([see options](aff-link))
   - Meta-analysis shows 1.3kg weight loss over 12 weeks
   - Safe, well-tolerated

2. **Caffeine** ([pre-workout formulas](aff-link))
   - Increases metabolic rate by 3-11%
   - Best taken before exercise

---

*Disclosure: This article contains affiliate links. We may earn a commission 
if you purchase through these links, at no extra cost to you. This helps 
support our independent research and content creation.*
```

---

*Criado em: 21/02/2026*  
*Última atualização: 23/02/2026*  
*Total de artigos enriquecidos: 15*
