import { RecipesList } from "@/entities/Recipe";
import styles from "./page.module.scss";
import React from "react";
import { categoryService } from "@/entities/Category";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { RecipesHeading } from "./Heading";

const Recipes = async ({ params }: { params: { category: string } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["categories", params.category],
    queryFn: () => categoryService.getCategoryByPath(params.category),
  });

  return (
    <div className={styles.page}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <RecipesHeading path={params.category} />
      </HydrationBoundary>

      <RecipesList category={params.category} className={styles.recipes_list} />
    </div>
  );
};

export default Recipes;
