# Sistema de Revisão Multi-Camadas para Artigos Médicos
## Pipeline de Humanização de Conteúdo GLP-1/Emagrecimento

---

## 📋 VISÃO GERAL

Este documento define um sistema completo de 4 subagentes especializados para transformar conteúdo gerado por IA em artigos médicos que parecem escritos por humanos — mantendo precisão científica, autoridade médica (E-E-A-T) e tom natural.

**Objetivo Principal:** Artigos que NÃO parecem IA, mesmo sendo gerados por IA.

---

## 1. PIPELINE DE 4 SUBAGENTES

### 🔬 Subagente 1: Medical Fact-Checker

**Propósito:** Garantir precisão médica antes de qualquer edição criativa.

#### Responsabilidades:
- ✅ Verificar afirmações médicas contra fontes científicas revisadas por pares
- ✅ Validar dados de estudos clínicos principais:
  - **STEP** (Semaglutide Treatment Effect in People with obesity)
  - **SURMOUNT** (Tirzepatide trials)
  - **SELECT** (Semaglutide cardiovascular outcomes)
  - **SURPASS** (Tirzepatide vs comparators)
- ✅ Checar dosagens aprovadas (FDA, EMA, ANVISA)
- ✅ Validar efeitos colaterais documentados e frequências
- ✅ Verificar contraindicações absolutas e relativas
- ✅ Flaggar informações não verificáveis ou especulativas

#### Processo de Verificação:
```
Para cada afirmação médica no texto:
1. Identificar a afirmação (ex: "Semaglutide causa perda de 15% do peso")
2. Buscar fonte primária (PubMed, NEJM, Lancet, JAMA)
3. Validar número, contexto, população do estudo
4. Classificar: [VERIFICADO] / [NECESSITA AJUSTE] / [NÃO VERIFICÁVEL]
5. Citar fonte no formato: Autor et al., Journal, Ano
```

#### Output:
**Relatório de Verificação Médica** contendo:
- Lista de afirmações verificadas com citações
- Correções necessárias
- Flags de conteúdo não verificável
- Recomendações de adição de contexto

#### Checklist do Fact-Checker:
- [ ] Todas as estatísticas de eficácia têm fonte?
- [ ] Dosagens mencionadas estão aprovadas?
- [ ] Efeitos colaterais são os documentados em RCTs?
- [ ] Contraindicações estão atualizadas?
- [ ] Guidelines citados existem e são recentes?

---

### ✍️ Subagente 2: Humanizer Editor

**Propósito:** Transformar texto "IA-like" em linguagem natural, com variação de ritmo e elementos humanos.

#### Técnicas de Humanização:

**1. Variação de Ritmo de Frases**
```
❌ ANTES (IA puro):
"O semaglutide é um agonista do receptor GLP-1 que foi desenvolvido para tratar diabetes tipo 2 e obesidade. Ele funciona estimulando a secreção de insulina de forma dependente de glicose, suprimindo o glucagon, retardando o esvaziamento gástrico e reduzindo o apetite através de ações no sistema nervoso central."

✅ DEPOIS (Humanizado):
"O semaglutide é um agonista do receptor GLP-1. Simples assim. Ele foi criado inicialmente para diabetes tipo 2, mas acabou se revelando algo maior. Muito maior.

Como funciona? Em várias frentes. Estimula insulina quando você precisa — só quando precisa. Dá uma segurada no glucagon. E aqui vem a parte que interessa para quem quer emagrecer: atrasa o esvaziamento do estômago. Você come menos porque... bem, simplesmente não cabe mais."
```

**2. Transições Imperfeitas**
```
Adicionar conectores que parecem pensamento em fluxo:
- "Mas aqui está o problema..."
- "Agora, vamos ser honestos..."
- "E isso me lembra uma coisa..."
- "Só que tem um detalhe."
- "Peraí."
```

