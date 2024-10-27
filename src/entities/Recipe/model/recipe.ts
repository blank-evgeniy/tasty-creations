export interface Ingredient {
  name: string;
  quantity: string;
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

export interface RecipesResponse {
  recipes: Recipe[];
  currentPage: number;
  totalRecipes: number;
  totalPages: number;
}

export interface RecipeRequestParams {
  category?: string | null;
  page?: number | null;
  limit?: number | null;
  sortBy?: string | null;
  order?: string | null;
  search?: string | null;
}
