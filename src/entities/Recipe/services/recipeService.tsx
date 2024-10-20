import { axiosClassic } from "@/shared/api/api";
import { RecipeResponse } from "../model/recipe";

class RecipeService {
  private BASE_URL = "/recipes";

  async getAllRecipes() {
    const response = await axiosClassic.get<RecipeResponse[]>(
      `/${this.BASE_URL}`
    );

    return response.data;
  }
}

export const recipeService = new RecipeService();
