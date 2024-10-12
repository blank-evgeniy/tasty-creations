import styles from "./page.module.scss";
import { Merriweather } from "next/font/google";
import { classNames } from "@/shared/lib/classNames/classNames";
import Reveal from "@/shared/animations/Reveal/Reveal";
import { CategoriesList, CategoryCard } from "@/entities/Category";
import AppLink, { LinkTheme } from "@/shared/ui/Link/AppLink";
import MoveRightIcon from "@/shared/assets/icons/move-right.svg";

const merriweather = Merriweather({ weight: "700", subsets: ["cyrillic"] });

export default function Categories() {
  const CategoriesCards = CategoriesList.map((category) => (
    <CategoryCard key={category.path} data={category} />
  ));

  return (
    <div className={styles.page}>
      <Reveal>
        <h1 className={classNames(styles.title, {}, [merriweather.className])}>
          Категории
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <h2 className={styles.subtitle}>
          Выберите рецепты какой категории вы хотите найти
        </h2>
      </Reveal>

      <Reveal delay={0.6}>
        <div className={styles.categories_list}>{CategoriesCards}</div>
      </Reveal>

      <Reveal delay={0.8}>
        <div className={styles.link_section}>
          <h2 style={{ display: "inline" }} className={styles.subtitle}>
            Или перейдите к списку всех рецептов
          </h2>

          <AppLink
            href="/menu"
            theme={LinkTheme.BUTTON}
            className={styles.button}
          >
            <div className={styles.button_content}>
              <MoveRightIcon />
              <p>Все рецепты</p>
            </div>
          </AppLink>
        </div>
      </Reveal>
    </div>
  );
}
