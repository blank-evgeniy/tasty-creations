import { axiosClassic } from "@/shared/api/api";
import { Category } from "../model/category";

class CategoryService {
  private BASE_URL = "/categories";

  async getAllCategories() {
    const response = await axiosClassic.get<Category[]>(this.BASE_URL);

    return response.data;
  }
}

export const categoryService = new CategoryService();
