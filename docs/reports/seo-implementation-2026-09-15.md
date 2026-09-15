# SEO: revisões e diagnóstico de indexação — 15/09/2026

## Escopo autorizado

Implementação das frentes 1, 2 e 3 autorizada pelo proprietário nesta tarefa: melhorar páginas com demanda observada, corrigir conteúdo científico e tratar exclusões do Google. Reputação externa e ferramentas de guest posts ficam com o proprietário. Nenhum artigo novo ou publicação futura foi antecipado.

Trabalho isolado em codex/editorial-2026-09-15, baseado em origin/main 86667d4cda7f40ea204530f88daec0f816ddb2dd. Preservadas todas as datas originais e a autoria editorial-team. updatedAt alterado para 2026-09-15 nas 11 revisões substanciais. Não houve revisão médica independente.

## Páginas revisadas

- [GLP-1 Drugs and COPD: Can Mounjaro or Ozempic Help?](https://metabolicscience.org/glp-1/glp1-copd/)
- [GLP-1 for Fatty Liver and MASH: Wegovy Approval and Trials](https://metabolicscience.org/glp-1/glp1-fatty-liver-masld/)
- [GLP-1 and Gallbladder Disease: Risk, Evidence and Symptoms](https://metabolicscience.org/glp-1/glp1-gallbladder-disease-research/)
- [GLP-1 and Gastroparesis: Stomach Slowing, Symptoms and Safety](https://metabolicscience.org/glp-1/glp1-gastroparesis-stomach-paralysis/)
- [GLP-1 and Pregnancy: Semaglutide, Tirzepatide and Planning](https://metabolicscience.org/glp-1/glp1-pregnancy/)
- [GLP-1 Before Surgery: Anesthesia, Fasting and Medication Plans](https://metabolicscience.org/glp-1/glp1-surgery-anesthesia-perioperative-safety/)
- [Tirzepatide vs Retatrutide: Trial Results and Key Differences](https://metabolicscience.org/glp-1/tirzepatide-vs-retatrutide/)
- [Weight Regain After Stopping GLP-1: What Trials Found](https://metabolicscience.org/glp-1/weight-regain-after-glp1/)
- [GLP-1 Storage: Mounjaro, Ozempic, Wegovy and Zepbound](https://metabolicscience.org/medications/glp1-storage-handling/)
- [Mounjaro Dosage Chart: Dose Steps and Missed-Dose Rules](https://metabolicscience.org/medications/mounjaro-dosage-chart/)
- [Weight-Loss Supplements: Evidence, Benefits and Risks](https://metabolicscience.org/supplements/supplements-for-weight-loss/)

## Correções centrais

- Mounjaro: bula US vigente, escalonamento condicionado à necessidade clínica, limites por população, distinção de Zepbound e regras de dose perdida; sem protocolo universal de reinício.
- Armazenamento: limites por apresentação, inclusive monodose versus multidose, datas de descarte e diferença entre marcas/países; removida extrapolação a partir de insulina.
- Retatrutida: identificação correta de TRIUMPH-2 e TRIUMPH-4, status investigacional conferido no patrocinador e limites de comparações entre estudos diferentes.
- Suplementos: evidência e riscos antes de compras; sem posologias, promessas fortes ou extrapolação de ingrediente para produto. Preservados a alternativa gratuita e o link identificado para a avaliação comercial existente.
- Vesícula: risco relativo separado de risco absoluto e cuidado com a interpretação das populações e dos sintomas.
- DPOC: acrescentado o pequeno ensaio randomizado de liraglutida e separadas associações de coortes de eficácia causal demonstrada.
- Reganho: 327 participantes na extensão STEP 1; percentual versus pontos percentuais e denominadores do SURMOUNT-4; removida promessa não demonstrada sobre desmame.
- Gravidez: regras por produto/indicação, sem contraindicação universal, números de coortes não verificados ou cálculo de washout substituindo bula.
- Gastroparesia: sintomas, esvaziamento gástrico e diagnóstico separados; removidas incidências e garantias de recuperação não sustentadas.
- Cirurgia: orientação individual conforme equipe e risco, sem dieta líquida universal ou extrapolação irrestrita para sedação/pediatria.
- MASH: indicação de Wegovy restrita à população apropriada, aprovação acelerada e desfechos de biópsia separados de eventos clínicos; Rezdiffra aprovado antes de Wegovy.

Cada artigo contém fontes primárias e nota de revisão. Foram retiradas citações literais não verificadas e FAQs antigas para evitar conflito com o texto atualizado. Links contextuais conectam dose, armazenamento, sintomas, gravidez, cirurgia e interrupção de tratamento.

## Google: diagnóstico antes do deploy

As quatro páginas inspecionadas constavam como Crawled - currently not indexed, com fetch bem-sucedido, rastreamento/indexação permitidos e Google-selected canonical = Inspected URL. Todas passaram no teste ao vivo (URL is available to Google):

| Página | Último rastreamento informado | Teste ao vivo, BRT |
|---|---|---|
| Gastroparesia | 01/07/2026 | 15/09 09:07 |
| Gravidez | 19/08/2026 | 15/09 09:16 |
| Cirurgia/anestesia | 27/06/2026 | 15/09 09:20 |
| MASH | 14/09/2026 | 15/09 09:24 |

A inspeção de cirurgia mostrou Temporary processing error no campo de sitemap; as outras não identificaram sitemap de referência. Isso não prova bloqueio de conteúdo. No relatório Sitemaps havia somente https://metabolicscience.org/api/sitemap, cadastrado em 24/02/2026, lido em 09/03/2026, Success, 35 páginas descobertas. O sitemap atual é /sitemap.xml e contém 167 URLs canônicas. Seu cadastro e os pedidos individuais ocorrerão após verificação pública do deploy.

## Validação concluída antes de publicar

- test:operations: 6 testes aprovados.
- Build estático, TypeScript e lint aprovados.
- verify:pilot: aprovado, incluindo 148 URLs históricas, datas/autoria, disclosure e rotas de atribuição existentes.
- verify:seo: 167 páginas, títulos únicos, um H1, canonical, metadados sociais, JSON-LD, referências e links internos válidos.
- Onze páginas renderizadas em Chrome a 390px: nenhuma com overflow horizontal do documento; atualização e H1 corretos.
- Tabela de armazenamento inspecionada visualmente e rolagem horizontal exercitada. Ajuste CSS de largura mínima por célula impede nomes partidos no meio; conteúdo permanece acessível na tabela rolável.
- Datas originais conferidas contra git para as 11 páginas.

## Publicação e medição

A conclusão depende de release.json com o commit publicado e conteúdo real das páginas; build local não prova deploy. Resultados posteriores de deploy, sitemap e pedidos de indexação serão registrados no relatório operacional de conclusão. Aceitação de envio não equivale a indexação ou ganho de ranking.

Usar a auditoria de 14/09 como baseline, distinguindo Google Web, Bing Web e Bing Web+Chat. Avaliar períodos completos de 28 dias por URL/consulta; a tendência anterior de crescimento do Bing não deve ser atribuída a esta revisão. O calendário do piloto foi preservado; uma futura revisão de página já corrigida neste lote deve partir da versão atual e justificar qualquer nova alteração substantiva.
