# Metabolic Science 2.0 - Dark Mode Implementation

Guia completo de implementação do modo escuro com estratégias técnicas, componentes e melhores práticas de acessibilidade.

---

## 1. Estratégia de Implementação

### Abordagem: CSS Variables + Data Attribute

A estratégia recomendada utiliza **CSS Custom Properties (variables)** combinadas com um **data attribute** no elemento raiz para controle do tema.

```html
<html data-theme="dark">
  <!-- ou -->
<html data-theme="light">
```

### Por que esta abordagem?

| Abordagem | Prós | Contras |
|-----------|------|---------|
| CSS Variables + data-theme | Performance, flexibilidade, SSR-friendly | Requer organização |
| Tailwind darkMode: 'class' | Simples, integrado | Limitado a Tailwind |
| CSS-in-JS | Dinâmico | Overhead de runtime |
| media query only | Automático | Sem controle de usuário |

### Estrutura de Arquivos

```
styles/
├── tokens/
│   ├── colors-light.css    # Variáveis modo claro
│   ├── colors-dark.css     # Variáveis modo escuro
│   └── index.css           # Exporta todos os tokens
├── components/
│   ├── button.css
│   ├── card.css
│   └── input.css
├── dark-mode.css           # Lógica de tema
└── globals.css             # Estilos globais
```

---

## 2. CSS Variables Structure

### Variáveis Semânticas

Em vez de definir cores diretamente, use tokens semânticos:

```css
/* ❌ NÃO: Cores diretas */
.button {
  background: #0A7BFF;
  color: #FFFFFF;
}

/* ✅ SIM: Tokens semânticos */
.button {
  background: var(--color-primary);
  color: var(--color-on-primary);
}
```

### Estrutura de Tokens

```css
/* tokens/colors-light.css */
:root,
[data-theme="light"] {
  /* Backgrounds */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F8FAFC;
  --color-bg-tertiary: #F1F5F9;
  --color-bg-elevated: #FFFFFF;
  
  /* Surfaces */
  --color-surface: #FFFFFF;
  --color-surface-hover: #F8FAFC;
  --color-surface-active: #F1F5F9;
  
  /* Text */
  --color-text-primary: #0F172A;
  --color-text-secondary: #475569;
  --color-text-tertiary: #64748B;
  --color-text-inverse: #FFFFFF;
  
  /* Primary */
  --color-primary: #0A7BFF;
  --color-primary-hover: #0060D4;
  --color-primary-active: #0049A3;
  --color-on-primary: #FFFFFF;
  
  /* Secondary */
  --color-secondary: #22C55E;
  --color-secondary-hover: #16A34A;
  --color-on-secondary: #FFFFFF;
  
  /* Borders */
  --color-border: #E2E8F0;
  --color-border-hover: #CBD5E1;
  --color-border-focus: #0A7BFF;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

```css
/* tokens/colors-dark.css */
[data-theme="dark"] {
  /* Backgrounds - mais escuros */
  --color-bg-primary: #020617;
  --color-bg-secondary: #0F172A;
  --color-bg-tertiary: #1E293B;
  --color-bg-elevated: #1E293B;
  
  /* Surfaces */
  --color-surface: #1E293B;
  --color-surface-hover: #334155;
  --color-surface-active: #475569;
  
  /* Text - mais claros */
  --color-text-primary: #F1F5F9;
  --color-text-secondary: #94A3B8;
  --color-text-tertiary: #64748B;
  --color-text-inverse: #0F172A;
  
  /* Primary - ajustados para dark */
  --color-primary: #3B82F6;
  --color-primary-hover: #60A5FA;
  --color-primary-active: #93C5FD;
  --color-on-primary: #FFFFFF;
  
  /* Secondary */
  --color-secondary: #34D399;
  --color-secondary-hover: #6EE7B7;
  --color-on-secondary: #0F172A;
  
  /* Borders - mais sutis */
  --color-border: #334155;
  --color-border-hover: #475569;
  --color-border-focus: #3B82F6;
  
  /* Shadows - mais fortes */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
}
```

### Tokens de Cor Completos

| Categoria | Light Mode | Dark Mode | Notas |
|-----------|------------|-----------|-------|
| **Background** | #FFFFFF | #020617 | Fundo principal |
| **Surface** | #F8FAFC | #0F172A | Cards, seções |
| **Surface Elevated** | #FFFFFF | #1E293B | Modais, dropdowns |
| **Text Primary** | #0F172A | #F1F5F9 | Títulos, body |
| **Text Secondary** | #475569 | #94A3B8 | Descrições |
| **Text Tertiary** | #64748B | #64748B | Meta, captions |
| **Primary** | #0A7BFF | #3B82F6 | Mais brilhante no dark |
| **Primary Hover** | #0060D4 | #60A5FA | |
| **Border** | #E2E8F0 | #334155 | Mais escuro no dark |
| **Border Hover** | #CBD5E1 | #475569 | |

---

## 3. Implementação Técnica

### React Context + Hook

```typescript
// contexts/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Carregar tema salvo
    const saved = localStorage.getItem('theme') as Theme;
    if (saved) setThemeState(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setResolvedTheme(systemDark ? 'dark' : 'light');
      root.setAttribute('data-theme', systemDark ? 'dark' : 'light');
    } else {
      setResolvedTheme(theme);
      root.setAttribute('data-theme', theme);
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Escutar mudanças do sistema
  useEffect(() => {
    if (theme !== 'system') return;
    
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      setResolvedTheme(e.matches ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    };
    
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [theme]);

  const setTheme = (newTheme: Theme) => setThemeState(newTheme);
  
  const toggleTheme = () => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
```

### Next.js com next-themes (Recomendado)

```bash
npm install next-themes
```

```typescript
// app/providers.tsx
'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
}
```

```typescript
// components/ThemeToggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 bg-surface rounded-lg p-1">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md transition-colors ${
          resolvedTheme === 'light' ? 'bg-primary text-on-primary' : 'hover:bg-surface-hover'
        }`}
        aria-label="Light mode"
      >
        <Sun size={18} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md transition-colors ${
          resolvedTheme === 'dark' ? 'bg-primary text-on-primary' : 'hover:bg-surface-hover'
        }`}
        aria-label="Dark mode"
      >
        <Moon size={18} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md transition-colors ${
          theme === 'system' ? 'bg-primary text-on-primary' : 'hover:bg-surface-hover'
        }`}
        aria-label="System preference"
      >
        <Monitor size={18} />
      </button>
    </div>
  );
}
```

