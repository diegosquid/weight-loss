# Auditoria de SEO, publicação e ClickBank — 9 de setembro de 2026

O site tem uma base funcional e tração no Bing, mas ainda precisa de ajustes técnicos e de uma pauta mais próxima das compras que pretende gerar. O maior descompasso é editorial: 132 dos 150 artigos estão nas categorias de medicamentos; as duas ofertas atuais são de receitas e exercícios. Publicar mais notícias sobre fármacos, por si só, não resolve esse descompasso.

Esta é uma auditoria e uma proposta. Nenhuma configuração de publicação, conteúdo público ou agendamento foi alterado nesta revisão. Os dois produtos foram publicados hoje; ainda não existe janela suficiente para avaliar o desempenho comercial do piloto.

## Evidências e alcance

- Rastreamento público das **165 URLs do sitemap**: 150 artigos e 15 páginas de navegação, políticas e ferramentas. Todas chegaram a HTTP 200, após os redirecionamentos aplicáveis.
- Verificação dos links internos encontrados, dos destinos ausentes do sitemap, de metadados, títulos, H1, referências, robôs e ligações entre páginas.
- Inspeção do código, das instruções editoriais, dos scripts de publicação, dos logs, do crontab, das automações do Codex e dos LaunchAgents/LaunchDaemons locais pertinentes.
- Leitura ao vivo do Bing Webmaster Tools, do Search Console e de dois testes móveis do PageSpeed Insights.
- Inspeção do DOM de dados estruturados e da apresentação móvel da review do cookbook; checagem das larguras das tabelas da review e do artigo Mounjaro Dosage Chart em viewport de 390 px.
- Inventário por URL em [pages.csv](audits/2026-09-09/pages.csv), problemas de rastreamento em [crawl-issues.json](audits/2026-09-09/crawl-issues.json) e destinos quebrados em [broken-links.json](audits/2026-09-09/broken-links.json).

Limites: não houve revisão clínica integral dos 148 artigos históricos, auditoria de todos os backlinks ou teste real dos produtos pagos. O relatório de indexação tem atraso e inclui variantes de URL; seus totais não equivalem ao número de artigos atuais. O rastreamento técnico de todo o sitemap não significa inspeção visual individual de todas as páginas.

## 1. Agendamento: os scripts existem, mas não encontrei execução ativa

| Fonte | Estado observado |
|---|---|
| `CONTENT_RULES.md:154` | Plano de segunda a sexta, 09h BRT |
| `scripts/cron-agent.sh:4` | Exemplo de cron diário às 10h |
| `scripts/cron-catchup.sh:4` | Exemplo de recuperação diária às 14h |
| `crontab -l` do usuário | Nenhuma entrada ativa |
| Automações locais do Codex | Seis arquivos examinados; nenhum corresponde ao projeto ou domínio |
| Plists locais pertinentes | Nenhum agendamento correspondente encontrado |
| Último log de publicação automática | `logs/cron-2026-08-08-1103.log` |
| Última matéria anterior às duas reviews de hoje | HRS-7535/KAI-7535, publicada em 08/08/2026 |

Há um intervalo de **32 dias** entre a última publicação registrada e as reviews de hoje. Não encontrei evidência de um agendamento externo; a conclusão confirmada é a ausência de um agendamento local correspondente, não uma inspeção de todos os servidores possíveis.

A cadência histórica, pelos campos `publishedAt`, foi de 25 artigos em março, 30 em abril, 19 em maio, 21 em junho, 29 em julho e seis em agosto de 2026. Setembro tem as duas reviews de hoje. As datas antigas declaradas no frontmatter não foram verificadas como datas originais de lançamento do domínio.

### Corrigir a confiabilidade antes de reativar