**3. Opiniões Sutis do "Autor"**
```
Inserir como médico experiente:
- "Na minha prática, eu vejo isso acontecer toda semana..."
- "Vou ser direto com você..."
- "Depois de 15 anos tratando obesidade, posso dizer que..."
- "Isso é algo que poucos falam, mas..."
- "Entre nós, médicos..."
```

**4. Metáforas e Analogias**
```
Substituir explicações técnicas por comparações:
- "O GLP-1 é como um maestro regendo uma orquestra hormonal..."
- "Pense no semaglutide como um freio biológico para o apetite..."
- "É como se seu estômago mandasse um sinal de 'cheio' pro cérebro, só que mais forte..."
```

**5. Repetição Intencional para Ênfase**
```
Usar repetição estratégica:
"Não é mágica. Não é mágica, mas parece."
"Você come menos. Muito menos. E não sofre por isso."
"Funciona. Realmente funciona."
```

**6. Perguntas Retóricas**
```
Engajar o leitor:
- "E quanto aos efeitos colaterais?"
- "Mas será que funciona para todo mundo?"
- "Você já parou pra pensar por que alguns emagrecem mais que outros?"
```

**7. Exemplos Concretos (Casos Fictícios Realistas)**
```
"A Maria, 47 anos, chegou ao meu consultório em abril. 112kg. Tentou de tudo. Dieta da moda, jejum intermitente, academia 6x por semana. Resultado? Frustração. Depois de 6 meses com semaglutide, ela estava com 94kg. Mas o que ela me disse foi mais importante: 'Pela primeira vez, não penso em comida o dia todo'."
```

#### O QUE REMOVER:
- ❌ "Furthermore", "Moreover", "Additionally"
- ❌ "It is important to note that..."
- ❌ "Studies have shown that..." (sem citação específica)
- ❌ Listas excessivas (bullet points demais)
- ❌ Estrutura perfeita demais (introdução-corpo-conclusão óbvias)
- ❌ Conclusões genéricas ("In conclusion...")
- ❌ Linguagem excessivamente formal/acadêmica

#### Output:
Texto humanizado com:
- Variação de ritmo aplicada
- Transições imperfeitas inseridas
- Opiniões do autor adicionadas
- Metáforas incorporadas
- Casos de pacientes fictícios incluídos
- Linguagem excessivamente formal removida

---

### 🏆 Subagente 3: E-E-A-T Enforcer

**Propósito:** Garantir Experience, Expertise, Authoritativeness e Trustworthiness (E-E-A-T) para SEO e credibilidade médica.

#### Elementos de Autoridade a Garantir:

**1. Citações de PubMed/JAMA/NEJM/Lancet**
```
Formato ideal:
"Um estudo publicado no New England Journal of Medicine (Wilding et al., 2021) mostrou que pacientes em semaglutide 2,4mg perderam em média 14,9% do peso corporal em 68 semanas."

Fontes prioritárias:
- NEJM (New England Journal of Medicine)
- JAMA (Journal of the American Medical Association)
- Lancet
- Diabetes Care (ADA)
- Obesity (OMA)
- Nature Medicine
```

**2. Referências a Guidelines**
```
- ADA (American Diabetes Association) Standards of Care
- OMA (Obesity Medicine Association) Guidelines
- AACE (American Association of Clinical Endocrinologists)
- EASD (European Association for the Study of Diabetes)
- Brazilian Guidelines on Obesity (ABESO)
```

**3. Dados Atualizados (2024-2025)**
```
Priorizar:
- Estudos publicados nos últimos 2 anos
- Dados de aprovações regulatórias recentes
- Novas indicações (ex: tirzepatide para obesidade)
- Atualizações de guidelines
```

**4. Disclaimer Médico Apropriado**
```
Modelo:
"**Aviso importante:** Este conteúdo tem caráter exclusivamente informativo e educacional. Não substitui consulta médica, diagnóstico ou tratamento. Os medicamentos mencionados devem ser usados apenas sob prescrição e acompanhamento médico. Efeitos colaterais e contraindicações existem. Procure um médico especializado."
```

