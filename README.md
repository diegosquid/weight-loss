# Metabolic Health Authority

A comprehensive medical authority website focused on weight loss, metabolism, and GLP-1 medications for the US market.

## Features

- **Evidence-Based Content**: Medically reviewed articles on weight loss medications
- **Interactive Calculators**: BMI, Calorie, Macro, and Body Fat calculators
- **E-E-A-T Compliance**: Medical review badges, author bios, citations
- **SEO Optimized**: Schema.org markup, sitemap, meta tags
- **Performance**: Next.js 14 with static export

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
app/                    # Next.js App Router
├── (marketing)/        # Marketing pages
├── articles/           # Article pages
├── api/                # API routes (sitemap, robots)
components/
├── ui/                 # UI components
├── eeat/               # E-E-A-T components
├── calculators/        # Calculator components
├── layout/             # Layout components
├── seo/                # SEO components
content/
├── articles/           # MDX article files
lib/                    # Utility functions
types/                  # TypeScript types
```

## Content Strategy

See `docs/CONTENT_STRATEGY.md` for the complete 6-month content plan.

## Design System

See `docs/DESIGN_SYSTEM.md` for colors, typography, and component guidelines.

## License

All rights reserved.
