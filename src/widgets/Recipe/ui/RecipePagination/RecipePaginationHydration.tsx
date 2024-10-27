import { dehydrate, QueryClient } from "@tanstack/query-core";
import { recipeService } from "@/entities/Recipe/api/recipeService";
import { HydrationBoundary } from "@tanstack/react-query";
import { RecipePagination } from "./RecipePagination";

interface RecipePaginationHydrationProps {
  className?: string;
  category?: string;
}

export const RecipePaginationHydration = async ({
  className,
  category,
}: RecipePaginationHydrationProps) => {
  const queryClient = new QueryClient();

  // 1 в данном случае - первая страница, то есть при открытии рецептов мы на сервере
  // предзагружаем рецепты с первой страницы, а остальная пагинация происходит
  // с помощью клиентских действия
  const queryKey = category ? ["recipes", category, 1] : ["recipes", 1];

  await queryClient.prefetchQuery({
    queryKey: [...queryKey],
    queryFn: () => recipeService.getRecipes({ category }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecipePagination category={category} className={className} />
    </HydrationBoundary>
  );
};