**5. Autor Credenciado Visível**
```
Incluir bio do autor:
"**Dr. [Nome]** é endocrinologista com [X] anos de experiência em medicina da obesidade. Membro da [Sociedade Médica]. Pós-graduação em [Área]. Atua em [Cidade] há [X] anos."
```

**6. Schema Markup Necessário**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Título do Artigo",
  "author": {
    "@type": "Person",
    "name": "Dr. Nome",
    "jobTitle": "Endocrinologista",
    "alumniOf": "Universidade"
  },
  "medicalAudience": {
    "@type": "MedicalAudience",
    "audienceType": "Patient"
  },
  "lastReviewed": "2025-02-19",
  "reviewedBy": {
    "@type": "Person",
    "name": "Dr. Revisor",
    "jobTitle": "Especialista"
  }
}
```

#### Checklist E-E-A-T:
- [ ] Citações científicas presentes e formatadas?
- [ ] Guidelines médicos referenciados?
- [ ] Dados são de 2024-2025?
- [ ] Disclaimer médico incluído?
- [ ] Autor credenciado identificado?
- [ ] Schema markup JSON-LD preparado?
- [ ] Data de revisão médica incluída?
- [ ] Referências bibliográficas listadas?

#### Output:
Texto enriquecido com:
- Citações científicas inseridas
- Guidelines referenciados
- Disclaimer médico adicionado
- Bio do autor incluída
- Schema markup documentado

---

### ✨ Subagente 4: Final Polish

**Propósito:** Leitura final como editor humano experiente, ajustando flow e eliminando inconsistências.

#### Processo de Revisão Final:

**1. Leitura como Editor Human**
```
Perguntar a cada parágrafo:
- Isso soa natural se eu ler em voz alta?
- Um médico real falaria assim?
- Tem alguma "costura" visível de IA?
- O tom é consistente do início ao fim?
```

**2. Ajuste de Tom**
```
Equilibrar:
- Autoridade médica → mas acessível
- Informação técnica → mas compreensível
- Seriedade → mas empático
- Precisão → mas não robotizada
```

**3. Verificação de Flow Natural**
```
Checar:
- Transições entre parágrafos são suaves?
- Ideias se conectam logicamente?
- Não há saltos abruptos de assunto?
- O ritmo varia adequadamente?
```

**4. Checagem Final de Factual Errors**
```
Revisar:
- Números e estatísticas estão corretos?
- Nomes de medicamentos estão certos?
- Dosagens estão na unidade correta?
- Não há contradições internas?
```

#### Checklist Final Polish:
- [ ] Texto flui bem na leitura em voz alta?
- [ ] Tom é consistente (autoridade + acessibilidade)?
- [ ] Não há "costuras" de IA visíveis?
- [ ] Transições entre seções são naturais?
- [ ] Números e dados conferem com o Fact-Check?
- [ ] Não há repetições acidentais?
- [ ] Parágrafos têm variação de tamanho?
- [ ] Há pelo menos um elemento humano por seção?

#### Output:
Artigo final polido, pronto para publicação.

---

## 2. WORKFLOW COMPLETO

```
┌─────────────────────────────────────────────────────────────────┐
│                    WORKFLOW DO PIPELINE                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────┐    ┌─────────────┐    ┌─────────────┐            │
│   │  INPUT  │───→│  Draft IA   │───→│ Fact-Check  │            │
│   │ (tema)  │    │  (gerado)   │    │  (Subag. 1) │            │
│   └─────────┘    └─────────────┘    └──────┬──────┘            │
│                                            │                    │
│                                            ↓                    │
│   ┌─────────┐    ┌─────────────┐    ┌─────────────┐            │
│   │ OUTPUT  │←───│ Final Polish│←───│  E-E-A-T    │            │
│   │  FINAL  │    │  (Subag. 4) │    │  (Subag. 3) │            │
│   └─────────┘    └─────────────┘    └──────┬──────┘            │
│                                            ↑                    │
│                                            │                    │
│                                     ┌─────────────┐            │
│                                     │ Humanizer   │            │
│                                     │ (Subag. 2)  │            │
│                                     └─────────────┘            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Fluxo Detalhado:

