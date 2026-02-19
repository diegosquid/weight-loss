# Animation System

## Overview

Animation guidelines for Metabolic Science 2.0 — creating smooth, purposeful motion that enhances user experience without overwhelming.

---

## Animation Philosophy

- **Purposeful**: Every animation serves a function
- **Subtle**: Motion enhances, doesn't distract
- **Consistent**: Same timing across similar interactions
- **Performant**: 60fps using transform and opacity

---

## Timing

### Durations
| Type | Duration | Use Case |
|------|----------|----------|
| Micro | 100-150ms | Hover states, button presses |
| Standard | 200-300ms | Transitions, reveals |
| Emphasis | 400-500ms | Page transitions, modals |
| Complex | 600-800ms | Multi-step animations |

### Easing Functions
```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

---

## Micro-interactions

### Hover States
```css
/* Buttons */
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 200ms var(--ease-default);
}

/* Cards */
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 300ms var(--ease-spring);
}

/* Links */
.link:hover {
  color: var(--primary);
  transition: color 150ms var(--ease-default);
}
```

### Focus States
```css
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  transition: outline-offset 150ms var(--ease-default);
}
```

### Active States
```css
:active {
  transform: scale(0.98);
  transition: transform 100ms var(--ease-in);
}
```

---

## Page Transitions

### Fade In Up (Standard)
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
};
```

### Stagger Children
```typescript
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};
```

---

## Scroll Animations

### Fade In On Scroll
```typescript
const fadeInOnScroll = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};
```

### Scale On Scroll
```typescript
const scaleOnScroll = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }
};
```

---

## Loading States

### Skeleton Pulse
```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--bg-secondary) 25%,
    var(--bg-tertiary) 50%,
    var(--bg-secondary) 75%
  );
  background-size: 200% 100%;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { background-position: 200% 0; }
  50% { background-position: -200% 0; }
}
```

### Spinner
```css
.spinner {
  border: 3px solid var(--bg-tertiary);
  border-top-color: var(--primary);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## Complex Animations

### Hero Text Reveal
```typescript
const heroReveal = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1
    }
  }
};
```

### Card Hover Lift
```typescript
const cardHover = {
  rest: { y: 0, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" },
  hover: { 
    y: -8, 
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};
```

---

## Accessibility

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
}
```

### Focus Management
- Always maintain focus visibility
- Use `focus-visible` for keyboard-only
- Avoid auto-focus on page load

---

## Performance Guidelines

### DO
- Use `transform` and `opacity` only
- Add `will-change` before animation starts
- Use CSS animations for simple effects
- Throttle scroll events to 16ms (60fps)

### DON'T
- Animate `width`, `height`, `top`, `left`
- Use blur filters during scroll
- Animate multiple properties simultaneously
- Forget to clean up animation listeners

---

## Implementation

### Framer Motion (Recommended)
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  Content
</motion.div>
```

### CSS Animations (Simple)
```css
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

*Last updated: February 19, 2026*
