import { Article, Author } from "@/types";

// Authors data
export const authors: Author[] = [
  {
    name: "Dr. Sarah Mitchell",
    slug: "sarah-mitchell",
    title: "Medical Director",
    credentials: "MD, FACP",
    bio: "Dr. Sarah Mitchell is a board-certified internist specializing in metabolic medicine and weight management. With over 15 years of clinical experience, she has helped thousands of patients achieve sustainable weight loss through evidence-based approaches.",
    specialties: ["Internal Medicine", "Obesity Medicine", "Metabolic Health"],
    affiliations: ["American College of Physicians", "Obesity Medicine Association"],
  },
  {
    name: "Dr. James Chen",
    slug: "james-chen",
    title: "Endocrinologist",
    credentials: "MD, PhD, FACE",
    bio: "Dr. James Chen is a fellowship-trained endocrinologist with expertise in diabetes, metabolism, and hormone-related weight disorders. His research on GLP-1 receptor agonists has been published in leading medical journals.",
    specialties: ["Endocrinology", "Diabetes", "Metabolic Disorders"],
    affiliations: ["American Association of Clinical Endocrinologists", "Endocrine Society"],
  },
  {
    name: "Emily Rodriguez",
    slug: "emily-rodriguez",
    title: "Senior Medical Writer",
    credentials: "MPH, RD",
    bio: "Emily Rodriguez is a registered dietitian and public health specialist. She translates complex medical research into accessible, actionable content for patients and healthcare providers.",
    specialties: ["Nutrition", "Public Health", "Medical Writing"],
    affiliations: ["Academy of Nutrition and Dietetics"],
  },
];

