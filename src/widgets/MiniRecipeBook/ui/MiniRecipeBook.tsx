import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./MiniRecipeBook.module.scss";
import AppLink, { LinkTheme } from "@/shared/ui/Link/AppLink";
import { PagesUrl } from "@/app/config/pagesUrl";

interface MiniRecipeBookProps {
  className?: string;
}

export const MiniRecipeBook = ({ className }: MiniRecipeBookProps) => {
  return (
    <div className={classNames(styles.container, {}, [className])}>
      <div className={styles.recipe_book}>
        <p className={styles.title}>Книга рецептов</p>
        <p>Всего в вашей книге рецептов: 5</p>
        <p>Последние сохраненные рецепты:</p>
        <div className={styles.recipes}>
          <p>Блины</p>
          <p>Блины</p>
          <p>Блины</p>
          <p>Блины</p>
          <p>Блины</p>
        </div>
        <AppLink
          href={PagesUrl.RECIPE_BOOK}
          theme={LinkTheme.BUTTON}
          className={styles.open_btn}
        >
          Открыть книгу рецептов
        </AppLink>
      </div>
    </div>
  );
};
