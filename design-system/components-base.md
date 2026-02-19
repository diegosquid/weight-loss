# Metabolic Science 2.0 - Componentes Base

Especificações visuais detalhadas para todos os componentes base do design system.

---

## 1. Button (Botão)

### Variantes

#### Primary Button

```
┌─────────────────────────────┐
│  [Icon]  Button Text        │
└─────────────────────────────┘
```

**Especificações:**
- **Background:** `--color-primary-500` (#0A7BFF)
- **Text Color:** `--color-text-inverse` (#FFFFFF)
- **Font:** `--font-body`, 500 (medium)
- **Border Radius:** `--radius-lg` (8px)
- **Padding:** `--space-button-y` (10px) `--space-button-x` (16px)
- **Height:** 40px (default), 36px (small), 48px (large)

**Estados:**

| Estado | Background | Transform | Shadow | Transition |
|--------|------------|-----------|--------|------------|
| Default | #0A7BFF | none | none | - |
| Hover | #0060D4 | translateY(-1px) | `--shadow-md` | 150ms ease-out |
| Active | #0049A3 | translateY(0) | `--shadow-inner` | 100ms ease-out |
| Focus | #0A7BFF | none | `--shadow-focus` | 200ms ease-out |
| Disabled | #CBD5E1 | none | none | - |
| Loading | #0A7BFF | none | none | Opacity 0.8 |

#### Secondary Button

**Especificações:**
- **Background:** transparent
- **Border:** 1px solid `--color-primary-500`
- **Text Color:** `--color-primary-500`
- **Font:** `--font-body`, 500 (medium)
- **Border Radius:** `--radius-lg` (8px)

**Estados:**

| Estado | Background | Border | Text Color |
|--------|------------|--------|------------|
| Default | transparent | #0A7BFF | #0A7BFF |
| Hover | rgba(10,123,255,0.08) | #0060D4 | #0060D4 |
| Active | rgba(10,123,255,0.12) | #0049A3 | #0049A3 |
| Disabled | transparent | #CBD5E1 | #94A3B8 |

#### Ghost Button

**Especificações:**
- **Background:** transparent
- **Border:** none
- **Text Color:** `--color-text-secondary`
- **Hover Background:** `--color-neutral-100`

#### Destructive Button

**Especificações:**
- **Background:** `--color-error` (#EF4444)
- **Text Color:** #FFFFFF
- **Hover Background:** #DC2626
- **Active Background:** #B91C1C

### Tamanhos

| Tamanho | Height | Padding X | Font Size | Icon Size |
|---------|--------|-----------|-----------|-----------|
| Small | 32px | 12px | 14px | 16px |
| Default | 40px | 16px | 14px | 18px |
| Large | 48px | 24px | 16px | 20px |

### Com Icon

```
┌──────────────────────────────────┐
│  [Icon 18px]  Texto do Botão     │
└──────────────────────────────────┘
         ↑
    gap: 8px (--space-2)
```

### Full Width

```
┌────────────────────────────────────────────────────────────┐
│              [Icon]  Button Text (Full Width)              │
└────────────────────────────────────────────────────────────┘
```

### Loading State

```
┌─────────────────────────────┐
│  ○○○  Loading...            │
└─────────────────────────────┘
```

- Spinner: 16px, cor do texto
- Animation: `--animate-spin` (1s linear infinite)
- Texto: "Loading..." ou ação específica

---

## 2. Card

### Default Card

```
┌─────────────────────────────────────┐
│                                     │
│  [Imagem/Thumbnail opcional]        │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  Category Badge             │    │
│  │                             │    │
│  │  Card Title (H4)            │    │
│  │                             │    │
│  │  Description text goes here │    │
│  │  and can span multiple      │    │
│  │  lines...                   │    │
│  │                             │    │
│  │  [Author]  •  5 min read    │    │
│  └─────────────────────────────┘    │
│                                     │
└─────────────────────────────────────┘
```

**Especificações:**
- **Background:** `--color-bg-primary` (#FFFFFF) / `--color-bg-secondary` (dark)
- **Border:** 1px solid `--border-default`
- **Border Radius:** `--radius-xl` (12px)
- **Padding:** `--space-card-y` (24px) `--space-card-x` (24px)
- **Shadow:** `--shadow-sm` (default), `--shadow-md` (hover)

**Estados:**

| Estado | Shadow | Transform | Border | Transition |
|--------|--------|-----------|--------|------------|
| Default | `--shadow-sm` | none | #E2E8F0 | - |
| Hover | `--shadow-md` | translateY(-2px) | #CBD5E1 | 200ms ease-out |
| Active | `--shadow-sm` | translateY(0) | #0A7BFF | 100ms ease-out |
| Focus | `--shadow-focus` | none | #0A7BFF | 200ms ease-out |

### Card com Imagem

```
┌─────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │  ← Aspect Ratio 16:9
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
├─────────────────────────────────────┤
│  [Badge]                            │
│                                     │
│  Título do Card                     │
│                                     │
│  Resumo do conteúdo...              │
│                                     │
│  [Avatar] Autor  •  5 min           │
└─────────────────────────────────────┘
```

- **Image Border Radius:** `--radius-xl` (12px) top only
- **Image Object Fit:** cover
- **Image Aspect Ratio:** 16:9 (default), 4:3 (variant)

### Card Horizontal

```
┌────────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  [Badge]                      │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │                               │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  Título do Artigo             │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │                               │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  Breve descrição...           │
│                   │                               │
│   120px × 120px   │  [Avatar] Autor • 5 min read  │
└────────────────────────────────────────────────────┘
```

### Feature Card (Destaque)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│                    [Badge Destaque]                        │
│                                                            │
│              Título Principal do Artigo                    │
│              em Duas Linhas se Necessário                  │
│                                                            │
│         Subtítulo com mais informações sobre               │
│         o conteúdo e o que o leitor pode esperar           │
│                                                            │
│              [Botão Ler Mais →]                            │
│                                                            │
│         [Avatar] Dr. Nome Sobrenome • Endocrinologista     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

- **Border Radius:** `--radius-3xl` (24px)
- **Padding:** 48px
- **Background:** Gradient or image with overlay

---

## 3. Input

### Text Input

```
┌─────────────────────────────────────┐
│  Label                              │
│  ┌───────────────────────────────┐  │
│  │  Placeholder text...          │  │
│  └───────────────────────────────┘  │
│  Helper text or error message       │
└─────────────────────────────────────┘
```

**Especificações:**
- **Background:** `--color-bg-tertiary` (#F1F5F9) / `#1E293B` (dark)
- **Border:** 1px solid transparent (default), `--border-default` (hover)
- **Border Radius:** `--radius-lg` (8px)
- **Padding:** `--space-input-y` (10px) `--space-input-x` (12px)
- **Height:** 44px
- **Font:** `--font-body`, 400, 16px

**Estados:**

| Estado | Background | Border | Shadow |
|--------|------------|--------|--------|
| Default | #F1F5F9 | transparent | none |
| Hover | #F1F5F9 | #CBD5E1 | none |
| Focus | #FFFFFF | #0A7BFF | `--shadow-focus` |
| Error | #FEF2F2 | #EF4444 | `0 0 0 3px rgba(239,68,68,0.15)` |
| Disabled | #F1F5F9 | transparent | none |
| Filled | #FFFFFF | #E2E8F0 | none |

### Search Input

```
┌──────────────────────────────────────────────┐
│ 🔍  Search articles, topics...          [⌘K] │
└──────────────────────────────────────────────┘
```

**Especificações:**
- **Icon:** Search (Lucide), 20px, `--color-text-tertiary`
- **Icon Position:** Left, 12px from edge
- **Padding Left:** 44px (space for icon)
- **Shortcut Badge:** ⌘K (or Ctrl+K), right side
- **Height:** 48px
- **Border Radius:** `--radius-full` (9999px) or `--radius-xl` (12px)

**Variante com Background:**
```
┌────────────────────────────────────────────────────────────┐
│ 🔍  What would you like to learn about?                    │
└────────────────────────────────────────────────────────────┘
```

- **Background:** `--color-bg-primary` with border
- **Width:** 100% (max 600px)

### Textarea

```
┌─────────────────────────────────────┐
│  Label                              │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │  Multi-line text input...     │  │
│  │                               │  │
│  │                               │  │
│  └───────────────────────────────┘  │
│  0/500 characters                   │
└─────────────────────────────────────┘
```

**Especificações:**
- **Min Height:** 120px
- **Max Height:** 400px
- **Resize:** vertical only
- **Padding:** 16px

### Input with Icon

```
┌─────────────────────────────────────┐
│  📧  │  email@example.com           │
└─────────────────────────────────────┘
```

- **Icon:** Left side, 20px
- **Icon Color:** `--color-text-tertiary`
- **Gap:** 12px

### Input with Button

```
┌─────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────┐  ┌──┐ │
│  │  Enter your email...                     │  │Go│ │
│  └──────────────────────────────────────────┘  └──┘ │
└─────────────────────────────────────────────────────┘
```

- **Button:** Attached to right side
- **Border Radius:** Left 8px, Right 0 (input); Left 0, Right 8px (button)

---

## 4. Badge

### Medical Review Badge

```
┌─────────────────────┐
│  ✓  Medical Review  │
└─────────────────────┘
```

**Especificações:**
- **Background:** `--color-secondary-50` (#F0FDF4) / `#064E3B` (dark)
- **Text Color:** `--color-secondary-700` (#15803D) / `#6EE7B7` (dark)
- **Icon:** CheckCircle (Lucide), 14px
- **Font:** `--font-body`, 500, 12px
- **Border Radius:** `--radius-full` (9999px)
- **Padding:** 4px 12px

### Category Badge

```
┌─────────────────┐
│  Weight Loss    │
└─────────────────┘
```

**Variantes de Categoria:**

| Categoria | Background | Text Color |
|-----------|------------|------------|
| Weight Loss | #F0FDF4 | #15803D |
| Nutrition | #FEF3C7 | #B45309 |
| Exercise | #DBEAFE | #1D4ED8 |
| Hormones | #F3E8FF | #7E22CE |
| Research | #E0E7FF | #4338CA |
| Mental Health | #FCE7F3 | #BE185D |

### New Badge

```
┌──────────┐
│  NEW     │
└──────────┘
```

**Especificações:**
- **Background:** `--color-primary-500`
- **Text Color:** #FFFFFF
- **Font:** 600 (semibold), 11px
- **Letter Spacing:** 0.05em
- **Padding:** 4px 10px

### Premium Badge

```
┌────────────────────┐
│  👑  Premium       │
└────────────────────┘
```

- **Background:** Gradient (primary to tertiary)
- **Text Color:** #FFFFFF
- **Icon:** Crown or Star

### Badge Sizes

| Tamanho | Padding | Font Size | Icon Size |
|---------|---------|-----------|-----------|
| Small | 2px 8px | 11px | 12px |
| Default | 4px 12px | 12px | 14px |
| Large | 6px 16px | 14px | 16px |

---

## 5. Avatar

### Author Avatar

```
    ╭──────────╮
   ╱   ┌──┐   ╲
  │   /    \   │
  │  │  😊  │  │
  │   \ __ /   │
   ╲          ╱
    ╰──────────╯
```

**Especificações:**
- **Border Radius:** `--radius-full` (9999px)
- **Object Fit:** cover
- **Border:** 2px solid `--color-bg-primary` (for stacked)

**Tamanhos:**

| Tamanho | Size | Uso |
|---------|------|-----|
| XS | 24px | Inline mentions |
| Small | 32px | Compact lists |
| Default | 40px | Cards, comments |
| Large | 56px | Author profiles |
| XL | 80px | Feature sections |
| 2XL | 120px | Profile pages |

### Avatar Group (Stacked)

```
    ╭────╮
   ╱ ┌──┐ ╲╭────╮
  │ /    \│┌──┐│╭────╮
  ││ +3 │ ││  │││┌──┐│
   \ __ / ││__││││  ││
    ╰────╯ ╰────╯││__││
                  ╰────╯
```

- **Overlap:** -8px margin-left
- **Z-index:** Incremental for proper stacking
- **Overflow Count:** "+3" badge on last avatar

### Avatar with Status

```
    ╭──────────╮
   ╱   ┌──┐   ╲
  │   /    \   │
  │  │  😊  │  │
  │   \ __ /   │
   ╲    🟢    ╱
    ╰──────────╯
```

**Status Indicators:**
- **Online:** `--color-success` (#22C55E)
- **Offline:** `--color-neutral-400`
- **Away:** `--color-warning` (#F59E0B)
- **Busy:** `--color-error` (#EF4444)

**Status Dot:**
- Size: 12px
- Position: Bottom-right, -2px offset
- Border: 2px solid background color

### Reviewer Avatar

```
    ╭──────────╮
   ╱   ┌──┐   ╲
  │   /    \   │
  │  │  👨‍⚕️  │  │
  │   \ __ /   │
   ╲          ╱
    ╰──────────╯
    Dr. Name
   Endocrinologist
```

- **Name:** `--text-caption`, 600
- **Title:** `--text-caption`, 400, `--color-text-tertiary`
- **Gap:** 8px between avatar and text

---

## 6. Icon System

### Lucide Icons

**Uso padrão para toda a interface.**

**Tamanhos:**

| Nome | Tamanho | Uso |
|------|---------|-----|
| xs | 12px | Inline, dense UI |
| sm | 16px | Buttons, inputs |
| default | 20px | Navigation, cards |
| lg | 24px | Feature icons |
| xl | 32px | Empty states |
| 2xl | 48px | Hero sections |

**Stroke Width:** 1.5px (default), 2px (large icons)

### Icon Colors

| Context | Color Token |
|---------|-------------|
| Default | `--color-text-secondary` |
| Primary | `--color-primary-500` |
| Success | `--color-secondary-500` |
| Warning | `--color-warning` |
| Error | `--color-error` |
| Muted | `--color-text-tertiary` |
| Inverse | `--color-text-inverse` |

### Icon Library Structure

```
├── Navigation
│   ├── Home
│   ├── Search
│   ├── Menu
│   ├── ChevronLeft/Right/Up/Down
│   ├── ArrowLeft/Right
│   └── X (Close)
├── Content
│   ├── FileText (Article)
│   ├── BookOpen
│   ├── Video
│   ├── Headphones (Audio)
│   └── Image
├── Actions
│   ├── Heart (Like)
│   ├── Bookmark
│   ├── Share2
│   ├── Download
│   ├── Copy
│   └── ExternalLink
├── Status
│   ├── Check/Circle
│   ├── X/Circle
│   ├── AlertCircle
│   ├── Info
│   └── Clock
├── Communication
│   ├── Mail
│   ├── MessageCircle
│   ├── Send
│   └── Bell
└── Medical
    ├── Activity
    ├── HeartPulse
    ├── Thermometer
    ├── Stethoscope
    ├── Brain
    └── Dna
```

### Lottie Animations

**Uso:** Animações complexas que requerem motion design

**Casos de uso:**
- Loading states
- Success confirmations
- Empty states
- Onboarding illustrations
- Micro-interactions especiais

**Especificações:**
- **Formato:** JSON (Lottie)
- **Renderer:** SVG ou Canvas
- **Loop:** Configurável por animação
- **Autoplay:** Sim, para loading/empty states

**Exemplos de Animações:**

| Animação | Uso | Duração |
|----------|-----|---------|
| search-loading.json | Search skeleton | 2s loop |
| success-check.json | Form submission | 2s once |
| empty-state.json | No results | 4s loop |
| newsletter-sent.json | Email signup | 3s once |
| heart-pulse.json | Health metrics | 2s loop |

**Implementação:**

```javascript
// React com lottie-react
import Lottie from 'lottie-react';
import searchAnimation from './animations/search-loading.json';

<Lottie 
  animationData={searchAnimation}
  loop={true}
  autoplay={true}
  style={{ width: 120, height: 120 }}
/>
```

**Fallback:**
- Sempre fornecer fallback estático (SVG ou PNG)
- Reduzir motion para `prefers-reduced-motion`

### Icon Buttons

```
┌──────┐
│  🔍  │
└──────┘
```

**Especificações:**
- **Size:** 40px × 40px
- **Border Radius:** `--radius-lg` (8px) or `--radius-full`
- **Background:** transparent (default), `--color-neutral-100` (hover)
- **Icon Size:** 20px
- **States:** Same as Ghost Button

---

## 7. Component Combinations

### Search Bar Complete

```
┌─────────────────────────────────────────────────────────────────┐
│ 🔍  Search articles, guides, and health topics...         [⌘K] │
└─────────────────────────────────────────────────────────────────┘
```

### Article Card

```
┌─────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
├─────────────────────────────────────┤
│ ┌───────────────────────────────┐   │
│ │ ✓ Medical Review              │   │
│ └───────────────────────────────┘   │
│                                     │
│ How to Boost Your Metabolism        │
│ Naturally: A Science-Based Guide    │
│                                     │
│ Learn the proven strategies that    │
│ can help increase your metabolic... │
│                                     │
│ ┌──┐ Dr. Sarah Chen  •  8 min read  │
└─────────────────────────────────────┘
```

### Newsletter Signup

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              Stay Updated with Latest Research              │
│                                                             │
│    Get weekly insights on metabolism, weight loss, and      │
│    hormonal health delivered to your inbox.                 │
│                                                             │
│    ┌────────────────────────────────────────────┐  ┌─────┐  │
│    │  Enter your email address...               │  │Join │  │
│    └────────────────────────────────────────────┘  └─────┘  │
│                                                             │
│    ✓ No spam, unsubscribe anytime                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Navigation Header

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Logo]    Articles  Guides  Research  Tools    [Search] [Theme] 🔔 │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 8. Responsive Behavior

### Button Responsive

| Breakpoint | Behavior |
|------------|----------|
| Mobile | Full width on small screens |
| Tablet | Auto width, flex wrap |
| Desktop | Auto width, inline |

### Card Responsive

| Breakpoint | Grid Columns |
|------------|--------------|
| < 640px | 1 column |
| 640-1024px | 2 columns |
| > 1024px | 3-4 columns |

### Input Responsive

| Breakpoint | Width |
|------------|-------|
| Mobile | 100% |
| Tablet | 100% or fixed max |
| Desktop | Fixed max (400-600px) |
