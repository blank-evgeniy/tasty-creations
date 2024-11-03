"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./MiniRecipeBook.module.scss";
import AppLink, { LinkTheme } from "@/shared/ui/Link/AppLink";
import { routes } from "@/app/config/routes";
import { useQuery } from "@tanstack/react-query";
import { recipeBookService } from "@/entities/RecipeBook";
import { useAuth } from "@/features/authByUsername";

interface MiniRecipeBookProps {
  className?: string;
}

export const MiniRecipeBook = ({ className }: MiniRecipeBookProps) => {
  const { user } = useAuth();

  const { data } = useQuery({
    queryKey: ["recipeBook"],
    queryFn: () => recipeBookService.getRecipeBook(),
  });

  if (!user || !data) return null;

  const { recipes, totalRecipes } = data;
  const latestRecipes = recipes.slice(-5);

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <div className={styles.recipe_book}>
        {totalRecipes > 0 ? (
          <>
            <p className={styles.title}>Книга рецептов</p>
            <p>Всего в вашей книге рецептов: {totalRecipes}</p>
            <p>Последние сохраненные рецепты:</p>
            <div className={styles.recipes}>
              {latestRecipes.map((recipe) => (
                <AppLink href={`/${recipe._id}`} key={recipe._id}>
                  {recipe.name}
                </AppLink>
              ))}
            </div>
            <AppLink
              href={routes.PRIVATE.RECIPE_BOOK}
              theme={LinkTheme.BUTTON}
              className={styles.button}
            >
              Открыть книгу рецептов
            </AppLink>
          </>
        ) : (
          <>
            <div>
              <p>{"Ваша книга рецептов пуста :("}</p>
              <p>Вы можете добавить рецепты, перейдя в каталог.</p>
            </div>

            <AppLink
              className={styles.button}
              theme={LinkTheme.BUTTON}
              href={routes.PUBLIC.RECIPES}
            >
              Все рецепты
            </AppLink>
          </>
        )}
      </div>
    </div>
  );
};
