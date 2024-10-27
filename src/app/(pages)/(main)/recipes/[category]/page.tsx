import styles from "./page.module.scss";
import React from "react";
import { categoryService } from "@/entities/Category";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { RecipesHeading } from "./Heading";
import { Reveal } from "@/shared/ui/Animation";
import { RecipePagination } from "@/widgets/Recipe";

const Recipes = async ({ params }: { params: { category: string } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["categories", params.category],
    queryFn: () => categoryService.getCategoryByPath(params.category),
  });

  return (
    <div className={styles.page}>
      <Reveal>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <RecipesHeading path={params.category} />
        </HydrationBoundary>
      </Reveal>

      <RecipePagination category={params.category} />
    </div>
  );
};

export default Recipes;
