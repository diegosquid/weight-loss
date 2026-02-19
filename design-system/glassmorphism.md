# Metabolic Science 2.0 - Glassmorphism System

Sistema completo de efeitos de vidro (frosted glass) para interfaces modernas e sofisticadas.

---

## 1. Fundamentos do Glassmorphism

### O que é Glassmorphism?

Glassmorphism é um estilo de design que utiliza:
- **Transparência** (background semi-transparente)
- **Blur** (efeito de desfoque no fundo)
- **Bordas sutis** (delimitação do elemento)
- **Sombras leves** (elevação e profundidade)

### Quando Usar

✅ **Use para:**
- Headers sticky/flutuantes
- Cards de destaque
- Modais e overlays
- Tooltips e popovers
- Navigation bars
- Cards de preço premium

❌ **Evite:**
- Conteúdo denso de texto
- Backgrounds muito complexos
- Áreas de alta densidade de informação
- Quando acessibilidade é crítica e contraste não pode ser garantido

---

## 2. Especificações Técnicas

### Propriedades CSS Base

```css
.glass {
  /* Fundo semi-transparente */
  background: rgba(255, 255, 255, 0.7);
  
  /* Efeito de desfoque */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); /* Safari */
  
  /* Borda sutil */
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  /* Sombra para elevação */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}
```

### Tokens de Glassmorphism

| Token | Valor Light | Valor Dark | Descrição |
|-------|-------------|------------|-----------|
| `--glass-bg` | `rgba(255,255,255,0.7)` | `rgba(15,23,42,0.7)` | Fundo do glass |
| `--glass-bg-strong` | `rgba(255,255,255,0.85)` | `rgba(15,23,42,0.85)` | Fundo mais opaco |
| `--glass-bg-subtle` | `rgba(255,255,255,0.4)` | `rgba(15,23,42,0.4)` | Fundo mais transparente |
| `--glass-border` | `rgba(255,255,255,0.3)` | `rgba(255,255,255,0.1)` | Borda do glass |
| `--glass-border-strong` | `rgba(255,255,255,0.5)` | `rgba(255,255,255,0.15)` | Borda mais visível |
| `--glass-blur-sm` | `8px` | `8px` | Desfoque pequeno |
| `--glass-blur-md` | `12px` | `12px` | Desfoque médio |
| `--glass-blur-lg` | `20px` | `20px` | Desfoque grande |
| `--glass-blur-xl` | `32px` | `32px` | Desfoque máximo |
| `--glass-shadow` | `0 8px 32px rgba(0,0,0,0.08)` | `0 8px 32px rgba(0,0,0,0.3)` | Sombra do glass |

### Fallback para Navegadores Sem Suporte

```css
@supports not (backdrop-filter: blur(12px)) {
  .glass {
    background: rgba(255, 255, 255, 0.95);
  }
  
  [data-theme="dark"] .glass {
    background: rgba(15, 23, 42, 0.95);
  }
}
```

---

## 3. Componentes Glass

### Glass Header (Sticky Navigation)

```
┌─────────────────────────────────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ ← Glass effect
│▓▓▓  [Logo]    Nav Items...              [Search] [Theme] [User]  ▓▓▓│    aplicado
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
└─────────────────────────────────────────────────────────────────────┘
         ↑
    Conteúdo da página passando por baixo
```

**Especificações:**

```css
.glass-header {
  /* Posicionamento */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  
  /* Glass effect */
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  
  /* Borda inferior sutil */
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  /* Altura e espaçamento */
  height: 72px;
  padding: 0 24px;
  
  /* Transição suave */
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

/* Estado scrolled */
.glass-header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* Dark mode */
[data-theme="dark"] .glass-header {
  background: rgba(2, 6, 23, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

[data-theme="dark"] .glass-header.scrolled {
  background: rgba(2, 6, 23, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
```

**Variante com Gradiente:**

```css
.glass-header-gradient {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.7) 100%
  );
  backdrop-filter: blur(20px);
}
```

### Glass Card

```
    ╭─────────────────────────────────────╮
   ╱                                     ╲
  │  ┌─────────────────────────────┐     │
  │  │  ✓ Medical Review           │     │
  │  └─────────────────────────────┘     │
  │                                      │
  │  Título do Artigo em Glass Card      │
  │                                      │
  │  Descrição do conteúdo com efeito    │
  │  de vidro aplicado no fundo...       │
  │                                      │
  │  [Avatar] Autor  •  5 min            │
   ╲                                     ╱
    ╰─────────────────────────────────────╯
```

