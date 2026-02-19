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
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-900">BMI Calculator</h2>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Unit System
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => setUnit("metric")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              unit === "metric"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Metric (kg, cm)
          </button>
          <button
            onClick={() => setUnit("imperial")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              unit === "imperial"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Imperial (lbs, inches)
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Height ({unit === "metric" ? "cm" : "inches"})
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={unit === "metric" ? "175" : "69"}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Weight ({unit === "metric" ? "kg" : "lbs"})
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === "metric" ? "70" : "154"}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <button
        onClick={calculateBMI}
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Calculate BMI
      </button>

      {result && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">{result.bmi}</div>
            <div className={`text-lg font-semibold ${result.color} mb-2`}>
              {result.category}
            </div>
            <p className="text-gray-600 text-sm">{result.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
