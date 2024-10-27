"use client";
import { useQuery } from "@tanstack/react-query";
import { recipeService } from "@/entities/Recipe/api/recipeService";
import { Pagination } from "@/widgets/Pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { RecipeList } from "../RecipeList/RecipeList";
import styles from "./RecipePagination.module.scss";
import { CategoryListLite } from "@/entities/Category";
import { Reveal } from "@/shared/ui/Animation";

interface RecipePaginationProps {
  className?: string;
  category?: string;
}

export const RecipePagination = ({
  className,
  category,
}: RecipePaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = +(searchParams.get("page") || 1);
  const search = searchParams.get("search");
  const sortBy = searchParams.get("sortBy");
  const order = searchParams.get("order");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const paginateHandler = (page: number) => {
    router.push(pathname + "?" + createQueryString("page", "" + page));
  };

  //удаляем лишни знечения из ключа для более удобного управления кэширование запросов с помощью useQuery
  const queryKey = [category, currentPage, search, sortBy, order].filter(
    (key) => !!key
  );

  const { data } = useQuery({
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

  if (!data) return null;

  const pagesCount = data.totalPages;

  return (
    <div className={className}>
      <div className={styles.content}>
        <RecipeList recipes={data.recipes} />
        <div className={styles.menu}>
          {!category && (
            <div className={styles.menu_categories}>
              <h2 className={styles.menu_title}>Категории</h2>
              <CategoryListLite />
            </div>
          )}

          <div className={styles.menu_sort}>
            <h2 className={styles.menu_title}>Сортировка</h2>
            <p>по времени приготовления</p>
            <p>по каллориям</p>
          </div>
        </div>
      </div>
      <Reveal delay={data.recipes.length * 0.1 + 0.2}>
        <Pagination
          className={styles.pagination}
          currentPage={currentPage}
          pagesCount={pagesCount}
          onPaginate={paginateHandler}
        />
      </Reveal>
    </div>
  );
};
