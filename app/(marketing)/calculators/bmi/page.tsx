import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BMICalculator } from "@/components/calculators/BMICalculator";

export const metadata: Metadata = {
  title: "BMI Calculator",
  description:
    "Calculate your Body Mass Index (BMI) to understand your weight category and health risks.",
  alternates: {
    canonical: "https://metabolichealthauthority.com/calculators/bmi",
  },
};

export default function BMICalculatorPage() {
  return (
    <>
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[var(--gray-900)] mb-2">BMI Calculator</h1>
              <p className="text-[var(--gray-700)]">
                Calculate your Body Mass Index to understand your weight category
              </p>
            </div>

            <BMICalculator />

            <div className="mt-8 p-4 bg-[var(--gray-100)] rounded-lg border border-[var(--gray-300)]">
              <h2 className="font-semibold text-[var(--gray-900)] mb-2">About BMI</h2>
              <p className="text-sm text-[var(--gray-700)] mb-2">
                Body Mass Index (BMI) is a screening tool that estimates body fat based on 
                height and weight. While widely used, it has limitations and should be 
                considered alongside other health metrics.
              </p>
              <p className="text-sm text-[var(--gray-700)]">
                <strong>Note:</strong> BMI does not distinguish between muscle and fat, 
                and may not accurately reflect health status for athletes, elderly individuals, 
                or certain ethnic groups.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