### Tailwind Configuration

```javascript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic colors that map to CSS variables
        background: 'var(--color-bg-primary)',
        foreground: 'var(--color-text-primary)',
        surface: {
          DEFAULT: 'var(--color-surface)',
          hover: 'var(--color-surface-hover)',
          active: 'var(--color-surface-active)',
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          active: 'var(--color-primary-active)',
          foreground: 'var(--color-on-primary)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
          foreground: 'var(--color-on-secondary)',
        },
        muted: {
          DEFAULT: 'var(--color-bg-tertiary)',
          foreground: 'var(--color-text-tertiary)',
        },
        border: 'var(--color-border)',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
        elevated: 'var(--color-bg-elevated)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        inverse: 'var(--color-text-inverse)',
      },
      borderColor: {
        DEFAULT: 'var(--color-border)',
        hover: 'var(--color-border-hover)',
        focus: 'var(--color-border-focus)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 4. Toggle Component

### Design do Toggle

```
┌─────────────────────────────────┐
│  🌙  Dark    ○───────●    Light ☀️  │
└─────────────────────────────────┘
      ↑                    ↑
   Inativo              Ativo
```

### Implementação do Toggle

```typescript
// components/DarkModeToggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evitar hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-14 h-8" />;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      style={{
        backgroundColor: isDark ? '#3B82F6' : '#CBD5E1',
      }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      <span className="sr-only">
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
      
      {/* Track icons */}
      <span className="absolute left-2 text-white">
        <Moon size={14} />
      </span>
      <span className="absolute right-2 text-slate-600">
        <Sun size={14} />
      </span>
      
      {/* Thumb */}
      <span
        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform"
        style={{
          transform: isDark ? 'translateX(26px)' : 'translateX(4px)',
        }}
      >
        {isDark ? (
          <Moon size={14} className="text-slate-900" />
        ) : (
          <Sun size={14} className="text-amber-500" />
        )}
      </span>
    </button>
  );
}
```

### Variante Segmentada

```
┌─────────────────────────────────┐
│  [🌙]  [💻]  [☀️]              │
│   ↑     ↑     ↑                 │
│ Dark  System  Light             │
└─────────────────────────────────┘
```

```typescript
export function ThemeSegmentedControl() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const options = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'system', icon: Monitor, label: 'System' },
    { value: 'dark', icon: Moon, label: 'Dark' },
  ] as const;

  return (
    <div 
      className="inline-flex rounded-lg p-1 gap-1"
      style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
      role="radiogroup"
      aria-label="Theme selection"
    >
      {options.map(({ value, icon: Icon, label }) => {
        const isActive = theme === value;
        return (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              isActive 
                ? 'bg-surface shadow-sm' 
                : 'hover:bg-surface-hover'
            }`}
            style={{
              color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
            }}
            role="radio"
            aria-checked={isActive}
          >
            <Icon size={16} />
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
```

---

## 5. Transições Suaves

### Transição Global de Tema

```css
/* globals.css */

/* Aplicar transição em todas as propriedades de cor */
*,
*::before,
*::after {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Remover transição de elementos específicos */
.no-theme-transition,
.no-theme-transition *,
.no-theme-transition *::before,
.no-theme-transition *::after {
  transition: none !important;
}
```

### Transição Controlada (Next.js)

```typescript
// hooks/useThemeTransition.ts
import { useEffect, useState } from 'react';

export function useThemeTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const withTransition = (callback: () => void) => {
    setIsTransitioning(true);
    
    // Aplicar classe de transição
    document.documentElement.classList.add('theme-transitioning');
    
    callback();
    
    // Remover após a transição
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
      setIsTransitioning(false);
    }, 300);
  };

  return { isTransitioning, withTransition };
}
```

```css
/* Transição suave para o tema */
html.theme-transitioning,
html.theme-transitioning *,
html.theme-transitioning *::before,
html.theme-transitioning *::after {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow;
  transition-duration: 300ms !important;
  transition-timing-function: ease-in-out;
}
```

### Animação de Crossfade (Opcional)

```typescript
// components/ThemeCrossfade.tsx
'use client';

import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeCrossfade({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={resolvedTheme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

---

## 6. Best Practices para Acessibilidade

### Contraste de Cores

```css
/* Verificar contraste mínimo WCAG AA */
/* Normal text: 4.5:1 */
/* Large text: 3:1 */

/* Light mode - aprovado */
--color-text-primary: #0F172A;    /* on #FFFFFF = 15.8:1 ✓ */
--color-text-secondary: #475569;  /* on #FFFFFF = 7.5:1 ✓ */

/* Dark mode - aprovado */
--color-text-primary: #F1F5F9;    /* on #020617 = 18.9:1 ✓ */
--color-text-secondary: #94A3B8;  /* on #020617 = 8.9:1 ✓ */
```

### Focus Indicators Visíveis

```css
/* Focus ring consistente em ambos os modos */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Inputs */
input:focus,
textarea:focus,
select:focus {
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 3px rgba(10, 123, 255, 0.15);
}

[data-theme="dark"] input:focus,
[data-theme="dark"] textarea:focus,
[data-theme="dark"] select:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  /* Remover transições de tema para usuários com preferência de redução */
  html,
  html *,
  html *::before,
  html *::after {
    transition: none !important;
  }
}
```

### ARIA Labels e Roles

```typescript
// Sempre fornecer labels acessíveis
<button
  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
  aria-pressed={isDark}
  onClick={toggleTheme}
>
  {isDark ? <Moon /> : <Sun />}
</button>

// Para controles segmentados
<div role="radiogroup" aria-label="Theme selection">
  <button role="radio" aria-checked={theme === 'light'}>Light</button>
  <button role="radio" aria-checked={theme === 'dark'}>Dark</button>
</div>
```

### High Contrast Mode

```css
/* Suporte a Windows High Contrast Mode */
@media (prefers-contrast: high) {
  :root {
    --color-border: CanvasText;
    --color-text-primary: CanvasText;
    --color-bg-primary: Canvas;
  }
  
  /* Garantir bordas visíveis */
  .card,
  .button,
  .input {
    border: 2px solid currentColor;
  }
}
```

---

## 7. Componentes Adaptados

### Button

```css
.button {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  border: 1px solid transparent;
}

.button:hover {
  background-color: var(--color-primary-hover);
}

.button-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-border);
}

.button-secondary:hover {
  background-color: var(--color-surface-hover);
}
```

### Card

```css
.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}

