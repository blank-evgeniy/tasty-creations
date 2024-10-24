import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { recipeService } from "../../api/recipeService";
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
    queryKey: ["recipes", category],
    queryFn: () => recipeService.getRecipes(category),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecipesList className={className} category={category} />
    </HydrationBoundary>
  );
};
