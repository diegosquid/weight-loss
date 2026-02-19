import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            Metabolic Science
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/glp1" className="text-gray-600 hover:text-primary">
              GLP-1
            </Link>
            <Link href="/metabolism" className="text-gray-600 hover:text-primary">
              Metabolism
            </Link>
            <Link href="/supplements" className="text-gray-600 hover:text-primary">
              Supplements
            </Link>
            <Link href="/tools" className="text-gray-600 hover:text-primary">
              Tools
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Understanding Your Metabolism
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Evidence-based insights on weight loss medications, GLP-1 therapies, 
            and metabolic health. Medically reviewed and scientifically accurate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/glp1"
              className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition"
            >
              Explore GLP-1 Guide
            </Link>
            <Link 
              href="/tools/bmi-calculator"
              className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg font-medium hover:bg-primary-light transition"
            >
              Try Our Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "GLP-1 Medications", desc: "Semaglutide, tirzepatide, and more", href: "/glp1" },
            { title: "Metabolism Science", desc: "How your body burns energy", href: "/metabolism" },
            { title: "Supplements", desc: "Evidence-based recommendations", href: "/supplements" },
            { title: "Health Tools", desc: "Calculators and assessments", href: "/tools" },
          ].map((cat) => (
            <Link 
              key={cat.title}
              href={cat.href}
              className="p-6 border border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{cat.title}</h3>
              <p className="text-gray-600 text-sm">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Why Trust Our Content?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-2">✓</div>
              <h3 className="font-semibold mb-2">Medically Reviewed</h3>
              <p className="text-gray-600 text-sm">All content reviewed by licensed physicians</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold mb-2">Evidence-Based</h3>
              <p className="text-gray-600 text-sm">Citations from peer-reviewed studies</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🔄</div>
              <h3 className="font-semibold mb-2">Regularly Updated</h3>
              <p className="text-gray-600 text-sm">Content updated with latest research</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Metabolic Science</h4>
              <p className="text-gray-400 text-sm">
                Evidence-based information on metabolic health and weight management.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Topics</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/glp1" className="hover:text-white">GLP-1 Drugs</Link></li>
                <li><Link href="/metabolism" className="hover:text-white">Metabolism</Link></li>
                <li><Link href="/supplements" className="hover:text-white">Supplements</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tools</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/tools/bmi-calculator" className="hover:text-white">BMI Calculator</Link></li>
                <li><Link href="/tools/calorie-calculator" className="hover:text-white">Calorie Calculator</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/editorial-policy" className="hover:text-white">Editorial Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2026 Metabolic Science. All content is for informational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