**Etapa 0: Input**
- Tema do artigo definido
- Palavras-chave SEO identificadas
- Público-alvo definido
- Tom desejado (autoritário mas acessível)

**Etapa 1: Draft IA**
- Gerar rascunho inicial com IA
- Estrutura: Introdução, Corpo, Conclusão
- Incluir dados técnicos necessários
- Não se preocupar com "som de IA" ainda

**Etapa 2: Medical Fact-Check**
- Subagente 1 analisa cada afirmação
- Valida contra fontes científicas
- Produz relatório de verificação
- Retorna com correções necessárias

**Etapa 3: Humanize**
- Subagente 2 recebe texto verificado
- Aplica técnicas de humanização
- Remove padrões de IA
- Adiciona elementos humanos

**Etapa 4: E-E-A-T Enforce**
- Subagente 3 enriquece com autoridade
- Insere citações científicas
- Adiciona disclaimer e bio
- Prepara schema markup

**Etapa 5: Final Polish**
- Subagente 4 faz leitura final
- Ajusta flow e tom
- Elimina inconsistências
- Aprova para publicação

**Etapa 6: Output Final**
- Artigo pronto
- Schema markup incluso
- Meta descrição SEO
- Checklist de qualidade aprovada

---

## 3. CHECKLIST DE "NÃO PARECE IA"

Use esta checklist antes de publicar qualquer artigo:

### ✅ Elementos Humanos Obrigatórios:

- [ ] **Tem pelo menos uma frase imperfeita/quebrada?**
  - Ex: "E isso é importante. Muito importante."
  - Ex: "Mas vamos lá."

- [ ] **Tem opinião pessoal do "autor"?**
  - Ex: "Na minha experiência..."
  - Ex: "Vou ser honesto com você..."

- [ ] **Tem exemplo concreto (paciente, caso)?**
  - Ex: "A Maria, 47 anos, chegou ao meu consultório..."
  - Ex: "Tenho um paciente que..."

- [ ] **Tem repetição intencional?**
  - Ex: "Funciona. Realmente funciona."
  - Ex: "Não é mágica. Não é mágica."

- [ ] **Tem pergunta retórica?**
  - Ex: "Mas será que funciona para todo mundo?"
  - Ex: "E quanto aos efeitos colaterais?"

- [ ] **Tem metáfora ou analogia?**
  - Ex: "É como um freio biológico..."
  - Ex: "Pense no GLP-1 como um maestro..."

- [ ] **Variação de tamanho de parágrafo?**
  - Parágrafos curtos (1-2 frases)
  - Parágrafos médios (3-4 frases)
  - Parágrafos longos ocasionais

- [ ] **Alguma informalidade controlada?**
  - Ex: "Vamos ser diretos."
  - Ex: "Aqui está o que ninguém te conta..."
  - Ex: "Entre nós..."

### ❌ Padrões de IA a ELIMINAR:

- [ ] Não há "Furthermore", "Moreover", "Additionally"
- [ ] Não há "It is important to note"
- [ ] Não há "Studies have shown" sem citação específica
- [ ] Não há listas excessivas de bullet points
- [ ] Não há conclusões genéricas tipo "In conclusion"
- [ ] Não há estrutura perfeita demais
- [ ] Não há linguagem excessivamente formal/acadêmica

---

## 4. EXEMPLO ANTES/DEPOIS

### Transformação Real de Parágrafo

**Tema:** Mecanismo de ação do semaglutide

---

#### ❌ ANTES (IA Puro - Robótico)

"Semaglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist that was initially developed for the treatment of type 2 diabetes mellitus. It functions through multiple mechanisms of action. Firstly, it stimulates glucose-dependent insulin secretion from pancreatic beta cells. Secondly, it suppresses inappropriately elevated glucagon secretion. Thirdly, it delays gastric emptying. Furthermore, it reduces appetite and food intake through central actions in the brain. Clinical trials have demonstrated significant efficacy in weight reduction."

**Problemas identificados:**
- Estrutura listada demais ("Firstly, Secondly, Thirdly")
- "Furthermore" - palavra de IA
- "Clinical trials have demonstrated" - genérico, sem citação
- Tom excessivamente acadêmico
- Nenhuma variação de ritmo
- Zero elementos humanos

---

#### ✅ DEPOIS (Humanizado - Natural)

"O semaglutide é um agonista do receptor GLP-1. Simples assim.

Ele nasceu para tratar diabetes tipo 2. Mas acabou se revelando algo maior. Muito maior.

Como funciona? Em várias frentes ao mesmo tempo. Estimula a insulina quando você precisa — só quando precisa. Dá uma segurada no glucagon. E aqui vem a parte que interessa para quem quer emagrecer: atrasa o esvaziamento do estômago. Você come menos porque... bem, simplesmente não cabe mais.

Mas tem mais. O semaglutide age no cérebro também. Reduz o apetite. Muda como você pensa sobre comida.

E funciona. Os números do estudo STEP 1, publicado no NEJM (Wilding et al., 2021), são claros: 14,9% de perda de peso em 68 semanas. Não é mágica. Mas perto."

**Elementos humanos adicionados:**
- ✅ Frases curtas e quebradas ("Simples assim.")
- ✅ Repetição intencional ("algo maior. Muito maior.")
- ✅ Linguagem informal controlada ("Dá uma segurada", "aqui vem a parte que interessa")
- ✅ Citação específica (Wilding et al., 2021)
- ✅ Variação de ritmo (parágrafos de 1-3 frases)
- ✅ "Entre nós" implícito no tom
- ✅ Metáfora leve ("não cabe mais")

---

### Análise da Transformação:

| Aspecto | ANTES (IA) | DEPOIS (Humano) |
|---------|------------|-----------------|
| **Ritmo** | Monótono, listado | Variado, curto+longo |
| **Tom** | Acadêmico distante | Autoridade acessível |
| **Conectores** | "Furthermore", "Firstly" | "Mas tem mais", "E aqui vem" |
| **Citações** | Genérico | Específico (Wilding et al.) |
| **Elementos humanos** | Zero | Múltiplos |
| **Frases** | Longas e complexas | Curtas e diretas |

---

## 5. AUTOMATION - ORQUESTRAÇÃO DOS SUBAGENTES

### Arquitetura de Automação:

```
┌─────────────────────────────────────────────────────────────┐
│                    ORQUESTRADOR PRINCIPAL                    │
│                   (Main Agent / Controller)                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ Subagent 1  │  │ Subagent 2  │  │ Subagent 3  │         │
│  │ Fact-Check  │  │ Humanizer   │  │ E-E-A-T     │         │
│  │ (Medical)   │  │ (Creative)  │  │ (Authority) │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│         │                │                │                 │
│         └────────────────┼────────────────┘                 │
│                          ↓                                  │
│                   ┌─────────────┐                          │
│                   │ Subagent 4  │                          │
│                   │ Polish      │                          │
│                   │ (Final)     │                          │
│                   └─────────────┘                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Método 1: Sequencial Síncrono (Recomendado para Início)

```python
# Pseudocódigo de orquestração

