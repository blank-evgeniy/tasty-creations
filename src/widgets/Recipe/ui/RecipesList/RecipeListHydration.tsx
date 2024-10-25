import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { recipeService } from "../../../../entities/Recipe/api/recipeService";
import RecipesList from "./RecipesList";

interface RecipeListHydrationProps {
  className?: string;
  category?: string;
}

export const RecipeListHydration = async ({
  className,
  category,
}: RecipeListHydrationProps) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["recipes", category, 1],
    queryFn: () => recipeService.getRecipes(category),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecipesList className={className} category={category} />
    </HydrationBoundary>
  );
};
