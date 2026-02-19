# Technical Documentation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Contentlayer (MDX)
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

---

## Project Structure

```
weight-loss/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Marketing pages group
│   │   ├── about/          # About page
│   │   ├── editorial-policy/  # Editorial policy
│   │   ├── calculators/    # Calculator pages
│   │   │   ├── bmi/
│   │   │   ├── calorie/
│   │   │   ├── macro/
│   │   │   └── body-fat/
│   │   ├── page.tsx        # Homepage
│   │   └── layout.tsx      # Marketing layout
│   ├── api/                # API routes
│   │   ├── sitemap/route.ts
│   │   └── og/route.tsx    # Dynamic OG images
│   ├── articles/           # Article pages
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   └── not-found.tsx       # 404 page
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   ├── ee-at/              # E-E-A-T components
│   │   ├── MedicalReviewBadge.tsx
│   │   ├── AuthorBio.tsx
│   │   └── Citation.tsx
│   ├── calculators/        # Calculator components
│   │   ├── BMICalculator.tsx
│   │   ├── CalorieCalculator.tsx
│   │   ├── MacroCalculator.tsx
│   │   └── BodyFatCalculator.tsx
│   ├── layout/             # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   └── seo/                # SEO components
│       ├── JsonLd.tsx
│       ├── MetaTags.tsx
│       └── OpenGraph.tsx
├── content/                # MDX content
│   ├── articles/           # Article MDX files
│   └── authors/            # Author data
├── lib/                    # Utility functions
│   ├── utils.ts            # General utilities
│   ├── seo.ts              # SEO helpers
│   └── schema.ts           # Schema.org generators
├── public/                 # Static assets
│   ├── images/
│   └── fonts/
├── types/                  # TypeScript types
├── contentlayer.config.ts  # Contentlayer config
├── tailwind.config.ts      # Tailwind config
├── next.config.js          # Next.js config
└── docs/                   # Documentation
```

---

## Contentlayer Configuration

Contentlayer transforms MDX files into type-safe data.

### Article Schema
```typescript
export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: 'articles/**/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    updatedAt: { type: 'date' },
    author: { type: 'string', required: true },
    medicalReviewer: { type: 'string' },
    category: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    featured: { type: 'boolean', default: false },
    image: { type: 'string' },
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.flattenedPath.replace('articles/', '') },
    url: { type: 'string', resolve: (doc) => `/articles/${doc._raw.flattenedPath.replace('articles/', '')}` },
  },
}))
```

---

## SEO Implementation

### Meta Tags
- Title: 50-60 characters
- Description: 150-160 characters
- Canonical URL
- Robots meta

### Open Graph
```typescript
export const OpenGraph = {
  title: 'Article Title',
  description: 'Article description',
  type: 'article',
  url: 'https://site.com/articles/slug',
  images: [{
    url: 'https://site.com/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Image description'
  }],
  siteName: 'Metabolic Health Authority',
}
```

### Twitter Cards
- Card type: summary_large_image
- Creator handle
- Site handle

### Schema.org
Implemented via JSON-LD:
- MedicalWebPage (main pages)
- Article (blog posts)
- FAQPage (FAQ sections)
- Organization (site info)
- Person (authors)

---

## Dynamic Sitemap

```typescript
// app/api/sitemap/route.ts
export async function GET() {
  const articles = await getArticles()
  const pages = ['', 'about', 'editorial-policy', 'calculators']
  
  const xml = generateSitemapXml([...pages, ...articles])
  
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
```

---

## Dynamic Robots.txt

```typescript
// app/api/robots/route.ts
export async function GET() {
  const robots = `
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://site.com/api/sitemap
  `.trim()
  
  return new Response(robots, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
```

---

## Calculator Logic

### BMI Calculator
```typescript
function calculateBMI(weight: number, height: number, unit: 'metric' | 'imperial'): number {
  if (unit === 'metric') {
    return weight / Math.pow(height / 100, 2)
  }
  return (weight / Math.pow(height, 2)) * 703
}

function getBMICategory(bmi: number): string {
  if (bmi < 18.5) return 'Underweight'
  if (bmi < 25) return 'Normal weight'
  if (bmi < 30) return 'Overweight'
  return 'Obese'
}
```

### Calorie Calculator (Mifflin-St Jeor)
```typescript
function calculateBMR(weight: number, height: number, age: number, gender: 'male' | 'female'): number {
  const base = 10 * weight + 6.25 * height - 5 * age
  return gender === 'male' ? base + 5 : base - 161
}

function calculateTDEE(bmr: number, activityLevel: number): number {
  return Math.round(bmr * activityLevel)
}
```

---

## Build Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Contentlayer
npx contentlayer build
```
