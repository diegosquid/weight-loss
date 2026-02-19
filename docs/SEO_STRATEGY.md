# SEO & AEO/GEO Strategy

## On-Page SEO

### Meta Tags
- Title: 50-60 characters, includes primary keyword
- Description: 150-160 characters, compelling CTA
- Canonical URLs for all pages
- Robots meta: index, follow

### Open Graph
- Type: article (for articles), website (for pages)
- Title, description, image (1200x630)
- Site name and URL

### Twitter Cards
- Card type: summary_large_image
- Creator and site handles

## Schema.org Markup

### Implemented Types
1. **Organization** - Site-wide in layout
2. **MedicalWebPage** - For medical content pages
3. **Article** - For blog posts with author and review info
4. **FAQPage** - For FAQ sections
5. **BreadcrumbList** - Navigation breadcrumbs

### Article Schema
```json
{
  "@type": "Article",
  "headline": "Article Title",
  "author": { "@type": "Person", "name": "Author Name" },
  "reviewedBy": { "@type": "Person", "name": "Reviewer", "hasCredential": "MD" },
  "datePublished": "2024-01-15",
  "dateModified": "2024-02-10"
}
```

## AEO (Answer Engine Optimization)

### Featured Snippet Optimization
- Direct answers in first paragraph
- Structured lists and tables
- FAQ sections at end of articles
- Question-based H2/H3 headings

### Voice Search
- Conversational language
- Question-answer format
- Local SEO for "near me" queries

## GEO (Generative Engine Optimization)

### Content Structure
- Clear hierarchical headings
- Bullet points and numbered lists
- Summary boxes for key takeaways
- Comprehensive coverage of topics

### Entity Optimization
- Medical entities clearly defined
- Author credentials prominent
- Citation of authoritative sources
- NAP consistency (Name, Address, Phone)

## Technical SEO

### URL Structure
- /articles/{slug} - Article pages
- /calculators/{type} - Calculator pages
- /about, /editorial-policy - Static pages

### Internal Linking
- Related articles linked in content
- Breadcrumb navigation
- Category/tag pages
- Footer links to important pages

### Page Speed
- Static export for fast loading
- Optimized images
- Minimal JavaScript
- CSS purging with Tailwind

## Keyword Strategy

### Primary Keywords
- semaglutide, ozempic, wegovy
- weight loss medication
- GLP-1 medications
- metabolism

### Long-tail Keywords
- "what is semaglutide"
- "ozempic vs wegovy difference"
- "glp-1 side effects"
- "how does ozempic work"

### Content Clusters
1. **Semaglutide Hub**
   - What is semaglutide
   - Ozempic vs Wegovy
   - Semaglutide side effects
   - Semaglutide dosage

2. **GLP-1 Hub**
   - GLP-1 mechanism of action
   - GLP-1 medications comparison
   - GLP-1 side effects
   - GLP-1 and diabetes

3. **Weight Loss Hub**
   - Medical weight loss options
   - Weight loss medications
   - BMI and health
   - Sustainable weight loss

## Local SEO (Future)

### Google Business Profile
- Medical information provider
- Phone and email
- Service area: United States

### Local Content
- "Weight loss clinics near me"
- State-specific insurance coverage
- Local provider directories

## Analytics & Tracking

### Key Metrics
- Organic traffic growth
- Keyword rankings
- Featured snippet captures
- Calculator usage
- Article engagement time

### Tools
- Google Search Console
- Google Analytics 4
- Bing Webmaster Tools

## Link Building Strategy

### Digital PR
- HARO responses
- Medical journalist outreach
- Expert commentary

### Content Partnerships
- Guest posts on health sites
- Medical professional interviews
- Research collaboration

### Directory Listings
- Healthgrades
- WebMD physician directory
- Psychology Today (if applicable)

## Content Refresh Schedule

- **Quarterly**: Review and update all articles
- **Monthly**: Check for new research
- **Weekly**: Monitor for breaking news
- **As needed**: FDA updates, safety communications
