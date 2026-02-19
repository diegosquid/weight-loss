"use client";

import { useState } from "react";
import { Beef, Wheat as WheatIcon, Droplets } from "lucide-react";

interface MacroResult {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  fiber: number;
}

const goals = [
  { value: "maintain", label: "Maintain", multiplier: 1 },
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

    const protein = Math.round((targetCalories * selectedRatio.p) / 4);
    const carbs = Math.round((targetCalories * selectedRatio.c) / 4);
    const fats = Math.round((targetCalories * selectedRatio.f) / 9);
    const fiber = wt ? Math.round(wt * 0.35) : 30;

    setResult({ calories: targetCalories, protein, carbs, fats, fiber });
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
      <div className="flex items-center gap-2.5 mb-8">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 border border-blue-100">
          <Beef className="w-5 h-5 text-blue-700" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Macro Calculator</h2>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Daily Calories</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="2000"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Body Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="70"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
          />
        </div>
      </div>

      {/* Goal */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Goal</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {goals.map((g) => (
            <button
              key={g.value}
              onClick={() => setGoal(g.value)}
              className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition-all text-center border ${
                goal === g.value
                  ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                  : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Macro Ratio */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Macro Ratio</label>
        <div className="grid grid-cols-2 gap-2">
          {ratios.map((r) => (
            <button
              key={r.value}
              onClick={() => setRatio(r.value)}
              className={`px-3 py-3 rounded-xl text-sm font-semibold transition-all text-center border ${
                ratio === r.value
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                  : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
              }`}
            >
              {r.label}
              <span className={`block text-xs mt-0.5 font-medium ${ratio === r.value ? "text-emerald-100" : "text-gray-400"}`}>
                P:{Math.round(r.p * 100)}% C:{Math.round(r.c * 100)}% F:{Math.round(r.f * 100)}%
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Calculate */}
      <button
        onClick={calculateMacros}
        className="w-full py-3.5 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors shadow-sm text-sm"
      >
        Calculate Macros
      </button>

      {/* Results */}
      {result && (
        <div className="mt-8 space-y-4">
          <div className="text-center py-5 rounded-xl bg-gray-50 border border-gray-200">
            <div className="text-sm text-gray-500 font-medium">Target Daily Calories</div>
            <div className="text-4xl font-bold text-gray-900 mt-1">{result.calories}</div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-5 rounded-xl bg-red-50 text-center border border-red-100">
              <Beef className="w-6 h-6 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600">{result.protein}g</div>
              <div className="text-sm font-medium text-red-700">Protein</div>
              <div className="text-xs text-red-400 mt-0.5">{result.protein * 4} cal</div>
            </div>
            <div className="p-5 rounded-xl bg-amber-50 text-center border border-amber-100">
              <WheatIcon className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-amber-600">{result.carbs}g</div>
              <div className="text-sm font-medium text-amber-700">Carbs</div>
              <div className="text-xs text-amber-400 mt-0.5">{result.carbs * 4} cal</div>
            </div>
            <div className="p-5 rounded-xl bg-yellow-50 text-center border border-yellow-100">
              <Droplets className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-600">{result.fats}g</div>
              <div className="text-sm font-medium text-yellow-700">Fats</div>
              <div className="text-xs text-yellow-500 mt-0.5">{result.fats * 9} cal</div>
            </div>
            <div className="p-5 rounded-xl bg-emerald-50 text-center border border-emerald-100">
              <div className="w-6 h-6 rounded-full bg-emerald-500 mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <div className="text-2xl font-bold text-emerald-600">{result.fiber}g</div>
              <div className="text-sm font-medium text-emerald-700">Fiber</div>
              <div className="text-xs text-emerald-400 mt-0.5">Daily target</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