// Articles data (simulating MDX content)
export const articles: Article[] = [
  {
    slug: "what-is-semaglutide",
    title: "What is Semaglutide? A Complete Guide to This Revolutionary Weight Loss Medication",
    description:
      "Learn everything about semaglutide, how it works for weight loss, its effectiveness, side effects, and what to expect when starting treatment.",
    content: `
## What is Semaglutide?

Semaglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist that has revolutionized the treatment of obesity and type 2 diabetes. Originally developed as a diabetes medication, its remarkable weight loss effects led to FDA approval for chronic weight management.

## How Does Semaglutide Work?

Semaglutide mimics the GLP-1 hormone naturally produced in your intestines. This hormone plays several crucial roles in metabolism:

### Appetite Regulation
Semaglutide acts on appetite centers in the brain, specifically the hypothalamus, reducing hunger signals and increasing feelings of fullness (satiety).

### Slowed Gastric Emptying
The medication slows how quickly food leaves your stomach, helping you feel full longer after meals.

### Blood Sugar Control
Semaglutide stimulates insulin release when blood sugar is high and reduces glucagon secretion, helping maintain stable glucose levels.

## FDA-Approved Brands

| Brand Name | Approved For | Dosage Form |
|------------|--------------|-------------|
| Ozempic | Type 2 Diabetes | Weekly injection |
| Wegovy | Chronic Weight Management | Weekly injection |
| Rybelsus | Type 2 Diabetes | Daily oral tablet |

## Effectiveness for Weight Loss

Clinical trials have shown remarkable results:

- **STEP 1 Trial**: Participants lost an average of 14.9% of body weight over 68 weeks
- **STEP 5 Trial**: Sustained weight loss of 15.2% at 2 years
- Approximately 70% of participants lost at least 10% of their body weight

## Who Can Take Semaglutide?

### For Weight Loss (Wegovy)
- Adults with BMI ≥30 (obesity)
- Adults with BMI ≥27 (overweight) with at least one weight-related condition
- Children 12+ with BMI at or above the 95th percentile

### For Diabetes (Ozempic)
- Adults with type 2 diabetes
- Often combined with other diabetes medications

## Common Side Effects

Most side effects are gastrointestinal and typically improve over time:

- Nausea (44% of patients)
- Diarrhea (30%)
- Vomiting (24%)
- Constipation (24%)
- Abdominal pain (20%)

## Serious Considerations

### Black Box Warning
Semaglutide carries a warning for thyroid C-cell tumors observed in rodents. It's contraindicated in patients with:
- Personal or family history of medullary thyroid carcinoma
- Multiple Endocrine Neoplasia syndrome type 2

### Other Precautions
- History of pancreatitis
- Gallbladder disease
- Kidney problems
- Diabetic retinopathy

## Starting Treatment

### What to Expect
1. **Gradual dose escalation** over 16-20 weeks
2. **Weekly subcutaneous injections** (self-administered)
3. **Regular monitoring** by healthcare provider
4. **Lifestyle modifications** remain essential

### Typical Dosing Schedule
- Weeks 1-4: 0.25 mg weekly
- Weeks 5-8: 0.5 mg weekly
- Weeks 9-12: 1.0 mg weekly
- Weeks 13-16: 1.7 mg weekly
- Week 17+: 2.4 mg weekly (maintenance)

## Cost and Insurance

- **Wegovy**: \$1,349/month list price
- **Ozempic**: \$935/month list price
- Many insurance plans cover with prior authorization
- Manufacturer savings cards available
- Compounded versions exist but lack FDA oversight

## Conclusion

Semaglutide represents a paradigm shift in obesity treatment, offering unprecedented weight loss results for appropriate candidates. However, it's not a magic pill—it works best combined with healthy eating, regular physical activity, and behavioral changes. Consult with a healthcare provider to determine if semaglutide is right for you.
    `,
    publishedAt: "2024-01-15",
    updatedAt: "2024-02-10",
    author: authors[0],
    medicalReviewer: authors[1],
    category: "Medications",
    tags: ["semaglutide", "wegovy", "ozempic", "glp-1", "weight loss medication"],
    featured: true,
    readingTime: 12,
  },
  {
    slug: "ozempic-vs-wegovy",
    title: "Ozempic vs Wegovy: What's the Difference?",
    description:
      "Compare Ozempic and Wegovy—two semaglutide medications. Learn about dosages, approved uses, insurance coverage, and which might be right for you.",
    content: `
## Ozempic vs Wegovy: Understanding the Differences

Ozempic and Wegovy are both brand names for semaglutide, but they're approved for different uses and have some key differences. This guide will help you understand which might be appropriate for your situation.

## What They Have in Common

### Same Active Ingredient
Both medications contain semaglutide, a GLP-1 receptor agonist that:
- Reduces appetite
- Slows gastric emptying
- Regulates blood sugar
- Promotes significant weight loss

### Same Manufacturer
Both are produced by Novo Nordisk, a Danish pharmaceutical company specializing in diabetes care.

### Similar Administration
- Weekly subcutaneous injections
- Pre-filled injection pens
- Self-administered at home

## Key Differences

### FDA-Approved Indications

| Feature | Ozempic | Wegovy |
|---------|---------|--------|
| **Primary Use** | Type 2 Diabetes | Chronic Weight Management |
| **BMI Requirements** | None (diabetes diagnosis) | ≥30 or ≥27 with comorbidity |
| **Age Approval** | Adults 18+ | Adults 18+, Children 12+ |

### Dosage Differences

**Ozempic Dosing:**
- Starts at 0.25 mg weekly
- Maximum: 2.0 mg weekly

**Wegovy Dosing:**
- Starts at 0.25 mg weekly
- Maximum: 2.4 mg weekly

The higher maximum dose of Wegovy (2.4 mg vs 2.0 mg) contributes to greater average weight loss.

### Pen Design

**Ozempic:**
- 1 mg and 2 mg pen options
- Each pen contains multiple doses
- Different click counts for different doses

**Wegovy:**
- Single-use pens for each dose
- 5 different pen strengths
- Color-coded for each dose level
- No dose counting needed

## Effectiveness Comparison

### Weight Loss Results

**Wegovy (STEP Trials):**
- Average weight loss: 15-17% of body weight
- 68-week treatment period

**Ozempic (SUSTAIN Trials):**
- Average weight loss: 9-14% of body weight
- Secondary outcome in diabetes trials

### Blood Sugar Control

**Ozempic:**
- HbA1c reduction: 1.0-1.5%
- Primary indication is diabetes management

**Wegovy:**
- Some blood sugar benefits
- Not primarily a diabetes medication

## Insurance Coverage

### Ozempic
- Generally covered for type 2 diabetes
- May require step therapy (try other medications first)
- Prior authorization often needed

### Wegovy
- Coverage varies significantly by plan
- Many insurers require documented weight loss attempts
- Some exclude weight loss medications entirely
- Medicare does not cover weight loss drugs

### Cost Without Insurance
- Ozempic: ~\$935/month
- Wegovy: ~\$1,349/month

## Side Effects

Both medications have similar side effect profiles since they contain the same active ingredient:

### Common Side Effects
- Nausea
- Diarrhea
- Vomiting
- Constipation
- Abdominal pain

### Serious Risks
- Thyroid C-cell tumors (boxed warning)
- Pancreatitis
- Gallbladder disease
- Kidney injury
- Diabetic retinopathy complications

## Which Should You Choose?

### Choose Ozempic If:
- You have type 2 diabetes
- Your insurance covers it for diabetes
- You want blood sugar control plus weight loss
- 2.0 mg dose provides adequate weight loss

### Choose Wegovy If:
- Your primary goal is weight loss
- You don't have diabetes
- You qualify based on BMI requirements
- You want maximum weight loss potential
- Your insurance covers weight management medications

## Off-Label Use

Many providers prescribe Ozempic off-label for weight loss when:
- Wegovy is unavailable (supply shortages)
- Insurance won't cover Wegovy
- Patient prefers the Ozempic pen design

This is legal and common, though not FDA-approved.

## Supply Availability

Both medications have experienced shortages due to high demand. Check current availability:
- FDA drug shortage database
- Pharmacy stock checks
- Manufacturer websites

## Switching Between Them

Switching is possible under medical supervision:
- Dose conversion may be needed
- Titrate up if increasing dose
- Monitor for side effects
- Insurance considerations

## Conclusion

Ozempic and Wegovy are essentially the same medication with different approved uses and maximum doses. Your choice depends on:
1. Your medical conditions
2. Insurance coverage
3. Availability
4. Doctor recommendation

Consult with your healthcare provider to determine the best option for your individual circumstances.
    `,
    publishedAt: "2024-01-20",
    updatedAt: "2024-02-12",
    author: authors[0],
    medicalReviewer: authors[1],
    category: "Comparisons",
    tags: ["ozempic", "wegovy", "semaglutide", "comparison", "glp-1"],
    featured: true,
    readingTime: 10,
  },
  {
    slug: "glp1-side-effects",
    title: "GLP-1 Medication Side Effects: What You Need to Know",
    description:
      "Comprehensive guide to GLP-1 medication side effects including semaglutide, tirzepatide, and liraglutide. Learn about common, rare, and serious adverse effects.",
    content: `
## Understanding GLP-1 Medication Side Effects

GLP-1 receptor agonists like semaglutide (Ozempic, Wegovy), tirzepatide (Mounjaro, Zepbound), and liraglutide (Saxenda, Victoza) have transformed weight loss and diabetes treatment. While highly effective, understanding potential side effects is crucial for safe use.

## Common Side Effects

### Gastrointestinal Effects (Most Common)

These affect 40-70% of users, especially when starting or increasing doses:

| Side Effect | Semaglutide | Tirzepatide | Liraglutide |
|-------------|-------------|-------------|-------------|
| Nausea | 44% | 25-30% | 39% |
| Diarrhea | 30% | 20-23% | 21% |
| Vomiting | 24% | 13-16% | 16% |
| Constipation | 24% | 11-17% | 19% |
| Abdominal pain | 20% | 9-10% | 10% |
| Indigestion | 15% | 8-9% | 10% |

**Management Tips:**
- Start with low doses and titrate slowly
- Eat smaller, more frequent meals
- Avoid high-fat foods
- Stay hydrated
- Symptoms typically improve after 4-8 weeks

### Other Common Effects

**Injection Site Reactions**
- Redness, itching, or swelling
- Rotate injection sites weekly
- Use proper injection technique

**Fatigue**
- Often temporary during adjustment
- Ensure adequate nutrition
- Monitor for dehydration

**Headache**
- Usually mild and transient
- Stay hydrated
- Consider acetaminophen if needed

## Less Common Side Effects

### Gallbladder Issues (1-3%)
- Gallstones
- Cholecystitis (gallbladder inflammation)
- Rapid weight loss increases risk
- Report severe abdominal pain immediately

### Pancreatitis (<1%)
- Inflammation of the pancreas
- **Symptoms:** Severe abdominal pain (often radiating to back), vomiting, fever
- **Action:** Seek emergency care; discontinue medication

### Kidney Problems
- Dehydration from GI side effects can stress kidneys
- Pre-existing kidney disease requires monitoring
- Maintain hydration, especially if vomiting/diarrhea

### Diabetic Retinopathy
- Rapid glucose improvement can temporarily worsen eye disease
- Diabetics should have eye exams before and during treatment
- Usually stabilizes with continued use

## Serious Side Effects (Rare but Important)

### Thyroid Tumors - Boxed Warning

**Risk:**
- Medullary thyroid carcinoma (MTC) observed in rodent studies
- Human risk unknown but theoretically possible

**Contraindications:**
- Personal/family history of MTC
- Multiple Endocrine Neoplasia syndrome type 2 (MEN2)

**Symptoms to Report:**
- Lump in neck
- Hoarseness
- Difficulty swallowing
- Shortness of breath

### Severe Allergic Reactions (<0.1%)
- Difficulty breathing
- Swelling of face/lips/tongue
- Severe rash or itching
- **Action:** Emergency medical attention

### Ileus (Bowel Paralysis)
- Rare reports with GLP-1 medications
- Symptoms: Severe constipation, abdominal distension, vomiting
- Requires immediate medical attention

## Side Effects by Medication

### Semaglutide (Ozempic, Wegovy, Rybelsus)
- **Most common:** Nausea, diarrhea, vomiting
- **Unique considerations:** Oral form (Rybelsus) has additional GI effects
- **Injection:** Weekly convenience

### Tirzepatide (Mounjaro, Zepbound)
- **Most common:** Nausea, diarrhea, decreased appetite
- **Potentially more effective:** Dual GIP/GLP-1 action
- **Side effect profile:** Similar to semaglutide

### Liraglutide (Saxenda, Victoza)
- **Most common:** Nausea, diarrhea, constipation
- **Daily injection:** More frequent side effects possible
- **Established safety:** Longer track record

### Dulaglutide (Trulicity)
- **Most common:** Nausea, diarrhea, vomiting
- **Weekly injection:** Similar to semaglutide
- **Lower nausea rates:** May be better tolerated by some

## When to Contact Your Doctor

### Call Immediately For:
- Severe abdominal pain
- Persistent vomiting (>24 hours)
- Signs of allergic reaction
- Difficulty breathing
- Chest pain
- Severe dehydration

### Schedule Appointment For:
- Side effects lasting >2 weeks
- Significant impact on daily life
- Unusual symptoms
- Concerns about effectiveness

## Minimizing Side Effects

### Start Low, Go Slow
- Follow prescribed titration schedule
- Don't rush dose increases
- Allow body to adapt

### Dietary Strategies
- Eat smaller portions
- Avoid high-fat meals
- Limit alcohol
- Stay hydrated (8-10 glasses water daily)
- Consider ginger for nausea

### Lifestyle Adjustments
- Take medication at consistent time
- Keep a symptom diary
- Regular follow-ups with provider
- Join support groups

## Long-Term Safety

### Current Data
- Liraglutide: 10+ years of safety data
- Semaglutide: 6+ years
- Tirzepatide: 2+ years

### Ongoing Monitoring
- Cardiovascular outcomes studies
- Cancer registry data
- Real-world evidence collection

### What We Don't Know
- Effects beyond 5+ years
- Impact on pregnancy/breastfeeding
- Pediatric long-term effects (for Wegovy)

## Drug Interactions

### Medications to Discuss with Doctor:
- Insulin or sulfonylureas (increased hypoglycemia risk)
- Oral medications (delayed gastric emptying may affect absorption)
- Warfarin (monitor INR)

### Generally Safe:
- Most blood pressure medications
- Statins
- Antidepressants
- Birth control pills

## Conclusion

GLP-1 medications are generally well-tolerated, with most side effects being mild, gastrointestinal, and temporary. The key to success is:

1. **Start slowly** with dose titration
2. **Communicate** with your healthcare provider
3. **Monitor** for serious symptoms
4. **Adjust** lifestyle to minimize GI effects
5. **Weigh** benefits against risks for your situation

Remember: Not experiencing side effects doesn't mean the medication isn't working. Effectiveness and side effects are independent.
    `,
    publishedAt: "2024-01-25",
    updatedAt: "2024-02-15",
    author: authors[2],
    medicalReviewer: authors[0],
    category: "Safety",
    tags: ["glp-1", "side effects", "semaglutide", "tirzepatide", "safety", "ozempic", "wegovy"],
    featured: true,
    readingTime: 15,
  },
];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((author) => author.slug === slug);
}
