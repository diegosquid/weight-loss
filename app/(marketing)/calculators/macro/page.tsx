import { Metadata } from "next";
import { MacroCalculator } from "@/components/calculators/MacroCalculator";

export const metadata: Metadata = {
  title: "Macro Calculator",
  description:
    "Calculate your optimal macronutrient intake for weight loss, maintenance, or muscle gain.",
  alternates: {
    canonical: "https://metabolichealthauthority.com/calculators/macro",
  },
};

export default function MacroCalculatorPage() {
  return (
    <>
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[var(--gray-900)] mb-2">Macro Calculator</h1>
              <p className="text-[var(--gray-700)]">
                Calculate optimal protein, carbs, and fats for your goals
              </p>
            </div>

            <MacroCalculator />

            <div className="mt-8 p-4 bg-[var(--gray-100)] rounded-lg border border-[var(--gray-300)]">
              <h2 className="font-semibold text-[var(--gray-900)] mb-2">Macro Ratios Explained</h2>
              <ul className="text-sm text-[var(--gray-700)] space-y-2">
                <li><strong>Balanced:</strong> Good for general health and sustainable weight management</li>
                <li><strong>Low Carb:</strong> Higher protein and fat for satiety and blood sugar control</li>
                <li><strong>High Carb:</strong> Ideal for athletes and high-intensity training</li>
                <li><strong>Ketogenic:</strong> Very low carb for ketosis and specific therapeutic uses</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
