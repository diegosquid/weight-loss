# Content Guide — Metabolic Science

This guide explains **exactly** how to add new articles, create new categories, and fix all broken links in the site. Follow each step precisely.

---

## Table of Contents

1. [Project Structure Overview](#1-project-structure-overview)
2. [How Articles Work](#2-how-articles-work)
3. [How to Create a New Article](#3-how-to-create-a-new-article)
4. [How to Create a New Category](#4-how-to-create-a-new-category)
5. [MDX Frontmatter Reference](#5-mdx-frontmatter-reference)
6. [Authors Registry](#6-authors-registry)
7. [Sitemap & SEO](#7-sitemap--seo)
8. [All Broken & Missing Links](#8-all-broken--missing-links)
9. [Existing Working Routes](#9-existing-working-routes)

---

## 1. Project Structure Overview

```
weight-loss/
├── app/
│   ├── page.tsx                          # Homepage
│   ├── layout.tsx                        # Global layout (header + footer)
│   ├── [category]/[slug]/page.tsx        # Dynamic article route
│   ├── articles/page.tsx                 # Article listing page
│   ├── (marketing)/
│   │   ├── about/page.tsx                # /about
│   │   ├── editorial-policy/page.tsx     # /editorial-policy
│   │   ├── glp1/page.tsx                 # /glp1 (category landing)
│   │   ├── metabolism/page.tsx           # /metabolism (category landing)
│   │   ├── supplements/page.tsx          # /supplements (category landing)
│   │   ├── tools/page.tsx                # /tools (category landing)
│   │   └── calculators/
│   │       ├── page.tsx                  # /calculators
│   │       ├── bmi/page.tsx              # /calculators/bmi
│   │       ├── calorie/page.tsx          # /calculators/calorie
│   │       ├── macro/page.tsx            # /calculators/macro
│   │       └── body-fat/page.tsx         # /calculators/body-fat
├── content/                              # ALL article content lives here
│   └── glp-1/                            # Category folder = URL segment
│       ├── what-is-semaglutide.mdx
│       ├── ozempic-vs-wegovy.mdx
│       ├── glp1-side-effects.mdx
│       └── liraglutide.mdx
├── lib/
│   └── content.ts                        # Reads content/ directory, parses MDX
├── components/
│   └── layout/
│       ├── Navigation.tsx                # Header nav links
│       └── Footer.tsx                    # Footer links
└── types/
    └── index.ts                          # Article, Author interfaces
```

### Key Concept: URL = `/{category-folder}/{filename}`

The URL is derived **directly** from the filesystem:

- Folder name under `content/` = `{category}` segment in URL
- MDX filename (without `.mdx`) = `{slug}` segment in URL

Example: `content/glp-1/liraglutide.mdx` → URL: `/glp-1/liraglutide`

---

## 2. How Articles Work

The system works as follows:

1. `lib/content.ts` scans all subfolders inside `content/`
2. For each subfolder, it reads all `.mdx` and `.md` files
3. Each file is parsed: frontmatter (YAML between `---`) gives metadata, the rest is Markdown converted to HTML via `marked`
4. The route `app/[category]/[slug]/page.tsx` catches any `/{category}/{slug}` URL and calls `getArticleBySlug(category, slug)` to find the matching file
5. If no file is found, it returns 404

**Important:** You do NOT need to register articles anywhere. Just create the `.mdx` file in the right folder and it works automatically. No code changes needed.

---

## 3. How to Create a New Article

### Step-by-step:

**Step 1.** Decide which category this article belongs to. Check if the category folder already exists under `content/`. If not, see [Section 4](#4-how-to-create-a-new-category).

**Step 2.** Choose a filename. This becomes the URL slug. Use lowercase, kebab-case (words separated by hyphens). Examples:
- `tirzepatide.mdx` → URL `/glp-1/tirzepatide`
- `how-it-works.mdx` → URL `/metabolism/how-it-works`
- `best-protein-sources.mdx` → URL `/supplements/best-protein-sources`

**Step 3.** Create the file at `content/{category}/{slug}.mdx`.

**Step 4.** Add frontmatter at the top of the file between `---` markers. Copy this template exactly:

```mdx
---
title: "Your Article Title Here"
description: "A 1-2 sentence summary of the article for SEO and previews."
publishedAt: "2024-03-15"
updatedAt: "2024-03-15"
author: "sarah-mitchell"
medicalReviewer: "james-chen"
category: "GLP-1 Medications"
tags: ["tag1", "tag2", "tag3"]
featured: false
readingTime: 10
---

## First Heading

Your article content in Markdown here...
```

**Step 5.** Write the article body in standard Markdown below the frontmatter. You can use:
- `## Headings` (h2), `### Subheadings` (h3)
- `**bold text**`, `*italic text*`
- `- bullet lists` and `1. numbered lists`
- Markdown tables (`| Col1 | Col2 |`)
- `> blockquotes`
- `[link text](url)` for links

**Step 6.** Restart the dev server or rebuild. The article will appear automatically at `/{category}/{slug}`.

### Complete Example

To create an article about tirzepatide in the GLP-1 category:

1. Create file: `content/glp-1/tirzepatide.mdx`
2. URL will be: `/glp-1/tirzepatide`
3. Content:

```mdx
---
title: "Tirzepatide (Mounjaro & Zepbound): Complete Guide"
description: "Everything about tirzepatide — the dual GIP/GLP-1 receptor agonist for diabetes and weight loss."
publishedAt: "2024-04-01"
author: "sarah-mitchell"
medicalReviewer: "james-chen"
category: "GLP-1 Medications"
tags: ["tirzepatide", "mounjaro", "zepbound", "glp-1"]
featured: false
readingTime: 12
---

## What is Tirzepatide?

Article body goes here...
```

---

## 4. How to Create a New Category

### Step-by-step:

**Step 1.** Create a new folder under `content/`. The folder name will be the URL segment. Use lowercase kebab-case.

```
content/
  glp-1/          ← existing
  metabolism/     ← NEW category
  supplements/    ← NEW category
  nutrition/      ← NEW category
```

**Step 2.** Add at least one `.mdx` file inside the new folder (see Section 3).

**Step 3.** That's it. The dynamic route `app/[category]/[slug]/page.tsx` will automatically serve articles from the new folder.

### Example: Creating the "metabolism" category

```bash
mkdir content/metabolism
```

Create `content/metabolism/how-it-works.mdx`:

```mdx
---
title: "How Metabolism Works: A Complete Guide"
description: "Understand the science behind metabolism — BMR, TDEE, and how your body converts food to energy."
publishedAt: "2024-04-01"
author: "emily-rodriguez"
medicalReviewer: "sarah-mitchell"
category: "Metabolism"
tags: ["metabolism", "BMR", "TDEE", "energy"]
featured: false
readingTime: 8
---

## What is Metabolism?

Your content here...
```

This article is now accessible at `/metabolism/how-it-works`.

---

## 5. MDX Frontmatter Reference

Every `.mdx` file MUST have frontmatter. Here is every field:

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `title` | YES | string | Article title. Shown in `<h1>`, browser tab, and SEO. |
| `description` | YES | string | 1-2 sentence summary. Used for SEO meta description and article cards. |
| `publishedAt` | YES | string | Date in `"YYYY-MM-DD"` format. |
| `updatedAt` | NO | string | Date in `"YYYY-MM-DD"` format. Shown as "Updated" date. |
| `author` | YES | string | Author slug. Must match a key in the authors registry in `lib/content.ts`. See Section 6. |
| `medicalReviewer` | NO | string | Reviewer slug. Must match a key in the authors registry. If set, a "MD Reviewed" badge is shown. |
| `category` | YES | string | Display name (e.g., `"GLP-1 Medications"`). This is for display only — the URL category comes from the folder name. |
| `tags` | NO | string[] | Array of tags for the article. |
| `featured` | NO | boolean | If `true`, shows a "Featured" badge. Default: `false`. |
| `readingTime` | NO | number | Reading time in minutes. If omitted, auto-calculated from word count. |

---

## 6. Authors Registry

Authors are defined in `lib/content.ts` in the `authors` object. Each key is the slug you use in frontmatter.

### Current Authors

| Slug | Name | Credentials | Use as |
|------|------|-------------|--------|
| `sarah-mitchell` | Dr. Sarah Mitchell | MD, FACP | `author` or `medicalReviewer` |
| `james-chen` | Dr. James Chen | MD, PhD, FACE | `author` or `medicalReviewer` |
| `emily-rodriguez` | Emily Rodriguez | MPH, RD | `author` only (not MD) |

### How to Add a New Author

Open `lib/content.ts` and add a new entry to the `authors` object:

```typescript
export const authors: Record<string, Author> = {
  // ... existing authors ...

  "new-author-slug": {
    name: "Dr. Full Name",
    slug: "new-author-slug",
    title: "Title / Role",
    credentials: "MD, PhD",
    bio: "One paragraph bio.",
    specialties: ["Specialty 1", "Specialty 2"],
    affiliations: ["Organization 1"],
  },
};
```

Then use `"new-author-slug"` in the `author` or `medicalReviewer` field of any MDX file.

---

## 7. Sitemap & SEO

### How the Sitemap Works

The sitemap is generated dynamically at runtime by `app/api/sitemap/route.ts`. It is served at:

```
https://metabolichealthauthority.com/api/sitemap
```

The `robots.txt` (at `app/api/robots/route.ts`) already points search engines to this URL.

### What's Included Automatically

- **All static pages** — hardcoded in the `STATIC_PAGES` array inside the sitemap route
- **All articles** — dynamically pulled from `getAllArticles()` which scans every `.mdx` file in `content/`

This means: **when you create a new MDX article, it is automatically added to the sitemap.** No manual update needed for articles.

### When You MUST Manually Update the Sitemap

You must edit `app/api/sitemap/route.ts` in these cases:

| Scenario | What to Do |
|----------|-----------|
| **New static page created** (e.g., `/privacy`, `/contact`) | Add a new entry to the `STATIC_PAGES` array |
| **Static page deleted** | Remove the entry from `STATIC_PAGES` |
| **Static page URL changed** | Update the `path` in `STATIC_PAGES` |
| **New article created** | Nothing — automatic |
| **New category created** | Nothing — articles are automatic. But if you create a category landing page (e.g., `app/(marketing)/nutrition/page.tsx`), add it to `STATIC_PAGES` |
| **Domain changed** | Update `BASE_URL` constant at the top of the file AND in `app/api/robots/route.ts` |

### How to Add a New Static Page to the Sitemap

Open `app/api/sitemap/route.ts` and add to the `STATIC_PAGES` array:

```typescript
const STATIC_PAGES = [
  // ... existing pages ...
  { path: "privacy", priority: "0.3", changefreq: "monthly" },  // ← add here
];
```

### Priority Guidelines

| Page Type | Priority | Changefreq |
|-----------|----------|-----------|
| Homepage | `1.0` | `weekly` |
| Category landing pages (`/glp1`, `/metabolism`, etc.) | `0.8` | `weekly` |
| Article listing (`/articles`) | `0.8` | `weekly` |
| Individual articles | `0.7` | `monthly` |
| Tools / calculators | `0.6` | `monthly` |
| Institutional pages (`/about`, `/editorial-policy`) | `0.3`–`0.5` | `monthly` |

### Verifying the Sitemap

After changes, verify the sitemap by visiting:

```
http://localhost:3002/api/sitemap
```

Check that:
- All article URLs use the format `/{category}/{slug}` (NOT `/articles/{slug}`)
- All static pages are listed
- No duplicate URLs exist
- All `<lastmod>` dates are valid

---

## 8. All Broken & Missing Links

Below is a complete list of every broken link in the site grouped by location.

### 8.1. Header Navigation (`components/layout/Navigation.tsx`)

The header navigation defines dropdown menus with child links. Most child links point to articles that do NOT exist yet. Each one needs an MDX file created in the right folder.

#### GLP-1 Dropdown

| Link in Nav | URL | Status | Fix |
|-------------|-----|--------|-----|
| GLP-1 (parent) | `/glp-1` | BROKEN | Nav uses `/glp-1` but the landing page is at `/glp1` (no dash). Either rename `app/(marketing)/glp1/` to `app/(marketing)/glp-1/` OR change the nav href to `/glp1`. Renaming the folder is recommended for consistency. |
| Semaglutide | `/glp-1/semaglutide` | BROKEN | Create `content/glp-1/semaglutide.mdx`. Note: `what-is-semaglutide.mdx` exists but the nav links to `/glp-1/semaglutide`. Either create `semaglutide.mdx` as a new focused article, or change the nav href to `/glp-1/what-is-semaglutide`. |
| Tirzepatide | `/glp-1/tirzepatide` | BROKEN | Create `content/glp-1/tirzepatide.mdx` |
| Liraglutide | `/glp-1/liraglutide` | OK | File exists: `content/glp-1/liraglutide.mdx` |
| Comparison | `/glp-1/comparison` | BROKEN | Create `content/glp-1/comparison.mdx`. Note: `ozempic-vs-wegovy.mdx` exists but nav links to `/glp-1/comparison`. Either create a new article or change nav href to `/glp-1/ozempic-vs-wegovy`. |

#### Metabolism Dropdown

| Link in Nav | URL | Status | Fix |
|-------------|-----|--------|-----|
| Metabolism (parent) | `/metabolism` | OK | Page exists at `app/(marketing)/metabolism/page.tsx` |
| How It Works | `/metabolism/how-it-works` | BROKEN | Create `content/metabolism/how-it-works.mdx` |
| Boost Metabolism | `/metabolism/boost` | BROKEN | Create `content/metabolism/boost.mdx` |
| Metabolic Health | `/metabolism/health` | BROKEN | Create `content/metabolism/health.mdx` |
| Insulin Resistance | `/metabolism/insulin-resistance` | BROKEN | Create `content/metabolism/insulin-resistance.mdx` |

#### Supplements Dropdown

| Link in Nav | URL | Status | Fix |
|-------------|-----|--------|-----|
| Supplements (parent) | `/supplements` | OK | Page exists at `app/(marketing)/supplements/page.tsx` |
| Weight Loss | `/supplements/weight-loss` | BROKEN | Create `content/supplements/weight-loss.mdx` |
| Vitamins | `/supplements/vitamins` | BROKEN | Create `content/supplements/vitamins.mdx` |
| Protein | `/supplements/protein` | BROKEN | Create `content/supplements/protein.mdx` |
| Reviews | `/supplements/reviews` | BROKEN | Create `content/supplements/reviews.mdx` |

#### Tools Dropdown

| Link in Nav | URL | Status | Fix |
|-------------|-----|--------|-----|
| Tools (parent) | `/tools` | OK | Page exists |
| BMI Calculator | `/calculators/bmi` | OK | Page exists |
| Calorie Calculator | `/calculators/calorie` | OK | Page exists |
| Macro Calculator | `/calculators/macro` | OK | Page exists |
| Body Fat % | `/calculators/body-fat` | OK | Page exists |

### 8.2. Footer (`components/layout/Footer.tsx`)

| Link | URL | Status | Fix |
|------|-----|--------|-----|
| All Articles | `/articles` | OK | Page exists at `app/articles/page.tsx` |
| BMI Calculator | `/calculators/bmi` | OK | |
| Calorie Calculator | `/calculators/calorie` | OK | |
| Macro Calculator | `/calculators/macro` | OK | |
| Body Fat Calculator | `/calculators/body-fat` | OK | |
| About Us | `/about` | OK | |
| Editorial Policy | `/editorial-policy` | OK | |
| Medical Review Process | `/editorial-policy` | OK | |
| **Privacy Policy** | `/privacy` | **BROKEN** | Create `app/(marketing)/privacy/page.tsx` with a privacy policy page |
| **What is Semaglutide?** | `/articles/what-is-semaglutide` | **BROKEN** | Old URL. Change href to `/glp-1/what-is-semaglutide` |
| **Ozempic vs Wegovy** | `/articles/ozempic-vs-wegovy` | **BROKEN** | Old URL. Change href to `/glp-1/ozempic-vs-wegovy` |
| **GLP-1 Side Effects** | `/articles/glp1-side-effects` | **BROKEN** | Old URL. Change href to `/glp-1/glp1-side-effects` |
| Privacy Policy (bottom bar) | `/privacy` | **BROKEN** | Same — needs `app/(marketing)/privacy/page.tsx` |

### 8.3. Homepage (`app/page.tsx`)

| Link | URL | Status | Fix |
|------|-----|--------|-----|
| GLP-1 Medications | `/glp1` | OK | Page exists, BUT inconsistent with nav which uses `/glp-1` (with dash). Pick one. |
| Metabolism Science | `/metabolism` | OK | |
| Supplements | `/supplements` | OK | |
| Health Tools | `/tools` | OK | |

### 8.4. Hero Section (`components/sections/HeroSection.tsx`)

| Link | URL | Status | Fix |
|------|-----|--------|-----|
| Start Reading | `/articles` | OK | |
| **Health Tools** | `/tools/bmi-calculator` | **BROKEN** | Change href to `/calculators/bmi` OR `/tools` |

### 8.5. Trust Section (`components/sections/TrustSection.tsx`)

| Link | URL | Status | Fix |
|------|-----|--------|-----|
| editorial process | `/editorial-policy` | OK | |

---

## 8.6. Summary: All Content That Needs to Be Created

### MDX Articles to Create (13 articles)

These are articles linked in the navigation that do not have MDX files yet. Create each one in the specified path:

| # | File Path | URL | Nav Label |
|---|-----------|-----|-----------|
| 1 | `content/glp-1/semaglutide.mdx` | `/glp-1/semaglutide` | "Semaglutide" |
| 2 | `content/glp-1/tirzepatide.mdx` | `/glp-1/tirzepatide` | "Tirzepatide" |
| 3 | `content/glp-1/comparison.mdx` | `/glp-1/comparison` | "Comparison" |
| 4 | `content/metabolism/how-it-works.mdx` | `/metabolism/how-it-works` | "How It Works" |
| 5 | `content/metabolism/boost.mdx` | `/metabolism/boost` | "Boost Metabolism" |
| 6 | `content/metabolism/health.mdx` | `/metabolism/health` | "Metabolic Health" |
| 7 | `content/metabolism/insulin-resistance.mdx` | `/metabolism/insulin-resistance` | "Insulin Resistance" |
| 8 | `content/supplements/weight-loss.mdx` | `/supplements/weight-loss` | "Weight Loss" |
| 9 | `content/supplements/vitamins.mdx` | `/supplements/vitamins` | "Vitamins" |
| 10 | `content/supplements/protein.mdx` | `/supplements/protein` | "Protein" |
| 11 | `content/supplements/reviews.mdx` | `/supplements/reviews` | "Reviews" |

### Pages to Create (1 page)

| # | File Path | URL | Description |
|---|-----------|-----|-------------|
| 1 | `app/(marketing)/privacy/page.tsx` | `/privacy` | Privacy Policy page. Linked in footer 2 times. |

### Code Fixes Needed (4 fixes)

| # | File | What to Change | Details |
|---|------|---------------|---------|
| 1 | `components/layout/Footer.tsx` | Fix 3 article links | Change `/articles/what-is-semaglutide` → `/glp-1/what-is-semaglutide`, `/articles/ozempic-vs-wegovy` → `/glp-1/ozempic-vs-wegovy`, `/articles/glp1-side-effects` → `/glp-1/glp1-side-effects` |
| 2 | `components/sections/HeroSection.tsx` | Fix Health Tools link | Change `/tools/bmi-calculator` → `/calculators/bmi` |
| 3 | `app/(marketing)/glp1/` | Rename folder | Rename from `glp1` to `glp-1` so the landing page URL matches the nav (`/glp-1`) and the content folder (`content/glp-1/`). |
| 4 | `app/page.tsx` | Fix GLP-1 link | After renaming the folder above, change href from `/glp1` to `/glp-1` |

---

## 9. Existing Working Routes

These routes currently work and have pages:

| URL | Source File |
|-----|------------ |
| `/` | `app/page.tsx` |
| `/about` | `app/(marketing)/about/page.tsx` |
| `/articles` | `app/articles/page.tsx` |
| `/editorial-policy` | `app/(marketing)/editorial-policy/page.tsx` |
| `/glp1` | `app/(marketing)/glp1/page.tsx` |
| `/metabolism` | `app/(marketing)/metabolism/page.tsx` |
| `/supplements` | `app/(marketing)/supplements/page.tsx` |
| `/tools` | `app/(marketing)/tools/page.tsx` |
| `/calculators` | `app/(marketing)/calculators/page.tsx` |
| `/calculators/bmi` | `app/(marketing)/calculators/bmi/page.tsx` |
| `/calculators/calorie` | `app/(marketing)/calculators/calorie/page.tsx` |
| `/calculators/macro` | `app/(marketing)/calculators/macro/page.tsx` |
| `/calculators/body-fat` | `app/(marketing)/calculators/body-fat/page.tsx` |
| `/glp-1/what-is-semaglutide` | `content/glp-1/what-is-semaglutide.mdx` |
| `/glp-1/ozempic-vs-wegovy` | `content/glp-1/ozempic-vs-wegovy.mdx` |
| `/glp-1/glp1-side-effects` | `content/glp-1/glp1-side-effects.mdx` |
| `/glp-1/liraglutide` | `content/glp-1/liraglutide.mdx` |

---

## Quick Reference: Adding Content Checklist

When you need to add a new article:

- [ ] Identify the category folder (e.g., `content/glp-1/`)
- [ ] If the folder doesn't exist, create it (e.g., `content/metabolism/`)
- [ ] Create the `.mdx` file with the slug as filename
- [ ] Add frontmatter with ALL required fields: `title`, `description`, `publishedAt`, `author`, `category`
- [ ] Use a valid author slug from Section 6
- [ ] Write the article body in Markdown
- [ ] Restart dev server or rebuild
- [ ] Verify the article loads at `/{category}/{slug}`