1. **Falha pode ser registrada como sucesso.** O script principal grava `CRON END` mesmo quando o agente retorna erro e não propaga esse código de saída (`cron-agent.sh:70–80`). A recuperação considera qualquer `CRON END` como sucesso (`cron-catchup.sh:14–20`). Isso pode impedir uma nova tentativa após falha.
2. **Trabalho local pode ser escondido.** O principal executa `git stash` quando há alterações e não restaura o stash no fluxo observado (`cron-agent.sh:54–57`). A rotina deve trabalhar em checkout isolado e preservar arquivos em edição.
3. **Continua após falha de sincronização.** Um `git pull` malsucedido gera apenas aviso (`cron-agent.sh:58–62`). Para publicar, a rotina deve interromper e registrar o problema.
4. **Proteções dependem do agente.** A verificação de uma publicação por dia está nas instruções; falta um bloqueio determinístico de concorrência e um registro de publicação bem-sucedida com URL e commit.
5. **A documentação diverge.** Unificar dia, horário e timezone; atualizar o recorte fixo de fontes “2019–2025” para incluir evidência atual. Uma quantidade mínima de citações não comprova qualidade; guias de compras e receitas precisam de critérios adequados ao tema.

Critério de sucesso proposto: conteúdo validado → build e testes pertinentes → publicação → HTML público correto, canonical e links corretos → registro de sucesso. IndexNow deve ter confirmação própria e possibilidade de nova tentativa, sem confundir envio com indexação. A falha de TLS no envio de agosto deve ser resolvida na configuração de certificados, sem desabilitar a verificação TLS.

### Cadência recomendada para um primeiro ciclo de quatro semanas

| Dia, horário BRT | Trabalho |
|---|---|
| Segunda, 10h | Guia prático de alimentação e organização de refeições |
| Terça | Atualizar um artigo existente com tráfego e verificar suas fontes |
| Quarta, 10h | Guia prático de exercícios em casa e escolha de recursos |
| Quinta | Atualizar outro artigo existente e melhorar links internos pertinentes |
| Sexta, 10h | Comparação de opções gratuitas e pagas; revisão dos indicadores comerciais |

São **três matérias novas e duas revisões por semana**, em vez de depender de uma matéria nova por dia. Mudanças relevantes de segurança ou de informação sobre medicamentos têm prioridade na revisão do acervo. A hora serve à operação; não é uma promessa de vantagem de ranking.

## 2. Tráfego e indexação

| Relatório | Janela | Resultado |
|---|---|---|
| Bing, total Web and Chat | 09/08–07/09 | 985 cliques, 41,7 mil impressões, CTR 2,36% |
| Bing, tabela Pages, apenas Web | Mesma janela | 77 URLs listadas, soma de 829 cliques |
| Google, pesquisa Web | 10/08–06/09 | 45 cliques, 19,9 mil impressões, CTR 0,2%, posição média 42,8 |
| Google, cobertura | Atualização indicada em 03/09 | 106 URLs indexadas; 113 não indexadas |

Não somar essas janelas e superfícies para calcular taxa de conversão. A posição média 42,8 também impede atribuir o CTR baixo do Google apenas aos títulos.

As 113 exclusões do Google são: 56 “Crawled — currently not indexed”, 45 “Page with redirect”, oito duplicadas sem canonical escolhido pelo usuário, três erros de redirecionamento e uma 404. A lista mistura URLs com e sem barra: por exemplo, as duas versões de `boosting-metabolism` aparecem entre as 56. **Não são necessariamente 56 artigos únicos.**

Os três erros de redirecionamento apontam para `/glp-1/what-is-semaglutide`, `/medications` e `/glp-1/glp1-side-effects`, com último rastreamento em abril. Na verificação pública atual, cada um faz **um 301 para a versão com barra e termina em 200**. São registros a reavaliar no Search Console, não loops atuais confirmados.

As exclusões por conteúdo rastreado exigem análise de intenção, originalidade, atualização, fontes e links recebidos. Não há evidência aqui que permita diagnosticar uma penalidade. Trabalhar primeiro nas URLs canônicas de maior valor, sem solicitar reindexação indiscriminadamente.

