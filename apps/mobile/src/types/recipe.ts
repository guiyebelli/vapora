export interface Recipe {
  id: string;
  slug: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  image: string;
  category: CategoryId;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  totalTime: number;
  prepTime: number;
  cookTime: number;
  servings: number;
  thermomixModel: ThermomixModel[];
  accessories: ThermomixAccessory[];
  ingredients: Ingredient[];
  steps: Step[];
  tips?: {
    es: string;
    en: string;
  };
  origin?: {
    es: string;
    en: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Ingredient {
  id: string;
  name: {
    es: string;
    en: string;
  };
  amount: number;
  unit: string;
  optional: boolean;
  group?: string;
}

export interface Step {
  id: string;
  order: number;
  instruction: {
    es: string;
    en: string;
  };
  thermomixSettings?: ThermomixSettings;
  timer?: number;
  tip?: {
    es: string;
    en: string;
  };
}

export interface ThermomixSettings {
  speed?: number | 'turbo' | 'spatula';
  temperature?: number | 'varoma';
  time?: number;
  direction?: 'clockwise' | 'counterclockwise';
  accessory?: ThermomixAccessory;
}

export type ThermomixAccessory =
  | 'varoma'
  | 'butterfly'
  | 'basket'
  | 'spatula'
  | 'measuring_cup'
  | 'blade_cover';

export type ThermomixModel = 'TM5' | 'TM6';

export type CategoryId =
  | 'desserts'
  | 'breads'
  | 'soups'
  | 'sauces'
  | 'drinks'
  | 'main_courses'
  | 'starters'
  | 'doughs';

export interface Category {
  id: CategoryId;
  name: {
    es: string;
    en: string;
  };
  icon: string;
  color: string;
  colorDark: string;
}
