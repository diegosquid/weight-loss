import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { ResourceCards } from "@/components/affiliate/ResourceCards";
export const metadata = pageMetadata("Practical Resources & Product Assessments", "Compare optional cooking and exercise resources, their costs and limitations, alongside free alternatives. Clear affiliate disclosures and assessment methods.", "/resources/");
export default function ResourcesPage() {
  return <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
    <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Make an informed choice</p>
    <h1 className="mt-3 max-w-3xl text-4xl font-serif font-bold text-slate-900">Practical resources for everyday routines</h1>
    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">Cooking and exercise resources can help organize a routine. Whether one is worth buying depends on its contents, your budget and what you would actually use. Start with the free options and compare the details before committing.</p>
    <section className="mt-10" aria-labelledby="practical-guides">
      <h2 id="practical-guides" className="mb-5 text-2xl font-serif font-bold text-slate-900">Free practical guides</h2>
      <article className="rounded-2xl border border-slate-200 p-6">
        <h3 className="text-xl font-semibold"><Link href="/metabolism/plant-based-meal-planning-beginners/" className="text-blue-800 underline underline-offset-4">Plant-based meal planning for beginners</Link></h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">Start with two meals and a grocery list for four dinners. See how to reuse ingredients, plan storage and decide whether a recipe collection would help.</p>
      </article>
      <article className="mt-5 rounded-2xl border border-slate-200 p-6">
        <h3 className="text-xl font-semibold"><Link href="/metabolism/choosing-beginner-home-workout/" className="text-blue-800 underline underline-offset-4">How to choose a beginner home workout program</Link></h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">Compare equipment, session length, exercise adaptations and progression. Use free demonstrations and a practical checklist before deciding whether to pay.</p>
      </article>
    </section>
    <section className="mt-12" aria-labelledby="assessments"><h2 id="assessments" className="mb-5 text-2xl font-serif font-bold text-slate-900">Product assessments</h2>
      <p className="mb-6 text-sm leading-relaxed text-slate-600">These reviews assess public offers and checkout terms. We have not purchased or tested these products. They contain disclosed affiliate links: we may earn a commission if you buy. Neither product is a treatment or a requirement for weight loss.</p>
      <ResourceCards source="resources" />
    </section>
    <section className="mt-12 rounded-2xl bg-slate-50 p-7"><h2 className="text-2xl font-serif font-bold text-slate-900">Start with a free resource</h2>
      <ul className="mt-5 space-y-4 text-blue-800 underline underline-offset-4">
        <li><a href="https://www.nhs.uk/healthier-families/recipes/">NHS Healthier Families: free recipes and dietary filters</a></li>
        <li><a href="https://www.nhs.uk/live-well/exercise/strength-and-flex-exercise-plan-how-to-videos/">NHS: Strength and Flex exercise demonstrations</a></li>
        <li><Link href="/tools/">Our free calculators and their limitations</Link></li>
      </ul>
    </section>
    <p className="mt-8 text-slate-600">Read <Link href="/editorial-policy/#product-evaluation" className="text-blue-800 underline">how we evaluate products</Link> and our <Link href="/privacy/" className="text-blue-800 underline">privacy policy</Link>.</p>
  </div>;
}