## 3. Correções técnicas em ordem de prioridade

### Prioridade alta: links e sinais de página

**Quatro destinos internos retornam 404, em cinco artigos:**

| Artigo de origem | Destino quebrado | Destino existente correspondente |
|---|---|---|
| `/glp-1/glp1-weight-loss-plateau/` | `/glp-1/glp1-storage-handling` | `/medications/glp1-storage-handling/` |
| `/glp-1/glp1-cardiovascular-benefits/` | `/glp-1/how-glp1-medications-work` | `/medications/how-glp1-medications-work/` |
| `/medications/contrave-review/` | `/glp-1/how-glp1-medications-work` | `/medications/how-glp1-medications-work/` |
| `/medications/plenity/` | `/medications/what-is-semaglutide` | `/glp-1/what-is-semaglutide/` |
| `/medications/glp1-storage-handling/` | `/glp-1/injection-techniques-glp1` | `/medications/injection-techniques-glp1/` |

O caso de storage merece prioridade: a página de origem recebeu 45 cliques do Bing na janela observada. Atualizar os links de origem e, se útil para URLs antigas já conhecidas, criar redirecionamentos específicos. Não redirecionar toda página inexistente para a home: o teste de URL inexistente retornou corretamente 404.

**`/tools/` herda título, descrição e canonical da home.** O conteúdo é de calculadoras, mas informa aos mecanismos que sua versão preferida é `/`. Dar metadados próprios e decidir a relação com `/calculators/`, que tem outro índice de ferramentas. `/calculators/` foi a única URL do sitemap sem caminho encontrado a partir dos links da home no rastreamento; as quatro calculadoras individuais são acessíveis.

**Metadados sociais estão incompletos.** `/og-image.jpg` retorna 404. As 15 páginas estáticas usam essa imagem em Open Graph; os 150 artigos não têm `og:image` no HTML inspecionado, e seu schema Article aponta para a mesma imagem ausente. Todas as 165 páginas repetem o título de Twitter da home. Criar uma imagem pública válida e definir título, descrição, imagem e URL por página. Isso corrige a apresentação em compartilhamentos e o dado de imagem; não é uma promessa de aumento de ranking.

