import { axiosClassic } from "@/shared/api/api";
import { Recipe, RecipeRequestParams, RecipesResponse } from "../model/recipe";

class RecipeService {
  private BASE_URL = "/recipes";

  async getRecipes(reqParams: RecipeRequestParams) {
    const { category, page = 1, limit = 10, sortBy, order, search } = reqParams;

    const params: RecipeRequestParams = { page, limit };

    if (category) {
      params.category = category;
    }

    if (sortBy) {
      params.sortBy = sortBy;
      params.order = order || "asc";
    }

    if (search) {
      params.search = search;
    }

    const response = await axiosClassic.get<RecipesResponse>(this.BASE_URL, {
      params,
    });

    return response.data;
  }

  async getRecipeById(id?: string) {
    const response = await axiosClassic.get<Recipe>(`${this.BASE_URL}/${id}`);

    return response.data;
  }

  async getRandomRecipeId() {
    const response = await axiosClassic.get<string>(`${this.BASE_URL}/random`);
    return response.data;
  }
}

export const recipeService = new RecipeService();
