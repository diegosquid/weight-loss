"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Calculator } from "lucide-react";

interface BMIData {
  bmi: number;
  category: string;
  color: string;
  description: string;
}

export function BMICalculator() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<BMIData | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w) return;

    let bmi: number;
    if (unit === "metric") {
      bmi = w / Math.pow(h / 100, 2);
    } else {
      bmi = (w / Math.pow(h, 2)) * 703;
    }

    bmi = Math.round(bmi * 10) / 10;

    let category: string;
    let color: string;
    let description: string;

    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-blue-600";
      description = "You may need to gain weight. Consult a healthcare provider.";
    } else if (bmi < 25) {
      category = "Normal weight";
      color = "text-green-600";
      description = "Your BMI is in the healthy range.";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-amber-600";
      description = "You may benefit from weight management strategies.";
    } else {
      category = "Obese";
      color = "text-red-600";
      description = "Weight loss is recommended for health benefits.";
    }

    setResult({ bmi, category, color, description });
  };

  return (
    <div className="bg-white rounded-xl border border-[var(--gray-300)] p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-6 h-6 text-[var(--primary)]" />
        <h2 className="text-xl font-bold text-[var(--gray-900)]">BMI Calculator</h2>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">
          Unit System
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => setUnit("metric")}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              unit === "metric"
                ? "bg-[var(--primary)] text-white"
                : "bg-[var(--gray-100)] text-[var(--gray-700)] hover:bg-[var(--gray-300)]"
            )}
          >
            Metric (kg, cm)
          </button>
          <button
            onClick={() => setUnit("imperial")}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              unit === "imperial"
                ? "bg-[var(--primary)] text-white"
                : "bg-[var(--gray-100)] text-[var(--gray-700)] hover:bg-[var(--gray-300)]"
            )}
          >
            Imperial (lbs, inches)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">
            Height ({unit === "metric" ? "cm" : "inches"})
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={unit === "metric" ? "175" : "69"}
            className="w-full px-4 py-2 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">
            Weight ({unit === "metric" ? "kg" : "lbs"})
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === "metric" ? "70" : "154"}
            className="w-full px-4 py-2 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)] outline-none"
          />
        </div>
      </div>

      <button
        onClick={calculateBMI}
        className="w-full py-3 rounded-lg bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-dark)] transition-colors"
      >
        Calculate BMI
      </button>

      {result && (
        <div className="mt-6 p-4 rounded-lg bg-[var(--gray-100)] border border-[var(--gray-300)]">
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-[var(--gray-900)]">{result.bmi}</div>
            <div className={cn("text-lg font-semibold mt-1", result.color)}>
              {result.category}
            </div>
          </div>
          <p className="text-center text-[var(--gray-700)]">{result.description}</p>

          <div className="mt-4 pt-4 border-t border-[var(--gray-300)]">
            <div className="text-xs text-[var(--gray-500)]">
              <div className="flex justify-between mb-1">
                <span>Underweight</span>
                <span>< 18.5</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Normal</span>
                <span>18.5 - 24.9</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Overweight</span>
                <span>25 - 29.9</span>
              </div>
              <div className="flex justify-between">
                <span>Obese</span>
                <span>≥ 30</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
