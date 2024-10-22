import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { recipeService } from "../../api/recipeService";
import RecipesList from "./RecipesList";

interface RecipeListHydrationProps {
  className: string;
}

export const RecipeListHydration = async ({
  className,
}: RecipeListHydrationProps) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["recipes"],
    queryFn: () => recipeService.getAllRecipes(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecipesList className={className} />
    </HydrationBoundary>
  );
};
