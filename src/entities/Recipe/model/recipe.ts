export interface Ingredient {
  name: string;
  value?: number;
  unit?: string;
}

export interface Recipe {
  _id: string;
  name: string;
  category: string;
  description: string;
  ingredients: Ingredient[];
  steps: string[];
  time: number;
  calories?: number;
  icon?: string;
}

export interface RecipeResponse {
  recipes: Recipe[];
  currentPage: number;
  totalRecipes: number;
  totalPages: number;
}