.card:hover {
  border-color: var(--color-border-hover);
  box-shadow: var(--shadow-md);
}
```

### Input

```css
.input {
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  border: 1px solid transparent;
}

.input:hover {
  border-color: var(--color-border);
}

.input:focus {
  background-color: var(--color-bg-primary);
  border-color: var(--color-border-focus);
}

.input::placeholder {
  color: var(--color-text-tertiary);
}
```

---

## 8. Imagens e Media

### Dark Mode para Imagens

```css
/* Ajustar brilho de imagens no dark mode */
[data-theme="dark"] img {
  opacity: 0.9;
}

/* Ou usar filter para reduzir brilho */
[data-theme="dark"] .content-image {
  filter: brightness(0.95);
}
```

### Imagens com Versões Dark

```typescript
// components/ThemeImage.tsx
import { useTheme } from 'next-themes';

interface ThemeImageProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
}

export function ThemeImage({ lightSrc, darkSrc, alt }: ThemeImageProps) {
  const { resolvedTheme } = useTheme();
  
  return (
    <img
      src={resolvedTheme === 'dark' ? darkSrc : lightSrc}
      alt={alt}
      className="transition-opacity duration-300"
    />
  );
}
```

### SVG Icons

```tsx
// Icons que usam currentColor
export function Icon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
    </svg>
  );
}

