import { pageMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata("Editorial Policy", "Our sourcing standards, use of AI, product evaluation method and affiliate disclosures.", "/editorial-policy/");

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="mb-4 text-4xl font-serif font-bold text-gray-900">Editorial Policy</h1>
      <p className="mb-8 text-sm text-gray-500">Updated September 9, 2026</p>
      <div className="prose prose-lg max-w-none text-gray-700">
        <h2>Publisher and use of AI</h2>
        <p>Metabolic Science publishes educational articles with AI assistance for research and drafting. Articles are attributed to our editorial publication. AI checks are not medical review. We do not claim independent physician review or verified clinical credentials for our editorial byline.</p>
        <h2>Sources and uncertainty</h2>
        <p>Our standards prioritize clinical trials, systematic reviews, official prescribing information and public health sources such as NIH and FDA. Source links allow readers to inspect the evidence. Early research, animal studies and manufacturer statements should be identified as such.</p>
        <p>We aim to check that each reference supports the associated statement. A source link alone does not guarantee that a summary is correct. Older articles may require further checking, and we do not promise a completed medical audit of the entire archive.</p>
        <h2 id="product-evaluation">How we evaluate products</h2>
        <ul>
          <li>Describe what was examined: public documentation, a product label or a hands-on test. We do not invent product testing or testimonials.</li>
          <li>Separate research on individual ingredients from trials of the finished formula. Compare doses only when the label and study provide them.</li>
          <li>Identify missing information, relevant cautions and reasonable alternatives, including deciding not to purchase.</li>
          <li>Date commercial details and distinguish the advertised price per bottle from the full order cost.</li>
          <li>Link to current seller terms. Product availability, pricing and refund conditions may change.</li>
        </ul>
        <h2>Affiliate relationships</h2>
        <p>Some articles contain paid referral links. We may receive a commission if a reader buys through one. We disclose this relationship on the article and near the commercial link. We do not accept payment to fabricate favorable findings or guarantee weight loss.</p>
        <p>The seller handles product fulfillment and support; ClickBank processes applicable purchases. Their participation does not establish clinical efficacy or constitute a medical endorsement.</p>
        <h2>Corrections and dates</h2>
        <p>Publication dates identify the original article. Update dates reflect substantive changes, with a correction note when appropriate. We do not promise a fixed clinical review schedule.</p>
        <p>On September 9, 2026, we removed unverified individual medical bylines, physician review claims, certification badges and audience figures. This correction applies to attribution and presentation; it does not represent a clinical re-review of every article.</p>
        <h2>Medical decisions</h2>
        <p>This website does not diagnose conditions, prescribe treatment or provide personalized medical advice. Consult a qualified healthcare professional before changing treatment or taking a supplement.</p>
      </div>
    </div>
  );
}
