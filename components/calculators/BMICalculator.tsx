"use client";

import { useState } from "react";
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
      color = "text-emerald-600";
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

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all";

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
      <div className="flex items-center gap-2.5 mb-8">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 border border-blue-100">
          <Calculator className="w-5 h-5 text-blue-700" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">BMI Calculator</h2>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Unit System</label>
        <div className="flex gap-2">
          <button
            onClick={() => setUnit("metric")}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
              unit === "metric"
                ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
            }`}
          >
            Metric (kg, cm)
          </button>
          <button
            onClick={() => setUnit("imperial")}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
              unit === "imperial"
                ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
            }`}
          >
            Imperial (lbs, in)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Height ({unit === "metric" ? "cm" : "inches"})
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={unit === "metric" ? "175" : "69"}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Weight ({unit === "metric" ? "kg" : "lbs"})
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === "metric" ? "70" : "154"}
            className={inputClass}
          />
        </div>
      </div>

      <button
        onClick={calculateBMI}
        className="w-full py-3.5 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors shadow-sm text-sm"
      >
        Calculate BMI
      </button>

      {result && (
        <div className="mt-8 py-6 px-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
          <div className="text-5xl font-bold text-gray-900">{result.bmi}</div>
          <div className={`text-lg font-semibold mt-2 ${result.color}`}>{result.category}</div>
          <p className="text-gray-500 text-sm mt-2">{result.description}</p>
        </div>
      )}
    </div>
  );
}