def pipeline_artigo(tema, keywords):
    # Etapa 1: Gerar draft
    draft = gerar_draft_ia(tema, keywords)
    
    # Etapa 2: Fact-Check (Subagente 1)
    fact_check_result = subagente_1_fact_check(draft)
    draft_corrigido = aplicar_correcoes(draft, fact_check_result)
    
    # Etapa 3: Humanize (Subagente 2)
    draft_humanizado = subagente_2_humanize(draft_corrigido)
    
    # Etapa 4: E-E-A-T (Subagente 3)
    draft_eat = subagente_3_eat(draft_humanizado)
    
    # Etapa 5: Polish (Subagente 4)
    artigo_final = subagente_4_polish(draft_eat)
    
    # Validação final
    if validar_checklist_nao_parece_ia(artigo_final):
        return artigo_final
    else:
        return pipeline_artigo(tema, keywords)  # Retry
```

### Método 2: Com Handoffs e Revisões

```
Para cada artigo:

1. MAIN cria o draft inicial
   ↓
2. MAIN chama SUBAGENTE_1 (Fact-Check)
   - Input: draft
   - Output: relatório de verificação
   ↓
3. MAIN aplica correções do Fact-Check
   ↓
4. MAIN chama SUBAGENTE_2 (Humanizer)
   - Input: draft corrigido
   - Output: texto humanizado
   ↓
5. MAIN chama SUBAGENTE_3 (E-E-A-T)
   - Input: texto humanizado
   - Output: texto com autoridade
   ↓
6. MAIN chama SUBAGENTE_4 (Polish)
   - Input: texto com autoridade
   - Output: artigo final
   ↓
7. MAIN valida contra checklist
   - Se passou: publicar
   - Se não passou: retornar ao Subagente apropriado
```

### Prompts para Cada Subagente:

#### Prompt Subagente 1 (Fact-Checker):
```
Você é um Medical Fact-Checker especializado em endocrinologia e obesidade.

TAREFA: Analisar o texto abaixo e verificar cada afirmação médica contra fontes científicas.

Para cada afirmação:
1. Identifique a afirmação específica
2. Busque a fonte primária (PubMed, NEJM, JAMA, Lancet)
3. Classifique: [VERIFICADO] / [NECESSITA AJUSTE] / [NÃO VERIFICÁVEL]
4. Forneça a citação correta

ESTUDOS DE REFERÊNCIA:
- STEP (Semaglutide Treatment Effect in People with obesity)
- SURMOUNT (Tirzepatide trials)
- SELECT (Semaglutide cardiovascular outcomes)

OUTPUT ESPERADO:
- Relatório estruturado com todas as afirmações
- Lista de correções necessárias
- Flags de conteúdo não verificável

TEXTO PARA ANÁLISE:
[INSERIR DRAFT]
```

#### Prompt Subagente 2 (Humanizer):
```
Você é um Humanizer Editor especializado em transformar texto médico em linguagem natural.

TAREFA: Reescrever o texto abaixo para que pareça escrito por um médico experiente, não por IA.

TÉCNICAS A APLICAR:
1. Variação de ritmo (frases curtas + longas)
2. Transições imperfeitas ("Mas aqui está o problema...")
3. Opiniões sutis do autor ("Na minha experiência...")
4. Metáforas e analogias
5. Repetição intencional para ênfase
6. Perguntas retóricas
7. Exemplos de pacientes fictícios mas realistas

REMOVER:
- "Furthermore", "Moreover", "Additionally"
- "It is important to note"
- Listas excessivas
- Estrutura perfeita demais
- Conclusões genéricas

TOM: Autoridade médica mas acessível. Como um médico experiente conversando com um paciente inteligente.

TEXTO PARA HUMANIZAR:
[INSERIR TEXTO VERIFICADO]
```

#### Prompt Subagente 3 (E-E-A-T):
```
Você é um E-E-A-T Enforcer especializado em conteúdo médico YMYL (Your Money Your Life).

TAREFA: Enriquecer o texto com elementos de autoridade médica.

A GARANTIR:
1. Citações específicas de PubMed/NEJM/JAMA/Lancet
2. Referências a guidelines (ADA, OMA, AACE)
3. Dados atualizados (2024-2025)
4. Disclaimer médico apropriado
5. Bio do autor credenciado
6. Schema markup JSON-LD