**Sitemap, links e canonical devem usar o mesmo formato de URL.** O sitemap publica URLs sem a barra final, enquanto a hospedagem as redireciona e entrega canonical com barra. Padronizar para os destinos finais evita redirecionamentos desnecessários e simplifica os relatórios. O Google recomenda consistência entre links internos e URLs canônicas: [documentação de canonicalização](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

### Prioridade alta: clareza e confiança editorial

- O artigo `/glp-1/tirzepatide/` está em português, com a página declarando `lang="en"`, dentro de um site em inglês. Revisar e traduzir mantendo a URL, ou estabelecer uma estratégia multilíngue real. Para o público atual, recomendo a versão inglesa.
- Tirzepatide e What Is Semaglutide exibem dois H1 porque o título também foi colocado no corpo. Corrigir a hierarquia sem transformar isso em explicação isolada para o desempenho de busca.
- Oito artigos exibem marcações literais de notas como `[^1]`: protein-powder, natural-thermogenics, fiber-supplements, berberine, muscle-and-metabolism, metabolic-adaptation, liraglutide e how-metabolism-works. O parser usa `marked` sem suporte configurado para essas notas. Corrigir a renderização e conferir os vínculos entre cada afirmação e a referência.
- Há dois artigos distintos para “Mounjaro vs Ozempic”, em `/glp-1/` e `/medications/`, ambos com canonical próprio. O segundo recebeu 18 cliques do Bing. Comparar consultas e conteúdo para decidir diferenciação ou consolidação; não apagar ou redirecionar antes de avaliar seus sinais. A sobreposição de intenção é confirmada; perda de ranking por canibalização ainda é hipótese.
- **52 dos 150 artigos não recebem links de dentro de outro artigo** no HTML rastreado. Todos os artigos têm entrada por índices/navegação; portanto, não são órfãos absolutos. Priorizar links de artigos existentes para novos materiais pertinentes, além de incluir links de saída na matéria nova.

A autoria editorial, a assistência de IA, as limitações das reviews e as políticas estão explícitas. Preservar essa honestidade e revisar a exatidão clínica do acervo por prioridade de tráfego e impacto. Não inventar revisor, uso do produto ou resultado para aumentar confiança. A orientação do Google para reviews enfatiza evidência, comparação e valor para a decisão: [como escrever reviews de qualidade](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews).

### Prioridade média: apresentação, dados estruturados e títulos

- Os schemas Article e BreadcrumbList aparecem após JavaScript na amostra inspecionada; não estavam como scripts JSON-LD diretos no HTML das 150 matérias. Isso não prova falha de indexação. Renderizá-los diretamente no HTML reduz dependência de execução; corrigir também a imagem e alinhar suas URLs às canônicas.
- Os 165 documentos têm meta description e permitem indexação. A única duplicidade exata de título/descrição identificada é home × tools. Há 105 títulos acima de 75 caracteres, incluindo o sufixo da marca; isso é uma fila de revisão por consulta e clareza, **não 105 erros ou uma regra rígida de tamanho**.
- O campo `lastModified` de páginas estáticas muda a cada build. Usar datas de alteração real, sem simular atualização editorial.
- Melhorar hierarquia de headings no rodapé e contraste dos textos claros, apontados pelo PageSpeed. Não usar uma nota automática como certificação completa de acessibilidade.

## 4. Desempenho e celular

Testes de laboratório: Lighthouse 13.4.1, Moto G Power emulado, Slow 4G, carga inicial, uma execução por URL.

| Métrica | Home | Review Plant-Based Cookbook |
|---|---:|---:|
| Performance | 87 | 94 |
| Acessibilidade automática | 96 | 94 |
| SEO básico automático | 100 | 100 |
| FCP | 0,9 s | 1,4 s |
| LCP | 2,9 s | 2,7 s |
| TBT | 0 ms | 0 ms |
| CLS | 0 | 0 |
| Speed Index | 8,7 s | 4,1 s |

Fontes: [relatório da home](https://pagespeed.web.dev/analysis/https-metabolicscience-org/q64o0qe4lp?utm_source=search_console&form_factor=mobile&hl=en) e [relatório da review](https://pagespeed.web.dev/analysis/https-metabolicscience-org-metabolism-plant-based-cookbook-review/z5jlkdjbnr?hl=en&form_factor=mobile).

O teste estima 420 ms de economia em recursos que bloqueiam a renderização da home e 450 ms na review. Nesta, foram identificados os CSS `4c8ec7537f121ac9.css` (11,9 KiB) e `805a071eca19f228.css` (1,3 KiB). Investigar a entrega do CSS e a formação visual da home antes de alterações maiores. Essas economias são estimativas da ferramenta e não devem ser somadas como ganho garantido. O relatório também aponta 21 KiB de JavaScript não utilizado e 11 KiB de JavaScript legado; não são a primeira prioridade comercial.

O alvo de bom LCP é até 2,5 s, mas estes resultados são de laboratório. O Search Console informa dados insuficientes de usuários reais nos últimos 90 dias, tanto em mobile quanto em desktop; INP não foi medido por este teste de carga. Não é possível certificar aprovação dos Core Web Vitals. [Definições e distinção entre laboratório e campo](https://web.dev/articles/vitals).

Na amostra móvel de 390 px, review e Mounjaro Dosage Chart não apresentaram largura de documento maior que o viewport; suas tabelas couberam em 352 px. A review estava legível e a divulgação de afiliação visível. Isso não substitui teste funcional das quatro calculadoras e de todos os estados de navegação.

O fluxo de trace local da skill `web-perf` não foi executado: os métodos Chrome DevTools não estão disponíveis nesta sessão. Foi utilizada a alternativa pública PageSpeed Insights, indicada no próprio Search Console; nenhum componente foi instalado para esta auditoria.

## 5. ClickBank: o piloto existe; a distribuição ainda é pequena

| Oferta / entrada | Cliques Bing Web, 09/08–07/09 | Posição aproximada do link no texto do artigo |
|---|---:|---:|
| Cookbook ← supplements-for-weight-loss | 52 | 80% |
| Cookbook ← natural-thermogenics | 9 | 65% |
| FITin56 ← muscle-and-metabolism | 2 | 68% |
| FITin56 ← boosting-metabolism | Não aparece entre as 77 URLs listadas | 18% |

As posições são proporções das palavras do elemento `article`, não dados de rolagem de leitores. Os 63 cliques das três entradas listadas representam cerca de 7,6% da soma de 829 cliques da tabela Web. Isso é uma referência de alcance anterior ao lançamento: **não são 63 visitas às reviews, nem cliques em ofertas**. Ausência de boosting-metabolism na tabela não comprova ausência de todas as visitas ao site.

As reviews têm duas entradas contextuais cada, além dos índices de Metabolism e All Articles. Não estão soltas. Porém, o principal link do cookbook está perto do fim de um texto longo, e os assuntos de entrada ainda não são diretamente “quero comprar um livro de receitas” ou “quero um programa de treino”.

### Estratégia principal recomendada

**Busca relevante → guia útil → comparação/review → oferta adequada.**

1. Desenvolver guias com valor próprio sobre planejamento de refeições e escolha de programas de exercícios. Usar modelos de lista, critérios, custos, limitações e opções gratuitas. O leitor deve conseguir resolver parte do problema mesmo sem comprar.
2. Dar a cada novo guia entradas a partir de dois artigos pertinentes já publicados. Isso deve fazer parte da pauta e da revisão editorial. Evitar inserir uma oferta só porque uma página tem muitas visitas.
3. Nos quatro artigos de entrada atuais, colocar um convite curto e visível na primeira seção realmente pertinente. Testar um pequeno bloco com título e uma frase, mantendo o conteúdo editorial útil. Na review, oferecer um atalho para preços/condições após o resumo ou tabela, com a divulgação de afiliação próxima, além do CTA final.
4. Criar uma área de recursos avaliados acessível no menu/índice e um destaque editorial discreto na home. A home, sozinha, não distribui uma oferta aos leitores que chegam diretamente a artigos pelo Bing. Banners genéricos em todo o site não são a prioridade deste ciclo.
5. Manter as páginas de dosagem, gravidez e efeitos adversos focadas em informação de saúde. Não apresentar cookbook ou FITin56 como tratamento ou programa validado para usuários de GLP-1.
6. Conservar PLANTBC e FITIN56 como dois testes separados antes de ampliar o número de produtos. O FITin56 foi escolhido por hipótese de adequação ao tema, com pouca evidência recente de conversão no Marketplace; não é um vencedor comprovado. Reavaliar a oferta após receber tráfego pertinente e observar checkout, comissão líquida e reembolsos.

As marcações `sponsored nofollow noopener`, o aviso comercial, os links com TID por origem e a canonical sem query estão implementados. A inspeção de hoje confirmou o link e suas marcações na review do cookbook; a validação de geração dos links cobre ambas as ofertas. A verificação anterior do checkout está documentada em [MONETIZATION.md](MONETIZATION.md).

### Medição que falta

Não há analytics próprios para saber quantas pessoas abriram uma review ou clicaram no convite dentro de um artigo. ClickBank informa hops e transações atribuídas, mas o TID representa a entrada imediata codificada, não o mecanismo de busca nem a sessão inteira.

Implementar eventos mínimos para visualização de guia/review, clique interno rumo à review e clique de saída por oferta/posição. Registrar códigos fixos, sem perguntas de saúde, entradas das calculadoras, texto de busca, URLs completas com queries ou identificadores pessoais. Não instalar gravação de sessão indiscriminada no acervo de saúde. A política de privacidade deve acompanhar a implementação real.

No relatório semanal: visitas dos guias e reviews, cliques por posição, hops válidos, vendas iniciais, comissão líquida, reembolsos e recorrências efetivamente recebidas. Excluir QA e testes. Calcular taxas somente com denominadores compatíveis; não dividir vendas por impressões ou tratar cliques de busca como visitas medidas à review.

Diagnóstico por etapa: poucas visitas aos guias → distribuição/intenção; visitas sem cliques internos → transição/visibilidade; visitas à review sem saídas → proposta/comparação; hops sem vendas → oferta/público/preço/checkout; vendas com reembolso → qualidade/expectativa. Rever semanalmente, mas não escolher um vencedor com poucos eventos. Ao fim de quatro semanas, volume insuficiente significa continuar a coleta ou melhorar distribuição, não declarar a oferta reprovada.

## 6. Pauta proposta: quatro semanas

Títulos são pautas de trabalho, não keywords com volume já comprovado. Antes de publicar, consultar consultas reais e resultados de busca, evitar sobreposição com o acervo e pesquisar as fontes. Todos os textos públicos continuam em inglês.

| Semana | Segunda: alimentação | Quarta: exercícios | Sexta: decisão de compra |
|---|---|---|---|
| 1 | Plant-Based Meal Planning for Beginners: A Practical Grocery List | Choosing a Beginner Home Workout Program: Equipment, Time and Progression | Free Recipes vs Paid Meal Plans: What Is Worth Paying For? |
| 2 | How to Build a Weekly Grocery List from Recipes You Already Like | How to Compare Home Workout Subscriptions and Cancellation Terms | Free Workout Videos vs Paid Programs: What Does Structure Add? |
| 3 | Plant-Based Meal Prep on a Budget: Planning Portions and Shopping | Small-Space Home Workouts: Choosing a Realistic Setup | Digital Cookbook vs Meal-Planning Service: Contents, Costs and Limits |
| 4 | How to Evaluate Recipe Nutrition Information Before Buying a Cookbook | What to Check Before Paying for an Online Fitness Program | Meal-Planning Resources vs Weight-Loss Supplements: Different Purchases, Different Evidence |

O primeiro grupo pode encaminhar ao cookbook; o segundo, ao FITin56 quando os critérios do leitor corresponderem à oferta. Comparações devem manter alternativas gratuitas e não presumir que um dos produtos precise vencer.

Revisões de acervo prioritárias: os quatro artigos de entrada das ofertas; Mounjaro Dosage Chart; GLP-1 Storage and Handling; a página de gastroparesia; os dois comparativos Mounjaro vs Ozempic. Nas páginas clínicas, a finalidade é precisão e utilidade, sem transformar uma revisão em colocação comercial.

## 7. Ordem de execução sugerida

1. Corrigir cinco links quebrados, metadados de tools, imagem/metadados sociais e formato de URLs no sitemap; conferir em produção e documentar os casos antigos do Search Console.
2. Corrigir referências renderizadas, artigo em português e títulos duplicados no corpo; começar pelas entradas das ofertas. Avaliar a sobreposição dos dois comparativos antes de qualquer consolidação.
3. Instalar a medição mínima e tornar os quatro caminhos atuais mais visíveis; estabelecer o início da janela de análise após a implementação.
4. Corrigir a rotina de publicação e só então configurar a cadência proposta, usando uma única fonte de configuração e confirmação pública de cada publicação.
5. Executar a pauta com links de entrada planejados, atualizar o acervo e medir resultados semanalmente. Trabalhar CSS/contraste em seguida, com comparação antes/depois nas mesmas páginas e condições.

O objetivo do próximo ciclo é provar que leitores com uma necessidade compatível chegam às reviews e fazem hops válidos, enquanto as páginas que já atraem tráfego continuam úteis. Não há projeção de receita nem garantia de ranking neste plano.
