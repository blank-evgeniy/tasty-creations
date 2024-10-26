"use client";

import { recipeService } from "@/entities/Recipe/api/recipeService";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const useRandomRecipe = () => {
  const pathname = usePathname();
  const [recipeUrl, setRecipeUrl] = useState("");

  const fetchData = useCallback(async () => {
    const randomRecipe = await recipeService.getRandomRecipeId();

    const newUrl = `/${randomRecipe}`;
    if (newUrl === pathname) {
      fetchData();
      return;
    }

    setRecipeUrl(newUrl);
  }, [pathname]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { recipeUrl };
};
