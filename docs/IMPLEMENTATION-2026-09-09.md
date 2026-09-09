# SEO e ClickBank — implementação de 9 de setembro de 2026

Aprovada pelo usuário após a auditoria. Este documento descreve as alterações; a confirmação pública e os resultados dos testes ficam abaixo e no relatório de produção.

## Entregas

- Canonicals, sitemap e links internos uniformizados com barra final; quatro destinos antigos recebem redirecionamentos específicos. Metadados sociais próprios por página, /tools corrigida e imagem social real de 1200 × 630.
- Referências Markdown renderizadas como notas navegáveis, duas referências malformadas corrigidas e H1 duplicados removidos. Tirzepatide reescrito em inglês; comparativos existentes diferenciados em evidência de ensaios versus decisões práticas. URLs e datas de publicação históricas preservadas. Isso não equivale a revisão clínica integral do acervo.
- Home, navegação, rodapé e /resources/ levam às duas análises; entradas contextuais aparecem mais cedo nos quatro guias. Botão comercial após preços/condições e no fim de cada análise, com aviso e TID. Artigos históricos recebem navegação para leituras da mesma categoria. Sem banner genérico ou oferta em resultados de calculadoras.
- Home visível antes de hidratação, hierarquia/contraste do rodapé melhorados, ferramenta inexistente removida e cabeçalho adaptado para não recortar controles em tablet. Tabelas móveis permanecem dentro da área de leitura.
- Funil próprio com códigos fixos, opt-out DNT/GPC, QA separado, relatório privado assinado e retenção diária. Nenhum dado de calculadora ou busca, identificador de visitante, cookie analítico ou pixel publicitário. Limitações de contagem e privacidade documentadas.

## Rotina ativa

Automação do Codex: **metabolic-science-editorial-e-clickbank**, tipo heartbeat, ACTIVE, vinculada à tarefa original. Configuração lida novamente após criação. 10h BRT nos dias úteis; guardas no calendário impedem trabalho fora do piloto **14/09–09/10/2026**. Segunda/quarta/sexta: uma nova matéria; terça/quinta: uma revisão. Sexta também mede o funil e resultados disponíveis do CB. São 12 pautas e oito revisões planejadas, não publicadas antecipadamente.

O Mac e o Codex precisam estar disponíveis para execução local. Falhas/dias perdidos não autorizam lote, mudança de data histórica ou segunda publicação no mesmo dia. O gerenciador usa bloqueio exclusivo, worktree separado, verificação de publicação existente e confirmação de commit/conteúdo público. Os scripts Claude antigos apenas exibem status. Não há segundo cron ativo.

## Validação

Build, tipos e lint do Next; seis testes de contratos/privacidade/autenticação/calendário; verificador do piloto (148 URLs históricas, ambas as ofertas e atribuição por origem); verificador SEO do export (166 páginas). A avaliação visual cobre home/recursos/review em larguras representativas, sem afirmar inspeção individual das 166 páginas.

A medição real começa após o deploy do coletor. QA não representa visitantes, vendas ou comissão. Relatório semanal: `npm run report:funnel -- --days=7`. Resultado comercial do piloto ainda precisa de tráfego pertinente e dados do ClickBank; não há previsão de receita.

## Limites e manutenção

Atualizadas dependências compatíveis, incluindo Next 14.2.35. O npm ainda sinaliza advisories do Next que exigem migração de versão principal. O site é exportado como arquivos estáticos; não utiliza servidor Next, Server Actions ou otimizador de imagens em produção. Não se declara risco zero nem migração completa de framework. Reavaliar esses advisories antes de introduzir runtime Next ou código não confiável no build.

Dados de indexação do Google/Bing têm atraso. Correção técnica e envio ao IndexNow não garantem indexação, ranking ou conversão. Títulos longos não foram truncados em massa; futuras revisões usam consultas e intenção observadas. As condições das ofertas continuam datadas e precisam de nova inspeção nas revisões comerciais.

## Confirmação em produção

O commit **2df5f41cc08c2d228cd6760c524152fd1583912e** foi publicado pelo Netlify e identificado em release.json. Às 18:38 UTC, as **166/166 páginas** responderam 200 com título/canonical correspondentes ao export. Os oito caminhos antigos (quatro com e sem barra) responderam 301 para os destinos corretos. Imagem social: 200; página inexistente: 404; relatório sem assinatura: 401. Evidência em reports/production-verification-2026-09-09.json.

Percursos reais no navegador: home → cookbook → vendedor, e boosting-metabolism → FITin56 → vendedor. Os eventos de entrada, visualização e saída aparecem no relatório QA com as origens home/bm, posição summary e TIDs exclusivos de teste. A primeira consulta normal excluiu todos esses testes. O coletor aceitou evento válido com 204 e rejeitou campo extra com 400. Não houve compra. Evidência em reports/funnel-verification-2026-09-09.json.

IndexNow aceitou **19 URLs canônicas prioritárias**, HTTP 200, com TLS verificado. Envio aceito não significa indexação confirmada.

PageSpeed móvel da home após publicação: **93 Performance / 100 Accessibility / 100 Best Practices / 100 SEO**, FCP 1,2 s, LCP 2,9 s, TBT 0 ms, CLS 0. Antes: Performance 87. A nota geral subiu, mas o LCP arredondado permaneceu 2,9 s, acima da referência de 2,5 s. Medição de laboratório única; dados de campo seguem insuficientes. [Relatório da home no PageSpeed](https://pagespeed.web.dev/analysis/https-metabolicscience-org/bu6tu7bxw5?form_factor=mobile).

A nova medição PageSpeed da review do cookbook ficou **indisponível**: duas tentativas retornaram erro interno de infraestrutura do Google (`UNABLE_TO_RETRY` / `RPC::UNREACHABLE`). Não se atribui esse erro ao site e não se reapresenta o resultado anterior de 94 como medição nova. A review passou na inspeção móvel de 390 px (tabela 352 px, sem extravasamento), nos testes de export e no percurso comercial em produção. Não há certificado de acessibilidade integral ou aprovação de Core Web Vitals.

Os testes de navegador e PageSpeed feitos em 09/09 são uma fase de instalação, não a janela comercial do piloto, que começa em 14/09. Eventuais visitas de robôs de teste fora do modo QA podem aparecer nas contagens do dia de instalação; não usar esse dia para decidir qual oferta converte melhor.
