import Link from "next/link";
import { BookOpen, Info, Scale, Calendar } from "lucide-react";

const standards = [
  { title: "Linked sources", text: "Follow the references to check the research behind an article.", icon: BookOpen },
  { title: "Research in context", text: "Ingredient studies and product claims require different kinds of evidence.", icon: Scale },
  { title: "Dates shown", text: "Check publication and update dates when reading about evolving research.", icon: Calendar },
  { title: "Clear disclosures", text: "Commercial content identifies affiliate links and explains what was evaluated.", icon: Info },
];

export function TrustSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-serif font-bold text-slate-900">How we publish</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">Understand the sources, limits and funding behind what you read.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <Icon className="mb-4 h-7 w-7 text-blue-700" />
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-slate-900 p-8 text-white">
          <h3 className="text-xl font-semibold">Metabolic Science Editorial</h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-300">We use AI tools to help research and prepare educational content. We do not claim that our articles have been independently reviewed by a physician. Medical decisions belong with your qualified healthcare professional.</p>
          <Link href="/editorial-policy/" className="mt-5 inline-block font-medium text-blue-200 underline underline-offset-4">Read our editorial policy →</Link>
        </div>
      </div>
    </section>
  );
}
