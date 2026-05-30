# IndexNow

O [IndexNow](https://www.indexnow.org/) avisa os buscadores (Bing, Yandex, Seznam,
Naver, Yep) assim que uma URL e criada ou atualizada, em vez de esperar o crawl
natural. Um unico ping no hub `api.indexnow.org` propaga para todos os participantes.

> O Google **nao** participa do IndexNow — para ele continua valendo o `sitemap.xml`
> + Google Search Console.

## Como esta montado

| Peca | Local | Papel |
|------|-------|-------|
| Chave | `public/2b8387054a6787cb9eac484ebb99da9d.txt` | Servida em `https://metabolicscience.org/2b8387054a6787cb9eac484ebb99da9d.txt`. O IndexNow busca esse arquivo para confirmar que somos donos do dominio. |
| Script | `scripts/indexnow.mjs` | Monta o payload e faz POST para o IndexNow. Zero dependencias (fetch nativo, Node 18+). |
| npm scripts | `package.json` | `indexnow`, `indexnow:latest`, `indexnow:sitemap`. |
| Automacao | `AGENT.md` (Secao 8) | O cron diario roda `--latest` apos publicar cada artigo. |

A chave e descoberta a partir do proprio arquivo em `public/` — nao ha valor
duplicado em codigo. Para rotacionar, gere outra (`openssl rand -hex 16`), renomeie
o arquivo e ajuste o conteudo para bater com o novo nome.

## Uso

```bash
# Artigo mais recente em content/ + home, /articles e a pagina da categoria
npm run indexnow:latest

# Backfill: todas as URLs do sitemap gerado (rode `npm run build` antes)
npm run indexnow:sitemap

# URLs especificas
node scripts/indexnow.mjs https://metabolicscience.org/glp-1/algum-artigo

# Pre-visualizar sem enviar
node scripts/indexnow.mjs --latest --dry-run
```

## Importante

- **Deploy primeiro.** O IndexNow so aceita a submissao se conseguir ler o arquivo
  da chave no dominio. Apos o primeiro deploy, confirme que
  `https://metabolicscience.org/2b8387054a6787cb9eac484ebb99da9d.txt` abre e mostra
  a chave; so entao rode `npm run indexnow:sitemap` para o backfill inicial.
- **So submeta URLs que mudaram.** Reenviar o sitemap inteiro todo dia e desnecessario
  (e pode ser visto como ruido). O fluxo diario usa `--latest` de proposito.
- **Codigos de resposta:** `200`/`202` = aceito; `403` = arquivo da chave nao
  encontrado/divergente; `422` = URL fora do host. O script imprime o significado.
- **Monitorar (opcional):** o [Bing Webmaster Tools](https://www.bing.com/webmasters/)
  → IndexNow mostra as URLs enviadas e o status de cada uma.
