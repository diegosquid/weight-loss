export interface Article {
  slug: string;
  categorySlug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  author: Author;
  medicalReviewer?: Author;
  category: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  readingTime: number;
}

export interface Author {
  name: string;
  slug: string;
  title: string;
  credentials?: string;
  bio: string;
  avatar?: string;
  specialties?: string[];
  affiliations?: string[];
}

export interface CalculatorResult {
  value: number;
  category: string;
  description: string;
}

export interface BMIData {
  bmi: number;
  category: string;
  healthRisk: string;
}

export interface CalorieData {
  bmr: number;
  tdee: number;
  targets: {
    maintain: number;
    mildLoss: number;
    loss: number;
    extremeLoss: number;
  };
}

export interface MacroData {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  fiber: number;
}
