import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthorBio } from "@/components/eeat/AuthorBio";
import { getAuthorBySlug } from "@/lib/content";
import { Award, BookOpen, GraduationCap, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Metabolic Health Authority's mission, editorial standards, and the medical professionals behind our content.",
  alternates: {
    canonical: "https://metabolichealthauthority.com/about",
  },
};

export default function AboutPage() {
  const medicalDirector = getAuthorBySlug("sarah-mitchell")!;
  const endocrinologist = getAuthorBySlug("james-chen")!;
  const writer = getAuthorBySlug("emily-rodriguez")!;

  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-[var(--primary-light)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-[var(--gray-900)] mb-4">About Us</h1>
              <p className="text-lg text-[var(--gray-700)]">
                Dedicated to providing accurate, evidence-based information on weight loss, 
                metabolism, and metabolic health medications.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[var(--gray-900)] mb-6">Our Mission</h2>
              <p className="text-[var(--gray-700)] mb-4 leading-relaxed">
                Metabolic Health Authority was founded with a clear mission: to bridge the gap 
                between complex medical research and the people who need it most. In an era of 
                misinformation and conflicting advice, we provide a trusted source of 
                evidence-based guidance on weight management and metabolic health.
              </p>
              
              <p className="text-[var(--gray-700)] mb-4 leading-relaxed">
                We believe that everyone deserves access to accurate medical information 
                presented in clear, understandable language. Our content is rigorously 
                researched, medically reviewed, and regularly updated to reflect the latest 
                scientific developments.
              </p>

              <p className="text-[var(--gray-700)] leading-relaxed">
                While we provide comprehensive information about medications like semaglutide 
                (Ozempic, Wegovy), tirzepatide (Mounjaro), and other GLP-1 therapies, we 
                emphasize that medical decisions should always be made in consultation with 
                qualified healthcare providers.
              </p>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 bg-[var(--gray-100)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gray-900)] text-center mb-12">What Sets Us Apart</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border border-[var(--gray-300)]">
                <Shield className="w-8 h-8 text-[var(--primary)] mb-4" />
                <h3 className="font-bold text-[var(--gray-900)] mb-2">Medical Review</h3>
                <p className="text-sm text-[var(--gray-700)]">
                  Every article is reviewed by board-certified physicians before publication.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[var(--gray-300)]">
                <BookOpen className="w-8 h-8 text-[var(--secondary)] mb-4" />
                <h3 className="font-bold text-[var(--gray-900)] mb-2">Evidence-Based</h3>
                <p className="text-sm text-[var(--gray-700)]">
                  Content based on peer-reviewed studies and clinical guidelines.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[var(--gray-300)]">
                <GraduationCap className="w-8 h-8 text-[var(--lavender)] mb-4" />
                <h3 className="font-bold text-[var(--gray-900)] mb-2">Expert Authors</h3>
                <p className="text-sm text-[var(--gray-700)]">
                  Written by medical professionals and certified health writers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[var(--gray-300)]">
                <Award className="w-8 h-8 text-[var(--success)] mb-4" />
                <h3 className="font-bold text-[var(--gray-900)] mb-2">Regular Updates</h3>
                <p className="text-sm text-[var(--gray-700)]">
                  Content reviewed and updated as new research emerges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <Users className="w-6 h-6 text-[var(--primary)]" />
                <h2 className="text-3xl font-bold text-[var(--gray-900)]">Our Medical Team</h2>
              </div>

              <div className="space-y-6">
                <AuthorBio author={medicalDirector} />
                <AuthorBio author={endocrinologist} />
                <AuthorBio author={writer} />
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Standards */}
        <section className="py-16 bg-[var(--gray-100)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[var(--gray-900)] mb-6">Editorial Standards</h2>
              
              <p className="text-[var(--gray-700)] mb-6">
                We adhere to the highest standards of medical publishing. Our editorial process 
                ensures accuracy, objectivity, and transparency:
              </p>

              <ul className="space-y-4 text-[var(--gray-700)]">
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--primary)]">1.</span>
                  <span>
                    <strong>Rigorous Research:</strong> Articles are based on peer-reviewed 
                    studies, clinical guidelines, and authoritative medical sources.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--primary)]">2.</span>
                  <span>
                    <strong>Medical Review:</strong> Board-certified physicians review all 
                    content for medical accuracy and safety.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--primary)]">3.</span>
                  <span>
                    <strong>Regular Updates:</strong> Content is reviewed quarterly and 
                    updated when new evidence emerges.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--primary)]">4.</span>
                  <span>
                    <strong>Transparency:</strong> We clearly disclose our sources, 
                    author credentials, and any potential conflicts of interest.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--primary)]">5.</span>
                  <span>
                    <strong>Patient Safety:</strong> We emphasize that our content is 
                    informational and not a substitute for professional medical advice.
                  </span>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-[var(--primary-light)] rounded-lg border border-[var(--primary)]">
                <p className="text-sm text-[var(--gray-700)]">
                  <strong>Learn more:</strong> Read our full{" "}
                  <a href="/editorial-policy" className="text-[var(--primary)] underline">
                    Editorial Policy
                  </a>{" "}
                  for detailed information about our content creation process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
