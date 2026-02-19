# Componentes de Animação e Interatividade - Metabolic Science 2.0

Este diretório contém componentes de UI reutilizáveis com animações suaves usando Framer Motion.

## 📁 Estrutura

```
components/ui/
├── AnimatedCard.tsx      # Card com hover animations
├── FloatingCTA.tsx       # Botão flutuante de CTA
├── MedicalBadge.tsx      # Badge "Medically Reviewed"
├── DarkModeToggle.tsx    # Toggle sol/lua animado
├── ScrollProgress.tsx    # Barra de progresso de scroll
├── Skeleton.tsx          # Loading skeletons
└── Tooltip.tsx           # Tooltip com Radix UI

lib/
└── animations.ts         # Utilitários de animação
```

---

## 🎬 Animation Utilities (`lib/animations.ts`)

### Fade Variants

```tsx
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale } from "@/lib/animations";

// Uso com Framer Motion
<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
>
  Conteúdo
</motion.div>
```

### Stagger Containers

```tsx
import { staggerContainer, staggerItem } from "@/lib/animations";

<motion.div
  initial="hidden"
  animate="visible"
  variants={staggerContainer}
>
  {items.map(item => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Spring Configs

```tsx
import { springDefault, springBouncy, springGentle, springSnappy } from "@/lib/animations";

<motion.div
  transition={springBouncy}
  whileHover={{ scale: 1.05 }}
>
  Hover me!
</motion.div>
```

---

## 🎴 AnimatedCard

Card interativo com efeito de elevação e sombra no hover.

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `title` | `string` | obrigatório | Título do card |
| `description` | `string` | - | Descrição opcional |
| `children` | `ReactNode` | - | Ícone ou elemento visual |
| `gradientBorder` | `boolean` | `false` | Borda gradiente animada |
| `liftAmount` | `number` | `8` | Quantidade de elevação (px) |
| `shadowIntensity` | `"low" \| "medium" \| "high"` | `"medium"` | Intensidade da sombra |
| `onClick` | `() => void` | - | Handler de clique |
| `href` | `string` | - | URL para comportamento de link |

### Exemplos

```tsx
import { AnimatedCard, AnimatedCardCompact } from "@/components/ui/AnimatedCard";
import { Scale } from "lucide-react";

// Card básico
<AnimatedCard
  title="Weight Loss"
  description="Scientific approach to losing weight"
  onClick={() => router.push('/weight-loss')}
>
  <Scale className="w-6 h-6" />
</AnimatedCard>

// Com borda gradiente
<AnimatedCard
  title="Premium Plan"
  description="Advanced features"
  gradientBorder
  gradientColors="from-emerald-400 via-teal-500 to-cyan-500"
>
  <Crown className="w-6 h-6" />
</AnimatedCard>

// Versão compacta
<AnimatedCardCompact
  title="Quick Tip"
  description="Drink water before meals"
  iconColor="text-blue-500"
>
  <Droplets className="w-5 h-5" />
</AnimatedCardCompact>
```

---

## 🎯 FloatingCTA

Botão de call-to-action fixo que aparece após scroll.

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | `ReactNode` | obrigatório | Texto do botão |
| `onClick` | `() => void` | obrigatório | Handler de clique |
| `showAfterScroll` | `number` | `200` | Scroll threshold (px) |
| `position` | `"bottom-right" \| "bottom-left" \| "bottom-center"` | `"bottom-right"` | Posição |
| `variant` | `"primary" \| "secondary" \| "outline"` | `"primary"` | Estilo visual |
| `icon` | `ReactNode` | - | Ícone opcional |
| `iconPosition` | `"left" \| "right"` | `"right"` | Posição do ícone |
| `pulseIntensity` | `"none" \| "subtle" \| "strong"` | `"subtle"` | Intensidade do pulso |
| `hideOnRoutes` | `string[]` | `[]` | Rotas onde esconder |

### Exemplos

```tsx
import { FloatingCTA, FloatingButton } from "@/components/ui/FloatingCTA";
import { ArrowRight } from "lucide-react";

// CTA com scroll trigger
<FloatingCTA
  onClick={() => router.push('/signup')}
  showAfterScroll={300}
  icon={<ArrowRight className="w-5 h-5" />}
>
  Start Your Journey
</FloatingCTA>

// Sempre visível
<FloatingButton
  onClick={handleClick}
  position="bottom-center"
  variant="secondary"
>
  Get Started
</FloatingButton>
```

---

## 🏥 MedicalBadge

Badge de credibilidade médica com foto do revisor e tooltip.

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `reviewerName` | `string` | obrigatório | Nome do revisor |
| `reviewerTitle` | `string` | obrigatório | Título/especialidade |
| `reviewerImage` | `string` | - | URL da foto |
| `reviewDate` | `string` | - | Data da revisão (ISO) |
| `badgeText` | `string` | `"Medically Reviewed"` | Texto do badge |
| `verificationText` | `string` | - | Texto do tooltip |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Tamanho |

### Exemplos

```tsx
import { MedicalBadge, MedicalBadgeCompact, MedicalBadgeSimple } from "@/components/ui/MedicalBadge";

// Badge completo
<MedicalBadge
  reviewerName="Dr. Sarah Johnson"
  reviewerTitle="Endocrinologist"
  reviewerImage="/images/dr-johnson.jpg"
  reviewDate="2024-01-15"
/>

// Versão compacta
<MedicalBadgeCompact
  reviewerName="Dr. Michael Chen"
  reviewerTitle="Nutritionist"
/>

