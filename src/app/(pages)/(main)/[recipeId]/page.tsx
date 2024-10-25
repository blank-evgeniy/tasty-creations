import { recipeService } from "@/entities/Recipe/api/recipeService";
import { dehydrate, QueryClient } from "@tanstack/query-core";
import { HydrationBoundary } from "@tanstack/react-query";
import React from "react";
import RecipePage from "./RecipePage";

const RecipePageHydration = async ({
  params,
}: {
  params: { recipeId: string };
}) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["recipe", params.recipeId],
    queryFn: () => recipeService.getRecipeById(params.recipeId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecipePage recipeId={params.recipeId} />
    </HydrationBoundary>
  );
};

export default RecipePageHydration;