// Uso: <Icon className="text-primary" />
```

---

## 9. Testes e Validação

### Checklist de Implementação

- [ ] CSS variables definidas para light e dark
- [ ] Data attribute `data-theme` aplicado no HTML
- [ ] Theme toggle funcional
- [ ] Preferência do sistema respeitada
- [ ] Tema salvo em localStorage
- [ ] Transições suaves entre modos
- [ ] Contraste WCAG AA em ambos os modos
- [ ] Focus indicators visíveis
- [ ] `prefers-reduced-motion` respeitado
- [ ] Testado em diferentes browsers
- [ ] Sem flash de tema incorreto no carregamento

### Ferramentas de Teste

```bash
# Instalar axe-core para testes de acessibilidade
npm install @axe-core/react

# Lighthouse CI para verificar contraste
npm install @lhci/cli
```

### Prevenção de Flash

```html
<!-- No <head> do HTML -->
<script>
  // Executar imediatamente para evitar flash
  (function() {
    const theme = localStorage.getItem('theme') || 'system';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolvedTheme = theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme;
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  })();
</script>
```

---

## 10. Exemplos Completos

### Layout Page com Dark Mode

```typescript
// app/layout.tsx
import './globals.css';
import { Providers } from './providers';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'system';
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const resolvedTheme = theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme;
                document.documentElement.setAttribute('data-theme', resolvedTheme);
              })();
            `,
          }}
        />
      </head>
      <body className="bg-primary text-primary antialiased">
        <Providers>
          <header className="sticky top-0 z-50 glass-header">
            <nav className="flex items-center justify-between px-6 py-4">
              <div className="font-heading text-xl font-bold">Metabolic Science</div>
              <ThemeToggle />
            </nav>
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
```

### CSS Global Completo

```css
/* globals.css */

/* ========================================
   TOKENS - LIGHT MODE (default)
   ======================================== */
:root {
  /* Backgrounds */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F8FAFC;
  --color-bg-tertiary: #F1F5F9;
  --color-bg-elevated: #FFFFFF;
  
  /* Surfaces */
  --color-surface: #FFFFFF;
  --color-surface-hover: #F8FAFC;
  --color-surface-active: #F1F5F9;
  
  /* Text */
  --color-text-primary: #0F172A;
  --color-text-secondary: #475569;
  --color-text-tertiary: #64748B;
  --color-text-inverse: #FFFFFF;
  
  /* Primary */
  --color-primary: #0A7BFF;
  --color-primary-hover: #0060D4;
  --color-primary-active: #0049A3;
  --color-on-primary: #FFFFFF;
  
  /* Secondary */
  --color-secondary: #22C55E;
  --color-secondary-hover: #16A34A;
  --color-on-secondary: #FFFFFF;
  
  /* Borders */
  --color-border: #E2E8F0;
  --color-border-hover: #CBD5E1;
  --color-border-focus: #0A7BFF;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* ========================================
   TOKENS - DARK MODE
   ======================================== */
[data-theme="dark"] {
  /* Backgrounds */
  --color-bg-primary: #020617;
  --color-bg-secondary: #0F172A;
  --color-bg-tertiary: #1E293B;
  --color-bg-elevated: #1E293B;
  
  /* Surfaces */
  --color-surface: #1E293B;
  --color-surface-hover: #334155;
  --color-surface-active: #475569;
  
  /* Text */
  --color-text-primary: #F1F5F9;
  --color-text-secondary: #94A3B8;
  --color-text-tertiary: #64748B;
  --color-text-inverse: #0F172A;
  
  /* Primary */
  --color-primary: #3B82F6;
  --color-primary-hover: #60A5FA;
  --color-primary-active: #93C5FD;
  --color-on-primary: #FFFFFF;
  
  /* Secondary */
  --color-secondary: #34D399;
  --color-secondary-hover: #6EE7B7;
  --color-on-secondary: #0F172A;
  
  /* Borders */
  --color-border: #334155;
  --color-border-hover: #475569;
  --color-border-focus: #3B82F6;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
}

/* ========================================
   BASE STYLES
   ======================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  line-height: 1.6;
}

/* Transições de tema */
*,
*::before,
*::after {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus visible */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Selection */
::selection {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}
```
