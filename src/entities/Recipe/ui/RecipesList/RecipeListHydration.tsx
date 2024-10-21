import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { recipeService } from "../../services/recipeService";
import RecipesList from "./RecipesList";

export const RecipeListHydration = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["recipes"],
    queryFn: () => recipeService.getAllRecipes(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecipesList />
    </HydrationBoundary>
  );
};
