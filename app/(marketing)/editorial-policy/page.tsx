import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, CheckCircle, RefreshCw, Shield, Users, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "Our commitment to accuracy, transparency, and medical integrity. Learn about our editorial process and standards.",
  alternates: {
    canonical: "https://metabolichealthauthority.com/editorial-policy",
  },
};

export default function EditorialPolicyPage() {
  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-[var(--secondary-light)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="w-12 h-12 text-[var(--secondary)] mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-[var(--gray-900)] mb-4">Editorial Policy</h1>
              <p className="text-lg text-[var(--gray-700)]">
                Our commitment to accuracy, transparency, and medical integrity
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-4">Overview</h2>
                <p className="text-[var(--gray-700)] mb-4">
                  Metabolic Health Authority is dedicated to providing accurate, evidence-based 
                  medical information about weight loss, metabolism, and related medications. 
                  This editorial policy outlines our standards and processes to ensure the 
                  highest quality content.
                </p>
                <p className="text-[var(--gray-700)]">
                  We adhere to principles of medical publishing ethics, transparency, and 
                  patient safety. All content is created with the understanding that readers 
                  may use this information to make important health decisions.
                </p>
              </div>

              {/* Medical Review Process */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-6 h-6 text-[var(--primary)]" />
                  <h2 className="text-2xl font-bold text-[var(--gray-900)]">Medical Review Process</h2>
                </div>
                
                <p className="text-[var(--gray-700)] mb-4">
                  Every article published on Metabolic Health Authority undergoes a rigorous 
                  medical review process:
                </p>

                <ol className="space-y-4 text-[var(--gray-700)] list-decimal list-inside">
                  <li>
                    <strong>Initial Research:</strong> Writers conduct comprehensive 
                    research using peer-reviewed journals, clinical guidelines, and 
                    authoritative medical sources.
                  </li>
                  <li>
                    <strong>Draft Creation:</strong> Content is written by qualified 
                    medical writers or healthcare professionals with expertise in the subject.
                  </li>
                  <li>
                    <strong>Medical Review:</strong> A board-certified physician reviews 
                    the content for medical accuracy, completeness, and safety.
                  </li>
                  <li>
                    <strong>Fact-Checking:</strong> All medical claims, statistics, and 
                    references are verified against primary sources.
                  </li>
                  <li>
                    <strong>Editorial Review:</strong> Content is reviewed for clarity, 
                    tone, and accessibility to ensure it meets our standards.
                  </li>
                  <li>
                    <strong>Publication:</strong> Once approved, content is published 
                    with clear attribution and review dates.
                  </li>
                </ol>
              </div>

              {/* Source Standards */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-6 h-6 text-[var(--secondary)]" />
                  <h2 className="text-2xl font-bold text-[var(--gray-900)]">Source Standards</h2>
                </div>

                <p className="text-[var(--gray-700)] mb-4">We prioritize the following sources, in order of preference:</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-green-900">Preferred Sources</strong>
                      <ul className="mt-2 text-sm text-green-800 space-y-1">
                        <li>Peer-reviewed medical journals (PubMed indexed)</li>
                        <li>Clinical practice guidelines (ADA, AACE, Obesity Society)</li>
                        <li>FDA prescribing information and safety communications</li>
                        <li>CDC and NIH publications</li>
                        <li>Cochrane systematic reviews</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-red-900">Sources We Avoid</strong>
                      <ul className="mt-2 text-sm text-red-800 space-y-1">
                        <li>Unverified health blogs or websites</li>
                        <li>Social media posts or influencer content</li>
                        <li>Press releases without peer review</li>
                        <li>Single studies with small sample sizes (unless groundbreaking)</li>
                        <li>Sources with clear commercial bias</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Updates */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <RefreshCw className="w-6 h-6 text-[var(--lavender)]" />
                  <h2 className="text-2xl font-bold text-[var(--gray-900)]">Content Updates</h2>
                </div>

                <p className="text-[var(--gray-700)] mb-4">
                  Medical knowledge evolves continuously. We maintain content freshness through:
                </p>

                <ul className="space-y-3 text-[var(--gray-700)]">
                  <li className="flex gap-2">
                    <span className="font-bold text-[var(--primary)]">•</span>
                    <span>
                      <strong>Quarterly Reviews:</strong> All articles are reviewed every 
                      3 months for accuracy and relevance.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[var(--primary)]">•</span>
                    <span>
                      <strong>Breaking Updates:</strong> Urgent updates (FDA warnings, 
                      new safety data) are published within 48 hours.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[var(--primary)]">•</span>
                    <span>
                      <strong>Annual Audits:</strong> Comprehensive content audits 
                      ensure all information reflects current medical consensus.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[var(--primary)]">•</span>
                    <span>
                      <strong>Date Stamping:</strong> All articles display original 
                      publication and last review dates.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Corrections */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-4">Corrections Policy</h2>

                <p className="text-[var(--gray-700)] mb-4">
                  Despite our rigorous process, errors may occur. When identified:
                </p>

                <ol className="space-y-3 text-[var(--gray-700)] list-decimal list-inside">
                  <li>
                    Factual errors are corrected within 24 hours of identification
                  </li>
                  <li>
                    A correction notice is added to the article indicating what was changed
                  </li>
                  <li>
                    Significant corrections are noted in our corrections log
                  </li>
                  <li>
                    Readers can report errors via our contact form
                  </li>
                </ol>
              </div>

              {/* Advertising & Funding */}
              <div className="p-6 bg-[var(--gray-100)] rounded-xl border border-[var(--gray-300)]">
                <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-4">Advertising & Funding</h2>

                <p className="text-[var(--gray-700)] mb-4">
                  Metabolic Health Authority is funded through:
                </p>

                <ul className="space-y-2 text-[var(--gray-700)]">
                  <li>• Display advertising (clearly marked)</li>
                  <li>• Affiliate partnerships (disclosed in content)</li>
                  <li>• Sponsored content (rare, clearly labeled)</li>
                </ul>

                <div className="mt-4 p-4 bg-[var(--primary-light)] rounded-lg">
                  <p className="text-sm text-[var(--gray-700)]">
                    <strong>Important:</strong> Our editorial content is never influenced by 
                    advertisers or sponsors. Medical reviews are conducted independently of 
                    funding sources. We do not accept payment for positive coverage of any 
                    medication, product, or service.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-4">Contact Us</h2>

                <p className="text-[var(--gray-700)]">
                  Questions about our editorial policy? Concerns about content accuracy? 
                  Please contact us at{" "}
                  <a href="mailto:editorial@metabolichealthauthority.com" className="text-[var(--primary)] underline">
                    editorial@metabolichealthauthority.com
                  </a>
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
