"use client";

import { useState } from "react";
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

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all";
  const selectClass =
    "w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all";

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
      <div className="flex items-center gap-2.5 mb-8">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-50 border border-orange-100">
          <Flame className="w-5 h-5 text-orange-500" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Calorie Calculator</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Unit</label>
          <select value={unit} onChange={(e) => setUnit(e.target.value as "metric" | "imperial")} className={selectClass}>
            <option value="metric">Metric (kg, cm)</option>
            <option value="imperial">Imperial (lbs, in)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value as "male" | "female")} className={selectClass}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Age</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="30" className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Height ({unit === "metric" ? "cm" : "in"})
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

      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Activity Level</label>
        <select value={activity} onChange={(e) => setActivity(parseFloat(e.target.value))} className={selectClass}>
          {activityLevels.map((level) => (
            <option key={level.value} value={level.value}>
              {level.label} - {level.description}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={calculateCalories}
        className="w-full py-3.5 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors shadow-sm text-sm"
      >
        Calculate Calories
      </button>

      {result && (
        <div className="mt-8 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="py-5 px-4 rounded-xl bg-blue-50 text-center border border-blue-100">
              <div className="text-sm text-blue-600 font-medium">BMR</div>
              <div className="text-3xl font-bold text-blue-700 mt-1">{result.bmr}</div>
              <div className="text-xs text-blue-400 mt-0.5">calories/day</div>
            </div>
            <div className="py-5 px-4 rounded-xl bg-emerald-50 text-center border border-emerald-100">
              <div className="text-sm text-emerald-600 font-medium">TDEE</div>
              <div className="text-3xl font-bold text-emerald-700 mt-1">{result.tdee}</div>
              <div className="text-xs text-emerald-400 mt-0.5">calories/day</div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4 text-sm">Daily Calorie Targets</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Maintain Weight</span>
                <span className="font-bold text-gray-900">{result.targets.maintain} cal</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Mild Loss (0.5 lb/week)</span>
                <span className="font-bold text-emerald-600">{result.targets.mildLoss} cal</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Weight Loss (1 lb/week)</span>
                <span className="font-bold text-blue-700">{result.targets.loss} cal</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Extreme Loss (2 lb/week)</span>
                <span className="font-bold text-red-500">{result.targets.extremeLoss} cal</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
