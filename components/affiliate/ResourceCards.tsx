import Link from "next/link";
export function ResourceCards({ source }: { source: "home" | "resources" }) {
  return <div className="grid gap-6 md:grid-cols-2">
    {[
      { path: "plant-based-cookbook-review", label: "Cooking & meal planning", title: "Is a plant-based cookbook useful for you?", description: "Compare the basic cookbook and bundle, checkout extras, limitations and free recipe sources." },
      { path: "fitin56-review", label: "Home exercise", title: "FITin56: plans, billing and practical limits", description: "Understand recurring versus fixed-term access, questions to ask the seller and free exercise alternatives." },
    ].map(item => <article key={item.path} className="rounded-2xl border border-slate-200 bg-white p-7">
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{item.label}</p>
      <h3 className="mt-3 text-xl font-serif font-bold text-slate-900"><Link className="hover:underline" href={`/metabolism/${item.path}/?source=${source}`}>{item.title}</Link></h3>
      <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
      <Link className="mt-5 inline-flex min-h-11 items-center font-semibold text-blue-800 underline underline-offset-4" href={`/metabolism/${item.path}/?source=${source}`}>Read the product assessment →</Link>
    </article>)}
  </div>;
}