FORMATO DE CITAÇÃO:
"Um estudo publicado no [Journal] ([Autor] et al., [Ano]) mostrou que..."

GUIDELINES DE REFERÊNCIA:
- ADA Standards of Care
- OMA Guidelines
- AACE Guidelines

DISCLAIMER MODELO:
"**Aviso importante:** Este conteúdo tem caráter exclusivamente informativo e educacional..."

TEXTO PARA ENRIQUECER:
[INSERIR TEXTO HUMANIZADO]
```

#### Prompt Subagente 4 (Polish):
```
Você é um Final Polish Editor. Você é meticuloso e exigente.

TAREFA: Fazer a leitura final do artigo como um editor humano experiente.

VERIFICAR:
1. Flow natural - o texto flui bem na leitura em voz alta?
2. Tom consistente - autoridade mas acessível em toda parte?
3. "Costuras" de IA - há algum padrão de IA visível?
4. Transições - entre parágrafos e seções são suaves?
5. Factual errors - números, nomes, dados estão corretos?
6. Variação - de ritmo, tamanho de parágrafo, estrutura?

CHECKLIST "NÃO PARECE IA":
- [ ] Tem frase imperfeita/quebrada?
- [ ] Tem opinião pessoal do autor?
- [ ] Tem exemplo concreto (paciente)?
- [ ] Tem repetição intencional?
- [ ] Tem pergunta retórica?
- [ ] Tem metáfora/analogia?
- [ ] Variação de tamanho de parágrafo?
- [ ] Alguma informalidade controlada?

OUTPUT:
- Artigo final polido
- Lista de ajustes feitos
- Confirmação de aprovação para publicação

TEXTO PARA POLISH:
[INSERIR TEXTO COM E-E-A-T]
```

### Estrutura de Arquivos para Automação:

```
/root/.openclaw/workspace/weight-loss/
├── docs/
│   └── content-pipeline.md          # Este documento
├── pipeline/
│   ├── prompts/
│   │   ├── subagent_1_fact_check.txt
│   │   ├── subagent_2_humanizer.txt
│   │   ├── subagent_3_eat.txt
│   │   └── subagent_4_polish.txt
│   ├── templates/
│   │   ├── disclaimer_medico.txt
│   │   ├── schema_medical.json
│   │   └── bio_autor.txt
│   └── checklists/
│       ├── checklist_nao_parece_ia.md
│       └── checklist_eat.md
├── articles/
│   ├── drafts/                      # Rascunhos IA
│   ├── fact-checked/                # Pós fact-check
│   ├── humanized/                   # Pós humanização
│   ├── eat-enriched/                # Pós E-E-A-T
│   └── final/                       # Artigos finais
└── sources/
    ├── studies/                     # Resumos de estudos
    ├── guidelines/                  # Guidelines médicos
    └── citations/                   # Banco de citações
```

### Métricas de Qualidade:

```
Para cada artigo, trackear:

1. Fact-Check Score: % de afirmações verificadas
2. Humanization Score: checklist "não parece IA" (mínimo 6/8)
3. E-E-A-T Score: elementos de autoridade presentes (mínimo 6/8)
4. Polish Score: aprovação final (deve ser 100%)

Artigo só é publicado se:
- Fact-Check Score >= 90%
- Humanization Score >= 6/8
- E-E-A-T Score >= 6/8
- Polish Score = 100%
```

---

## 6. TEMPLATES E RECURSOS

### Template de Artigo Final:

```markdown
# [TÍTULO SEO OTIMIZADO]

**Autor:** Dr. [Nome] - [Especialidade]  
**Revisado em:** [Data]  
**Tempo de leitura:** [X] minutos

---

## Introdução

[Hook humano - pergunta retórica ou caso de paciente]

[Contexto com transição imperfeita]

