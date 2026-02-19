import { Metadata } from "next";
import { CalorieCalculator } from "@/components/calculators/CalorieCalculator";

export const metadata: Metadata = {
  title: "Calorie Calculator",
  description:
    "Calculate your daily calorie needs using the Mifflin-St Jeor equation. Includes BMR and TDEE calculations.",
  alternates: {
    canonical: "https://metabolicscience.org/calculators/calorie",
  },
};

export default function CalorieCalculatorPage() {
  return (
    <>
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[var(--gray-900)] mb-2">Calorie Calculator</h1>
              <p className="text-[var(--gray-700)]">
                Calculate your daily calorie needs based on your goals
              </p>
            </div>

            <CalorieCalculator />

            <div className="mt-8 p-4 bg-[var(--gray-100)] rounded-lg border border-[var(--gray-300)]">
              <h2 className="font-semibold text-[var(--gray-900)] mb-2">About This Calculator</h2>
              <p className="text-sm text-[var(--gray-700)] mb-2">
                This calculator uses the Mifflin-St Jeor equation, which is considered the 
                most accurate formula for estimating Basal Metabolic Rate (BMR).
              </p>
              <ul className="text-sm text-[var(--gray-700)] list-disc list-inside space-y-1">
                <li><strong>BMR:</strong> Calories burned at complete rest</li>
                <li><strong>TDEE:</strong> Total daily energy expenditure with activity</li>
                <li><strong>Safe deficit:</strong> 500 calories/day for 1 lb/week loss</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
