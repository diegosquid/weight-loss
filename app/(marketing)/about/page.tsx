import { Metadata } from "next";
import Link from "next/link";
import { AuthorBio } from "@/components/eeat/AuthorBio";
import { editorialAuthor } from "@/lib/authors";

export const metadata: Metadata = {
  title: "About Us",
  description: "Who publishes Metabolic Science, how AI assists our work, and how our educational content is funded.",
  alternates: { canonical: "https://metabolicscience.org/about/" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 text-gray-700">
      <h1 className="mb-8 text-4xl font-serif font-bold text-gray-900">About Metabolic Science</h1>
      <div className="prose prose-lg max-w-none">
        <p>Metabolic Science is an educational website about weight loss, metabolism and GLP-1 medications. We explain published research, provide calculators and examine supplement claims.</p>
        <h2>Who prepares the content?</h2>
        <p>Articles are attributed to Metabolic Science Editorial. AI tools assist with research and drafting. We do not claim independent physician review, medical credentials, clinical practice or institutional accreditation.</p>
        <p>Earlier versions displayed individual medical bylines and review badges that we could not substantiate. These have been removed. The publication dates of existing articles have been retained; this attribution correction does not mean every clinical claim has been rechecked.</p>
        <h2>How to use the site</h2>
        <p>Use source links to examine the underlying evidence and check the date of an article. Research can change, and educational information cannot establish which treatment or supplement is appropriate for you. Discuss those decisions with a qualified healthcare professional.</p>
        <h2>How the site is funded</h2>
        <p>Some product analyses include affiliate links. We may earn a commission if you buy through them. Commercial relationships are disclosed on the relevant page. A commission does not establish a product’s efficacy or safety.</p>
        <p><Link href="/editorial-policy/">Read our editorial and product evaluation policy</Link> or <Link href="/privacy/">learn about data handling</Link>.</p>
      </div>
      <div className="mt-8"><AuthorBio author={editorialAuthor} /></div>
    </div>
  );
}
