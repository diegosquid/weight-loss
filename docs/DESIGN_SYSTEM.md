# Design System - Metabolic Health Authority

## Brand Identity

### Mission
Trusted medical resource for evidence-based weight loss and metabolic health information.

### Tone
- Professional yet accessible
- Empathetic and supportive
- Scientifically accurate
- Non-judgmental

---

## Color Palette

### Primary Colors
```
Primary Blue:    #0066CC  (Trust, Medical)
Primary Dark:    #004C99  (Headers, Hover)
Primary Light:   #E6F2FF  (Backgrounds)
```

### Secondary Colors
```
Teal:            #008080  (Success, CTAs)
Teal Dark:       #006666  (Hover states)
Teal Light:      #E6F2F2  (Light backgrounds)
```

### Neutral Colors
```
Dark:            #1A1A2E  (Text primary)
Gray 700:        #4A4A68  (Text secondary)
Gray 500:        #8A8AA3  (Borders, muted)
Gray 300:        #D1D1E0  (Dividers)
Gray 100:        #F5F5FA  (Backgrounds)
White:           #FFFFFF  (Cards, surfaces)
```

### Semantic Colors
```
Success:         #059669  (Positive outcomes)
Warning:         #D97706  (Cautions)
Error:           #DC2626  (Contraindications)
Info:            #0066CC  (Information)
```

### Accent Colors
```
Coral:           #FF6B6B  (Highlights, alerts)
Lavender:        #9B59B6  (Premium content)
```

---

## Typography

### Font Families
```
Headings:        Inter, system-ui, sans-serif
Body:            Inter, system-ui, sans-serif
Monospace:       JetBrains Mono, monospace
```

### Type Scale
```
H1: 48px / 3rem      font-weight: 700  line-height: 1.1
H2: 36px / 2.25rem   font-weight: 700  line-height: 1.2
H3: 28px / 1.75rem   font-weight: 600  line-height: 1.3
H4: 24px / 1.5rem    font-weight: 600  line-height: 1.4
H5: 20px / 1.25rem   font-weight: 600  line-height: 1.4
H6: 18px / 1.125rem  font-weight: 600  line-height: 1.4

Body Large:  18px / 1.125rem  line-height: 1.6
Body:        16px / 1rem      line-height: 1.6
Body Small:  14px / 0.875rem  line-height: 1.5
Caption:     12px / 0.75rem   line-height: 1.5
```

---

## Spacing System

### Base Unit: 4px
```
xs:   4px   (0.25rem)
sm:   8px   (0.5rem)
md:   16px  (1rem)
lg:   24px  (1.5rem)
xl:   32px  (2rem)
2xl:  48px  (3rem)
3xl:  64px  (4rem)
4xl:  96px  (6rem)
```

### Section Spacing
```
Section padding: 80px vertical (5rem)
Container max-width: 1200px
Content max-width: 720px (reading)
```

---

## Components

### Buttons

**Primary Button**
- Background: Primary Blue (#0066CC)
- Text: White
- Padding: 12px 24px
- Border-radius: 8px
- Font-weight: 600
- Hover: Primary Dark (#004C99)

**Secondary Button**
- Background: Transparent
- Border: 2px solid Primary Blue
- Text: Primary Blue
- Hover: Primary Light background

**Ghost Button**
- Background: Transparent
- Text: Primary Blue
- Hover: underline

### Cards

**Article Card**
- Background: White
- Border-radius: 12px
- Shadow: 0 2px 8px rgba(0,0,0,0.08)
- Padding: 24px
- Hover: Shadow increases

**Info Card**
- Background: Primary Light (#E6F2FF)
- Border-left: 4px solid Primary Blue
- Padding: 16px 20px
- Border-radius: 0 8px 8px 0

**Warning Card**
- Background: #FEF3C7
- Border-left: 4px solid Warning
- Icon: Warning triangle

### Forms

**Input Fields**
- Border: 1px solid Gray 300
- Border-radius: 8px
- Padding: 12px 16px
- Focus: Primary Blue border + shadow

**Labels**
- Font-size: 14px
- Font-weight: 500
- Color: Gray 700
- Margin-bottom: 4px

---

## Medical Badges

### Medical Review Badge
```
Background: Teal Light
Border: 1px solid Teal
Icon: Shield/Checkmark
Text: "Medically Reviewed"
Subtext: "By [Name], MD"
```

### Evidence Level Badge
```
Level A: Strong evidence (RCTs)
Level B: Moderate evidence
Level C: Expert opinion
```

---

## Layout Patterns

### Article Layout
```
Max-width: 720px (reading)
Line length: 65-75 characters
Paragraph spacing: 1.5rem
Heading margin-top: 2.5rem
Heading margin-bottom: 1rem
```

### Grid System
```
Desktop: 12 columns
Tablet: 8 columns
Mobile: 4 columns
Gutter: 24px
```

---

## Icons

### Icon Library
- Lucide React (consistent, medical-friendly)
- Size: 20px default, 24px for CTAs
- Stroke width: 2px

### Common Icons
```
Medical: Stethoscope, Heart, Activity, Shield
Navigation: ChevronRight, ArrowRight, Menu, X
Content: BookOpen, FileText, Info, AlertTriangle
Social: Share2, Bookmark, ThumbsUp
```

---

## Animation

### Transitions
```
Default: 200ms ease
Hover: 150ms ease
Page: 300ms ease-out
```

### Micro-interactions
- Button hover: Scale 1.02
- Card hover: translateY(-2px)
- Focus: Ring 2px Primary Blue
