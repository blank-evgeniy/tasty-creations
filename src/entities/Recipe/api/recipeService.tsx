import { axiosClassic } from "@/shared/api/api";
import { Recipe, RecipesResponse } from "../model/recipe";

class RecipeService {
  private BASE_URL = "/recipes";

  async getRecipes(category?: string, page: number = 1) {
    let response;

    if (category) {
      response = await axiosClassic.get<RecipesResponse>(this.BASE_URL, {
        params: { category, page },
      });
    } else {
      response = await axiosClassic.get<RecipesResponse>(this.BASE_URL, {
        params: { page },
      });
    }

    return response.data;
  }

  async getRecipeById(id?: string) {
    const response = await axiosClassic.get<Recipe>(`${this.BASE_URL}/${id}`);

    return response.data;
  }
}

export const recipeService = new RecipeService();
