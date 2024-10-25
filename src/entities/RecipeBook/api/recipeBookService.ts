import { axiosWithAuth } from "@/shared/api/api";
import { RecipeBook } from "../model/recipeBook";

class RecipeBookService {
  private BASE_URL = "/recipe_book";

  async getRecipeBook() {
    const response = await axiosWithAuth.get<RecipeBook>(this.BASE_URL);

    return response.data;
  }

  async addToRecipeBook(recipeId: string) {
    const response = await axiosWithAuth.post<RecipeBook>(this.BASE_URL, {
      recipeId,
    });

    return response.data;
  }

  async removeFromRecipeBook(recipeId: string) {
    const response = await axiosWithAuth.delete(`${this.BASE_URL}/${recipeId}`);

    return response;
  }
}

export const recipeBookService = new RecipeBookService();
