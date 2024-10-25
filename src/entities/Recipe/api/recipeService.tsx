import { axiosClassic } from "@/shared/api/api";
import { RecipeResponse } from "../model/recipe";

class RecipeService {
  private BASE_URL = "/recipes";

  async getRecipes(category?: string, page: number = 1) {
    let response;

    if (category) {
      response = await axiosClassic.get<RecipeResponse>(this.BASE_URL, {
        params: { category, page },
      });
    } else {
      response = await axiosClassic.get<RecipeResponse>(this.BASE_URL, {
        params: { page },
      });
    }

    return response.data;
  }
}

export const recipeService = new RecipeService();
