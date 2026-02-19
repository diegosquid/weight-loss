import { Metadata } from "next";
import { BodyFatCalculator } from "@/components/calculators/BodyFatCalculator";

export const metadata: Metadata = {
  title: "Body Fat Calculator",
  description:
    "Estimate your body fat percentage using the US Navy method. Includes lean mass and fat mass calculations.",
  alternates: {
    canonical: "https://metabolicscience.org/calculators/body-fat",
  },
};

export default function BodyFatCalculatorPage() {
  return (
    <>
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[var(--gray-900)] mb-2">Body Fat Calculator</h1>
              <p className="text-[var(--gray-700)]">
                Estimate your body fat percentage using the US Navy method
              </p>
            </div>

            <BodyFatCalculator />

            <div className="mt-8 p-4 bg-[var(--gray-100)] rounded-lg border border-[var(--gray-300)]">
              <h2 className="font-semibold text-[var(--gray-900)] mb-2">How to Measure</h2>
              <ul className="text-sm text-[var(--gray-700)] space-y-2">
                <li><strong>Waist:</strong> Measure at the navel level, relaxed</li>
                <li><strong>Neck:</strong> Measure below the larynx (Adam's apple)</li>
                <li><strong>Hip (women only):</strong> Measure at the widest part of hips/buttocks</li>
              </ul>
              <p className="text-sm text-[var(--gray-700)] mt-3">
                For best results, measure in the morning before eating. This method has an 
                accuracy of approximately ±3% compared to DEXA scans.
              </p>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
