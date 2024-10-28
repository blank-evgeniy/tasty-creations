import { dehydrate, QueryClient } from "@tanstack/query-core";
import { recipeService } from "@/entities/Recipe/api/recipeService";
import { HydrationBoundary } from "@tanstack/react-query";
import { RecipePagination } from "./RecipePagination";
import { Suspense } from "react";
import Loader from "@/shared/ui/Loader/Loader";

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
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              paddingTop: 32,
            }}
          >
            <Loader />
          </div>
        }
      >
        <RecipePagination category={category} className={className} />
      </Suspense>
    </HydrationBoundary>
  );
};