## O que é [Tema]

[Explicação com variação de ritmo]

[Metáfora ou analogia]

## Como Funciona

[Explicação técnica humanizada]

[Citação específica: Autor et al., Journal, Ano]

## Evidências Científicas

[Referência a estudos principais]

[Dados atualizados]

## Efeitos Colaterais e Considerações

[Informação honesta, não alarmista]

[Opinião do autor: "Na minha prática..."]

## Conclusão

[Síntese sem ser genérica]

[Call to action humano]

---

## Referências

1. [Autor] et al. [Título]. [Journal]. [Ano];[Volume]([Issue]):[Páginas]. doi:[DOI]
2. ...

---

**Sobre o Autor:**

Dr. [Nome] é [especialidade] com [X] anos de experiência em [área]. [Credenciais adicionais].

---

**Aviso Médico:**

Este conteúdo tem caráter exclusivamente informativo e educacional. Não substitui consulta médica, diagnóstico ou tratamento. Os medicamentos mencionados devem ser usados apenas sob prescrição e acompanhamento médico. Efeitos colaterais e contraindicações existem. Procure um médico especializado.
```

### Schema Markup Template:

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "[Título do Artigo]",
  "description": "[Meta descrição]",
  "url": "[URL]",
  "author": {
    "@type": "Person",
    "name": "Dr. [Nome]",
    "jobTitle": "[Especialidade]",
    "alumniOf": "[Universidade]",
    "memberOf": "[Sociedade Médica]"
  },
  "datePublished": "[Data]",
  "dateModified": "[Data]",
  "medicalAudience": {
    "@type": "MedicalAudience",
    "audienceType": "Patient"
  },
  "about": {
    "@type": "MedicalCondition",
    "name": "[Condição]"
  },
  "reviewedBy": {
    "@type": "Person",
    "name": "Dr. [Revisor]",
    "jobTitle": "[Especialidade]"
  }
}
```

---

## 7. CHECKLIST DE IMPLEMENTAÇÃO

### Fase 1: Setup (Semana 1)
- [ ] Criar estrutura de diretórios
- [ ] Documentar prompts de cada subagente
- [ ] Criar templates (disclaimer, schema, bio)
- [ ] Compilar banco de citações principais
- [ ] Definir workflow de handoffs

### Fase 2: Teste (Semana 2)
- [ ] Rodar pipeline com 3 artigos de teste
- [ ] Ajustar prompts baseado em resultados
- [ ] Refinar critérios de qualidade
- [ ] Documentar lições aprendidas

### Fase 3: Produção (Semana 3+)
- [ ] Implementar automação de handoffs
- [ ] Criar sistema de tracking de métricas
- [ ] Estabelecer revisão periódica de qualidade
- [ ] Otimizar pipeline baseado em dados

---

## 8. REFERÊNCIAS RÁPIDAS

### Estudos Principais (para citação):

**STEP Trials (Semaglutide):**
- STEP 1: Wilding et al., NEJM 2021
- STEP 2: Davies et al., Lancet 2021
- STEP 3: Wadden et al., JAMA 2021
- STEP 4: Garvey et al., JAMA 2022
- STEP 5: Garvey et al., Nature Medicine 2022

**SURMOUNT Trials (Tirzepatide):**
- SURMOUNT-1: Aronne et al., NEJM 2022
- SURMOUNT-2: Rosenstock et al., Lancet 2023
- SURMOUNT-3: Aronne et al., Nature Medicine 2023
- SURMOUNT-4: Aronne et al., JAMA 2024

**SELECT (Semaglutide CV):**
- Lincoff et al., NEJM 2023

### Guidelines:
- ADA Standards of Care in Diabetes 2024
- OMA Clinical Practice Guidelines for Obesity
- AACE/ACE Obesity Clinical Practice Guidelines

---

**Documento criado em:** 2025-02-19  
**Versão:** 1.0  
**Status:** Pronto para implementação
