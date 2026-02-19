"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Beef, Wheat as WheatIcon, Droplets } from "lucide-react";

interface MacroResult {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  fiber: number;
}

const goals = [
  { value: "maintain", label: "Maintain Weight", multiplier: 1 },
  { value: "mild-loss", label: "Mild Fat Loss", multiplier: 0.9 },
  { value: "loss", label: "Fat Loss", multiplier: 0.8 },
  { value: "gain", label: "Muscle Gain", multiplier: 1.1 },
];

const ratios = [
  { value: "balanced", label: "Balanced", p: 0.3, c: 0.4, f: 0.3 },
  { value: "low-carb", label: "Low Carb", p: 0.4, c: 0.2, f: 0.4 },
  { value: "high-carb", label: "High Carb", p: 0.25, c: 0.55, f: 0.2 },
  { value: "keto", label: "Ketogenic", p: 0.25, c: 0.05, f: 0.7 },
];

export function MacroCalculator() {
  const [calories, setCalories] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("maintain");
  const [ratio, setRatio] = useState("balanced");
  const [result, setResult] = useState<MacroResult | null>(null);

  const calculateMacros = () => {
    const cal = parseFloat(calories);
    const wt = parseFloat(weight);

    if (!cal) return;

    const selectedGoal = goals.find((g) => g.value === goal)!;
    const selectedRatio = ratios.find((r) => r.value === ratio)!;

    const targetCalories = Math.round(cal * selectedGoal.multiplier);

    // Calculate macros in grams
    const protein = Math.round((targetCalories * selectedRatio.p) / 4);
    const carbs = Math.round((targetCalories * selectedRatio.c) / 4);
    const fats = Math.round((targetCalories * selectedRatio.f) / 9);
    const fiber = wt ? Math.round(wt * 0.35) : 30; // 0.35g per kg bodyweight or default 30g

    setResult({
      calories: targetCalories,
      protein,
      carbs,
      fats,
      fiber,
    });
  };

  return (
    <div className="bg-white rounded-xl border border-[var(--gray-300)] p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="flex">
          <Beef className="w-5 h-5 text-red-500" />
          <WheatIcon className="w-5 h-5 text-amber-500 -ml-1" />
          <Droplets className="w-5 h-5 text-yellow-500 -ml-1" />
        </div>
        <h2 className="text-xl font-bold text-[var(--gray-900)]">Macro Calculator</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">Daily Calories</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="2000"
            className="w-full px-4 py-2 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">Body Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="70"
            className="w-full px-4 py-2 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] outline-none"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">Goal</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {goals.map((g) => (
            <button
              key={g.value}
              onClick={() => setGoal(g.value)}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors text-center",
                goal === g.value
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--gray-100)] text-[var(--gray-700)] hover:bg-[var(--gray-300)]"
              )}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">Macro Ratio</label>
        <div className="grid grid-cols-2 gap-2">
          {ratios.map((r) => (
            <button
              key={r.value}
              onClick={() => setRatio(r.value)}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors text-center",
                ratio === r.value
                  ? "bg-[var(--secondary)] text-white"
                  : "bg-[var(--gray-100)] text-[var(--gray-700)] hover:bg-[var(--gray-300)]"
              )}
            >
              {r.label}
              <span className="block text-xs opacity-80">
                P:{Math.round(r.p * 100)}% C:{Math.round(r.c * 100)}% F:{Math.round(r.f * 100)}%
              </span>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={calculateMacros}
        className="w-full py-3 rounded-lg bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-dark)] transition-colors"
      >
        Calculate Macros
      </button>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="text-center p-4 rounded-lg bg-[var(--gray-100)]">
            <div className="text-sm text-[var(--gray-700)]">Target Daily Calories</div>
            <div className="text-3xl font-bold text-[var(--gray-900)]">{result.calories}</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-red-50 text-center border border-red-200">
              <Beef className="w-6 h-6 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600">{result.protein}g</div>
              <div className="text-sm text-red-700">Protein</div>
              <div className="text-xs text-red-500">{result.protein * 4} cal</div>
            </div>
            <div className="p-4 rounded-lg bg-amber-50 text-center border border-amber-200">
              <WheatIcon className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-amber-700">{result.carbs}g</div>
              <div className="text-sm text-amber-800">Carbs</div>
              <div className="text-xs text-amber-600">{result.carbs * 4} cal</div>
            </div>
            <div className="p-4 rounded-lg bg-yellow-50 text-center border border-yellow-200">
              <Droplets className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-700">{result.fats}g</div>
              <div className="text-sm text-yellow-800">Fats</div>
              <div className="text-xs text-yellow-600">{result.fats * 9} cal</div>
            </div>
            <div className="p-4 rounded-lg bg-green-50 text-center border border-green-200">
              <div className="w-6 h-6 rounded-full bg-green-500 mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <div className="text-2xl font-bold text-green-600">{result.fiber}g</div>
              <div className="text-sm text-green-700">Fiber</div>
              <div className="text-xs text-green-500">Daily target</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