**Especificações:**

```css
.glass-card {
  /* Fundo glass */
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  
  /* Borda */
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  
  /* Sombra */
  box-shadow: 
    0 4px 24px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  
  /* Padding */
  padding: 24px;
  
  /* Transição */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

/* Dark mode */
[data-theme="dark"] .glass-card {
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 
    0 4px 24px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}
```

**Variantes de Glass Card:**

| Variante | Background | Blur | Uso |
|----------|------------|------|-----|
| Default | 0.6 opacity | 16px | Cards padrão |
| Strong | 0.85 opacity | 12px | Cards com mais conteúdo |
| Subtle | 0.4 opacity | 20px | Cards decorativos |
| Colored | Primary/Secondary tint | 16px | Cards de destaque |

### Glass Modal

```
         ╭─────────────────────────────────────╮
        ╱    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    ╲
       │    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    │
       │    ▓▓▓                      ▓▓▓    │
       │    ▓▓▓   Modal Title        ▓▓▓    │
       │    ▓▓▓                      ▓▓▓    │
       │    ▓▓▓   Modal content...   ▓▓▓    │
       │    ▓▓▓                      ▓▓▓    │
       │    ▓▓▓   [Cancel] [Confirm] ▓▓▓    │
       │    ▓▓▓                      ▓▓▓    │
       │    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    │
        ╲    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ╱
         ╰─────────────────────────────────────╯
    
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  BACKDROP OVERLAY  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    (blur + tint)   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
```

**Especificações:**

```css
/* Backdrop */
.glass-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: var(--z-modal-backdrop);
}

/* Modal */
.glass-modal {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  padding: 32px;
  max-width: 560px;
  width: 90%;
}

/* Dark mode */
[data-theme="dark"] .glass-modal {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}
```

### Glass Dropdown / Popover

```
                    ╭────────────────────────────╮
                   ╱  🔍 Search Results          ╲
                  │  ─────────────────────────   │
    [Button] ───→ │  Result 1                    │
                  │  Result 2                    │
                  │  Result 3                    │
                   ╲  Result 4                   ╱
                    ╰────────────────────────────╯
```

**Especificações:**

```css
.glass-dropdown {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  padding: 8px;
  min-width: 220px;
}

.glass-dropdown-item {
  padding: 10px 16px;
  border-radius: 8px;
  transition: background 0.15s ease;
}

.glass-dropdown-item:hover {
  background: rgba(10, 123, 255, 0.08);
}
```

### Glass Tooltip

```
         ╭──────────────────╮
        ╱  Tooltip content   ╲
       │  with glass effect   │
        ╲____________________╱
                 ▲
                 │
           [Trigger]
```

**Especificações:**

```css
.glass-tooltip {
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 13px;
  padding: 8px 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
```

---

## 4. Gradient Glass Effects

### Glass com Gradiente de Cor

```css
.glass-gradient-primary {
  background: linear-gradient(
    135deg,
    rgba(10, 123, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(168, 85, 247, 0.1) 100%
  );
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.glass-gradient-warm {
  background: linear-gradient(
    135deg,
    rgba(245, 158, 11, 0.1) 0%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(34, 197, 94, 0.1) 100%
  );
  backdrop-filter: blur(16px);
}
```

### Glass com Mesh Gradient

```css
.glass-mesh {
  background: 
    radial-gradient(at 0% 0%, rgba(10, 123, 255, 0.15) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(34, 197, 94, 0.1) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(168, 85, 247, 0.1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(245, 158, 11, 0.1) 0px, transparent 50%),
    rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
}
```

---

## 5. Estados e Interações

### Hover States

```css
.glass-hover-lift {
  transition: 
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s ease;
}

.glass-hover-lift:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}
```

### Active States

```css
.glass-active {
  transition: transform 0.1s ease;
}

.glass-active:active {
  transform: scale(0.98);
}
```

### Focus States

```css
.glass-focus:focus-visible {
  outline: none;
  box-shadow: 
    0 0 0 2px rgba(10, 123, 255, 0.5),
    0 8px 32px rgba(0, 0, 0, 0.08);
}
```

---

## 6. Dark Mode Glass

### Adaptações para Dark Mode

```css
/* Base dark glass */
[data-theme="dark"] .glass {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

/* Dark glass mais opaco */
[data-theme="dark"] .glass-strong {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Dark glass com tint de cor */
[data-theme="dark"] .glass-primary-tint {
  background: linear-gradient(
    135deg,
    rgba(30, 58, 138, 0.3) 0%,
    rgba(15, 23, 42, 0.8) 100%
  );
  backdrop-filter: blur(16px);
}
```

