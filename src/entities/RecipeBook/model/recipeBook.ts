import { Recipe } from "@/entities/Recipe";

export interface RecipeBook {
  recipes: Recipe[];
  totalRecipes: number;
}
