export interface Ingredient {
  name: string;
  value?: number;
  unit?: string;
}

export interface Recipe {
  name: string;
  category: string;
  description: string;
  ingredients: Ingredient[];
  steps: string[];
  time: number;
  calories?: number;
  icon?: string;
}

export interface RecipeResponse extends Recipe {
  id: string;
}