### Comparação Visual

**Light Mode:**
```
┌─────────────────────────────────────┐
│  Fundo: rgba(255,255,255,0.7)       │
│  Borda: rgba(255,255,255,0.3)       │
│  Sombra: rgba(0,0,0,0.08)           │
│  Texto: Escuro (alto contraste)     │
└─────────────────────────────────────┘
```

**Dark Mode:**
```
┌─────────────────────────────────────┐
│  Fundo: rgba(15,23,42,0.7)          │
│  Borda: rgba(255,255,255,0.08)      │
│  Sombra: rgba(0,0,0,0.4)            │
│  Texto: Claro (alto contraste)      │
└─────────────────────────────────────┘
```

---

## 7. Performance e Otimização

### Best Practices

1. **Use `will-change` com moderação:**
```css
.glass-element {
  will-change: transform;
}

/* Remove após animação */
.glass-element.animation-complete {
  will-change: auto;
}
```

2. **Limite o número de elementos glass:**
   - Máximo recomendado: 5-10 elementos simultâneos
   - Evite glass em elementos pequenos (< 50px)

3. **Use blur apropriado:**
   - 8-12px para headers
   - 16-20px para cards
   - 24-32px para modais

4. **Teste em dispositivos de baixa potência:**
   - iPads antigos
   - Androids de entrada
   - Laptops com GPU integrada

### Redução de Movimento

```css
@media (prefers-reduced-motion: reduce) {
  .glass {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
```

### Detecção de Suporte

```javascript
// Detectar suporte a backdrop-filter
const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(10px)');

if (!supportsBackdropFilter) {
  document.body.classList.add('no-backdrop-filter');
}
```

---

## 8. Exemplos de Uso

### Hero Section com Glass Card

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │
│     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │ ← Background
│     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │    gradient/
│     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │    imagem
│                                                                 │
│         ╭─────────────────────────────────────╮                 │
│        ╱                                     ╲                  │
│       │   Science-Based Weight Loss          │                  │
│       │                                      │                  │
│       │   Discover evidence-based strategies │                  │
│       │   to optimize your metabolism and    │                  │
│       │   achieve sustainable results.       │                  │
│       │                                      │                  │
│       │   [Get Started] [Learn More]         │                  │
│        ╲                                     ╱                  │
│         ╰─────────────────────────────────────╯                 │
│                      ↑ Glass Card                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Pricing Cards com Glass

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     ╭─────────────────╮  ╭─────────────────╮  ╭─────────────────╮│
│    ╱   Basic          ╲╱   Pro (Popular)    ╲╱   Enterprise      ╲│
│   │                     │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│                   │
│   │   $9/mo            ▓▓▓   $29/mo          ▓▓▓   Custom         │
│   │                     │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│                   │
│   │   ✓ Feature        │▓▓▓ ✓ All Basic     ▓▓▓ ✓ All Pro        │
│   │   ✓ Feature        │▓▓▓ ✓ Premium       ▓▓▓ ✓ White-label    │
│   │   ✗ Feature        │▓▓▓ ✓ Priority      ▓▓▓ ✓ Dedicated      │
│   │                     │▓▓▓   Support      ▓▓▓   Support        │
│   │   [Get Started]    │▓▓▓ [Get Started]  ▓▓▓ [Contact Sales]  │
│    ╲___________________╱ ╰▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╯                   │
│                          ↑ Glass destacado                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 9. Checklist de Implementação

### Antes de Usar Glassmorphism

- [ ] Background tem conteúdo suficiente para o blur ser visível
- [ ] Contraste de texto é adequado (WCAG 4.5:1)
- [ ] Testado em dark e light mode
- [ ] Fallback implementado para browsers sem suporte
- [ ] Performance testada em dispositivos de baixa potência

### Tokens Implementados

- [ ] `--glass-bg` (light e dark)
- [ ] `--glass-bg-strong` (light e dark)
- [ ] `--glass-bg-subtle` (light e dark)
- [ ] `--glass-border` (light e dark)
- [ ] `--glass-blur-sm/md/lg/xl`
- [ ] `--glass-shadow` (light e dark)

### Componentes Glass Criados

- [ ] Glass Header
- [ ] Glass Card
- [ ] Glass Modal
- [ ] Glass Dropdown
- [ ] Glass Tooltip
