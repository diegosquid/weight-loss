"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Flame } from "lucide-react";

interface CalorieResult {
  bmr: number;
  tdee: number;
  targets: {
    maintain: number;
    mildLoss: number;
    loss: number;
    extremeLoss: number;
  };
}

const activityLevels = [
  { value: 1.2, label: "Sedentary", description: "Little to no exercise" },
  { value: 1.375, label: "Lightly Active", description: "1-3 days/week exercise" },
  { value: 1.55, label: "Moderately Active", description: "3-5 days/week exercise" },
  { value: 1.725, label: "Very Active", description: "6-7 days/week exercise" },
  { value: 1.9, label: "Extra Active", description: "Physical job or 2x training" },
];

export function CalorieCalculator() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState(1.2);
  const [result, setResult] = useState<CalorieResult | null>(null);

  const calculateCalories = () => {
    const a = parseFloat(age);
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!a || !h || !w) return;

    let weightKg = unit === "metric" ? w : w * 0.453592;
    let heightCm = unit === "metric" ? h : h * 2.54;

    // Mifflin-St Jeor Equation
    let bmr = 10 * weightKg + 6.25 * heightCm - 5 * a;
    bmr = gender === "male" ? bmr + 5 : bmr - 161;
    bmr = Math.round(bmr);

    const tdee = Math.round(bmr * activity);

    setResult({
      bmr,
      tdee,
      targets: {
        maintain: tdee,
        mildLoss: tdee - 250,
        loss: tdee - 500,
        extremeLoss: tdee - 1000,
      },
    });
  };

  return (
    <div className="bg-white rounded-xl border border-[var(--gray-300)] p-6">
      <div className="flex items-center gap-2 mb-6">
        <Flame className="w-6 h-6 text-[var(--coral)]" />
        <h2 className="text-xl font-bold text-[var(--gray-900)]">Calorie Calculator</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">Unit</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value as "metric" | "imperial")}
            className="w-full px-4 py-2 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] outline-none"
          >
            <option value="metric">Metric (kg, cm)</option>
            <option value="imperial">Imperial (lbs, inches)</option>
          </select>
        </div>
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
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="30"
            className="w-full px-4 py-2 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">Height</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={unit === "metric" ? "175" : "69"}
            className="w-full px-4 py-2 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">Weight</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === "metric" ? "70" : "154"}
            className="w-full px-4 py-2 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] outline-none"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">Activity Level</label>
        <select
          value={activity}
          onChange={(e) => setActivity(parseFloat(e.target.value))}
          className="w-full px-4 py-2 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] outline-none"
        >
          {activityLevels.map((level) => (
            <option key={level.value} value={level.value}>
              {level.label} - {level.description}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={calculateCalories}
        className="w-full py-3 rounded-lg bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-dark)] transition-colors"
      >
        Calculate Calories
      </button>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[var(--primary-light)] text-center">
              <div className="text-sm text-[var(--gray-700)]">BMR</div>
              <div className="text-2xl font-bold text-[var(--primary)]">{result.bmr}</div>
              <div className="text-xs text-[var(--gray-500)]">calories/day</div>
            </div>
            <div className="p-4 rounded-lg bg-[var(--secondary-light)] text-center">
              <div className="text-sm text-[var(--gray-700)]">TDEE</div>
              <div className="text-2xl font-bold text-[var(--secondary)]">{result.tdee}</div>
              <div className="text-xs text-[var(--gray-500)]">calories/day</div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[var(--gray-100)] border border-[var(--gray-300)]">
            <h3 className="font-semibold text-[var(--gray-900)] mb-3">Daily Calorie Targets</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[var(--gray-700)]">Maintain Weight</span>
                <span className="font-semibold">{result.targets.maintain} cal</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--gray-700)]">Mild Weight Loss (0.5 lb/week)</span>
                <span className="font-semibold text-[var(--secondary)]">{result.targets.mildLoss} cal</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--gray-700)]">Weight Loss (1 lb/week)</span>
                <span className="font-semibold text-[var(--primary)]">{result.targets.loss} cal</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--gray-700)]">Extreme Loss (2 lb/week)</span>
                <span className="font-semibold text-[var(--coral)]">{result.targets.extremeLoss} cal</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
