"use client";
import { useQuery } from "@tanstack/react-query";
import { recipeService } from "@/entities/Recipe/api/recipeService";
import { Pagination } from "@/widgets/Pagination";
import { useSearchParams } from "next/navigation";
import { RecipeList } from "../RecipeList/RecipeList";
import styles from "./RecipePagination.module.scss";
import { CategoryListLite } from "@/entities/Category";
import { Reveal } from "@/shared/ui/Animation";
import RecipeSortSelect from "../RecipeSortSelect/RecipeSortSelect";
import { useQueryParams } from "@/shared/hooks/useQueryParams";

interface RecipePaginationProps {
  className?: string;
  category?: string;
}

export const RecipePagination = ({
  className,
  category,
}: RecipePaginationProps) => {
  const { createQueryParam } = useQueryParams();
  const searchParams = useSearchParams();

  const currentPage = +(searchParams.get("page") || 1);
  const search = searchParams.get("search");
  const sortBy = searchParams.get("sortBy");
  const order = searchParams.get("order") || "asc";

  const paginateHandler = (page: number) => {
    createQueryParam("page", page.toString());
  };

  //удаляем лишни знечения из ключа для более удобного управления кэширование запросов с помощью useQuery
  const queryKey = [category, currentPage, search, sortBy, order].filter(
    (key) => !!key
  );

  const { data, isLoading } = useQuery({
    queryKey: ["recipes", ...queryKey],
    queryFn: () =>
      recipeService.getRecipes({
        category,
        page: currentPage,
        search,
        sortBy,
        order,
      }),
    staleTime: 30 * 1000,
  });

  const pagesCount = data?.totalPages;

  return (
    <div className={className}>
      <div className={styles.content}>
        <RecipeList isLoading={isLoading} data={data?.recipes} />
        <Reveal delay={0.4}>
          <div className={styles.menu}>
            {!category && (
              <div className={styles.menu_categories}>
                <h2 className={styles.menu_title}>Категории</h2>
                <CategoryListLite />
              </div>
            )}

            <div className={styles.menu_sort}>
              <h2 className={styles.menu_title}>Сортировка</h2>
              <RecipeSortSelect />
            </div>
          </div>
        </Reveal>
      </div>

      {data && (
        <Reveal delay={data.recipes.length * 0.1 + 0.2}>
          <Pagination
            className={styles.pagination}
            currentPage={currentPage}
            pagesCount={pagesCount || 1}
            onPaginate={paginateHandler}
          />
        </Reveal>
      )}
    </div>
  );
};
