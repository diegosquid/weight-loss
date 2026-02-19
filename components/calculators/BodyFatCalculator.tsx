"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Ruler } from "lucide-react";

interface BodyFatResult {
  bodyFat: number;
  category: string;
  color: string;
  leanMass: number;
  fatMass: number;
}

const genderCategories = {
  male: [
    { max: 6, label: "Essential Fat", color: "text-blue-600" },
    { max: 14, label: "Athletic", color: "text-green-600" },
    { max: 18, label: "Fit", color: "text-teal-600" },
    { max: 25, label: "Average", color: "text-amber-600" },
    { max: 100, label: "Above Average", color: "text-red-600" },
  ],
  female: [
    { max: 14, label: "Essential Fat", color: "text-blue-600" },
    { max: 21, label: "Athletic", color: "text-green-600" },
    { max: 25, label: "Fit", color: "text-teal-600" },
    { max: 32, label: "Average", color: "text-amber-600" },
    { max: 100, label: "Above Average", color: "text-red-600" },
  ],
};

export function BodyFatCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState<BodyFatResult | null>(null);

  const calculateBodyFat = () => {
    const w = parseFloat(weight);
    const waistCm = unit === "metric" ? parseFloat(waist) : parseFloat(waist) * 2.54;
    const neckCm = unit === "metric" ? parseFloat(neck) : parseFloat(neck) * 2.54;
    const hipCm = hip ? (unit === "metric" ? parseFloat(hip) : parseFloat(hip) * 2.54) : 0;

    if (!w || !waistCm || !neckCm) return;

    let bodyFat: number;

    // US Navy Method
    if (gender === "male") {
      bodyFat =
        495 /
          (1.0324 -
            0.19077 * Math.log10(waistCm - neckCm) +
            0.15456 * Math.log10(unit === "metric" ? w : w * 0.453592)) -
        450;
    } else {
      if (!hipCm) return;
      bodyFat =
        495 /
          (1.29579 -
            0.35004 * Math.log10(waistCm + hipCm - neckCm) +
            0.221 * Math.log10(unit === "metric" ? w : w * 0.453592)) -
        450;
    }

    bodyFat = Math.max(2, Math.min(60, bodyFat)); // Clamp values
    bodyFat = Math.round(bodyFat * 10) / 10;

    const weightKg = unit === "metric" ? w : w * 0.453592;
    const fatMass = Math.round(weightKg * (bodyFat / 100) * 10) / 10;
    const leanMass = Math.round((weightKg - fatMass) * 10) / 10;

    const categories = genderCategories[gender];
    const category = categories.find((c) => bodyFat <= c.max) || categories[categories.length - 1];

    setResult({
      bodyFat,
      category: category.label,
      color: category.color,
      leanMass,
      fatMass,
    });
  };

  return (
    <div className="bg-white rounded-xl border border-[var(--gray-300)] p-6">
      <div className="flex items-center gap-2 mb-6">
        <Ruler className="w-6 h-6 text-[var(--lavender)]" />
        <h2 className="text-xl font-bold text-[var(--gray-900)]">Body Fat Calculator</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value as "male" | "female")}
            className="w-full px-4 py-2 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] outline-none"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">Unit</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value as "metric" | "imperial")}
            className="w-full px-4 py-2 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] outline-none"
          >
            <option value="metric">Metric (cm, kg)</option>
            <option value="imperial">Imperial (inches, lbs)</option>
          </select>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">Weight ({unit === "metric" ? "kg" : "lbs"})</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === "metric" ? "70" : "154"}
            className="w-full px-4 py-2 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">Waist ({unit === "metric" ? "cm" : "in"})</label>
            <input
              type="number"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              placeholder={unit === "metric" ? "80" : "31"}
              className="w-full px-4 py-2 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">Neck ({unit === "metric" ? "cm" : "in"})</label>
            <input
              type="number"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
              placeholder={unit === "metric" ? "38" : "15"}
              className="w-full px-4 py-2 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] outline-none"
            />
          </div>
        </div>

        {gender === "female" && (
          <div>
            <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">Hip ({unit === "metric" ? "cm" : "in"})</label>
            <input
              type="number"
              value={hip}
              onChange={(e) => setHip(e.target.value)}
              placeholder={unit === "metric" ? "100" : "39"}
              className="w-full px-4 py-2 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] outline-none"
            />
          </div>
        )}
      </div>

      <button
        onClick={calculateBodyFat}
        className="w-full py-3 rounded-lg bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-dark)] transition-colors"
      >
        Calculate Body Fat
      </button>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="text-center p-6 rounded-lg bg-[var(--gray-100)] border border-[var(--gray-300)]">
            <div className="text-sm text-[var(--gray-700)] mb-1">Body Fat Percentage</div>
            <div className="text-5xl font-bold text-[var(--gray-900)]">{result.bodyFat}%</div>
            <div className={cn("text-lg font-semibold mt-2", result.color)}>
              {result.category}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[var(--primary-light)] text-center">
              <div className="text-sm text-[var(--gray-700)]">Lean Mass</div>
              <div className="text-2xl font-bold text-[var(--primary)]">{result.leanMass} kg</div>
            </div>
            <div className="p-4 rounded-lg bg-[var(--coral)]/10 text-center">
              <div className="text-sm text-[var(--gray-700)]">Fat Mass</div>
              <div className="text-2xl font-bold text-[var(--coral)]">{result.fatMass} kg</div>
            </div>
          </div>

          <div className="text-xs text-[var(--gray-500)] p-3 bg-amber-50 rounded-lg border border-amber-200">
            <strong>Note:</strong> This calculator uses the US Navy method, which provides an estimate. 
            For accurate measurements, consider DEXA scans, hydrostatic weighing, or professional caliper testing.
          </div>
        </div>
      )}
    </div>
  );
}
