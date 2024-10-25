"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./RecipesList.module.scss";
import { useQuery } from "@tanstack/react-query";
import { recipeService } from "../../api/recipeService";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { Reveal } from "@/shared/ui/Animation";
import { Pagination } from "@/widgets/Pagination";
import { useState } from "react";
import Loader from "@/shared/ui/Loader/Loader";

interface RecipesListProps {
  className?: string;
  category?: string;
}

const RecipesList = ({ className, category }: RecipesListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = useQuery({
    queryKey: ["recipes", category, currentPage],
    queryFn: () => recipeService.getRecipes(category, currentPage),
    staleTime: 30 * 1000,
  });

  if (isLoading)
    return (
      <Reveal delay={0.3}>
        <Loader className={styles.loader} />
      </Reveal>
    );

  if (error) return <div>{error.message}</div>;

  if (!data) return <div>Данные не найдены</div>;

  const paginateHandler = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <div className={classNames(styles.recipes_list, {}, [className])}>
        {data.recipes.map((recipe, index) => (
          <Reveal key={recipe._id} delay={0.2 + 0.1 * index}>
            <RecipeCard data={recipe} />
          </Reveal>
        ))}
      </div>

      {data.totalPages > 1 && (
        <Reveal delay={0.2 + 0.1 * data.recipes.length}>
          <Pagination
            className={styles.pagination}
            currentPage={currentPage}
            pagesCount={data.totalPages}
            onPaginate={paginateHandler}
          />
        </Reveal>
      )}
    </>
  );
};

export default RecipesList;
