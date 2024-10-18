import { Recipe } from "../model/recipe";

export const getAllRecipes = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/recipes");

    if (!res.ok) {
      throw new Error(
        `Ошибка при получении рецептов: ${res.status} ${res.statusText}`
      );
    }

    const recipes = (await res.json()) as Recipe[];
    return recipes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
