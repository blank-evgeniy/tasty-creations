import { RecipesList } from "@/entities/Recipe";
import styles from "./page.module.scss";
import Reveal from "@/shared/animations/Reveal/Reveal";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Merriweather } from "next/font/google";
import React from "react";

const merriweather = Merriweather({ weight: "700", subsets: ["cyrillic"] });

const Recipes = async () => {
  return (
    <div className={styles.page}>
      <Reveal>
        <h1 className={classNames(styles.title, {}, [merriweather.className])}>
          Рецепты
        </h1>
      </Reveal>

      <RecipesList />
    </div>
  );
};

export default Recipes;