// Apenas o badge
<MedicalBadgeSimple badgeText="Clinically Verified" />
```

---

## 🌓 DarkModeToggle

Toggle animado entre modo claro/escuro.

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `isDark` | `boolean` | - | Estado controlado |
| `onToggle` | `(isDark: boolean) => void` | - | Callback de mudança |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Tamanho |
| `ariaLabel` | `string` | `"Toggle dark mode"` | Label de acessibilidade |
| `showLabel` | `boolean` | `false` | Mostrar texto |

### Exemplos

```tsx
import { DarkModeToggle, DarkModeButton } from "@/components/ui/DarkModeToggle";

// Toggle completo
<DarkModeToggle />

// Com label
<DarkModeToggle showLabel labelPosition="right" />

// Versão botão simples (apenas ícone)
<DarkModeButton size="lg" />

// Controlado
const [isDark, setIsDark] = useState(false);
<DarkModeToggle isDark={isDark} onToggle={setIsDark} />
```

---

## 📊 ScrollProgress

Barra de progresso de leitura no topo da página.

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `color` | `string` | `"bg-emerald-500"` | Classe Tailwind da cor |
| `gradient` | `string` | - | Gradiente (ex: `"from-emerald-500 to-cyan-500"`) |
| `height` | `number` | `3` | Altura em pixels |
| `showAfter` | `number` | `0` | Mostrar após scroll (px) |
| `position` | `"top" \| "bottom"` | `"top"` | Posição |
| `springStiffness` | `number` | `300` | Rigidez da animação |

### Exemplos

```tsx
import { ScrollProgress, ScrollProgressCircle, ScrollProgressDots } from "@/components/ui/ScrollProgress";

// Barra padrão
<ScrollProgress />

// Com gradiente
<ScrollProgress gradient="from-emerald-500 via-teal-500 to-cyan-500" height={4} />

// Circular
<ScrollProgressCircle size={60} showPercentage />

// Dots vertical
<ScrollProgressDots totalSections={5} />
```

---

## 💀 Skeleton

Loading skeletons para diferentes padrões de UI.

### Componentes

| Componente | Descrição |
|------------|-----------|
| `Skeleton` | Base genérico |
| `SkeletonCard` | Card com imagem e texto |
| `SkeletonText` | Múltiplas linhas de texto |
| `SkeletonAvatar` | Avatar circular |
| `SkeletonAvatarText` | Avatar + texto |
| `SkeletonButton` | Botão |
| `SkeletonStat` | Estatística/métrica |
| `SkeletonListItem` | Item de lista |
| `SkeletonTableRow` | Linha de tabela |
| `SkeletonPage` | Layout de página completo |

### Exemplos

```tsx
import { 
  Skeleton, 
  SkeletonCard, 
  SkeletonText, 
  SkeletonAvatar,
  SkeletonWrapper 
} from "@/components/ui/Skeleton";

// Card skeleton
<SkeletonCard hasImage lines={3} />

// Texto skeleton
<SkeletonText lines={4} lastLineWidth="60%" />

// Avatar
<SkeletonAvatar size="lg" />

// Wrapper condicional
<SkeletonWrapper
  isLoading={isLoading}
  skeleton={<SkeletonCard />}
>
  <ActualContent />
</SkeletonWrapper>
```

---

## 💬 Tooltip

Tooltip acessível com posicionamento automático.

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `content` | `ReactNode` | obrigatório | Conteúdo do tooltip |
| `children` | `ReactNode` | obrigatório | Elemento trigger |
| `delayDuration` | `number` | `200` | Delay (ms) |
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"top"` | Posição |
| `align` | `"start" \| "center" \| "end"` | `"center"` | Alinhamento |
| `disabled` | `boolean` | `false` | Desabilitar |
| `animation` | `"fade" \| "scale" \| "none"` | `"scale"` | Animação |
| `inverted` | `boolean` | `false` | Cores invertidas |

### Exemplos

```tsx
import { 
  Tooltip, 
  TooltipSimple, 
  TooltipWithTitle,
  IconButtonWithTooltip,
  TooltipGroup,
  TooltipItem 
} from "@/components/ui/Tooltip";

// Básico
<Tooltip content="Informação útil">
  <button>Hover me</button>
</Tooltip>

// Com delay
<Tooltip content="Tooltip demorado" delayDuration={500}>
  <button>Hover me</button>
</Tooltip>

// Simples (apenas texto)
<TooltipSimple text="Salvar alterações">
  <SaveButton />
</TooltipSimple>

// Com título
<TooltipWithTitle
  title="Segurança"
  description="Seus dados estão protegidos"
>
  <ShieldIcon />
</TooltipWithTitle>

// Icon button com tooltip
<IconButtonWithTooltip
  icon={<Trash className="w-5 h-5" />}
  label="Excluir item"
  onClick={handleDelete}
/>

// Grupo de tooltips (compartilham provider)
<TooltipGroup>
  <TooltipItem content="Item 1">
    <Button1 />
  </TooltipItem>
  <TooltipItem content="Item 2">
    <Button2 />
  </TooltipItem>
</TooltipGroup>
```

---

## 🎨 Temas e Cores

Todos os componentes suportam modo claro/escuro via classes Tailwind:

```
bg-white dark:bg-slate-900
text-slate-900 dark:text-slate-100
border-slate-200 dark:border-slate-800
```

A cor primária do tema é **emerald** (verde), usada em:
- Botões primários
- Badges médicos
- Indicadores de progresso
- Estados ativos

---

## 📦 Dependências

```bash
npm install framer-motion @radix-ui/react-tooltip lucide-react
```

---

## 🔧 Configuração Tailwind

Adicione ao `tailwind.config.ts`:

```ts
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
}
```
