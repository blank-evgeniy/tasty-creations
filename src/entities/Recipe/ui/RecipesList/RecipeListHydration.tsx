import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAllRecipes } from "../../services/getAllRecipes";
import RecipesList from "./RecipesList";

export const RecipeListHydration = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecipesList />
    </HydrationBoundary>
  );
};
