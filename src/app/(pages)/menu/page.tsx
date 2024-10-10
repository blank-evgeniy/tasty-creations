import styles from "./page.module.scss";
import { RecipeCard } from "@/entities/Recipe";
import Reveal from "@/shared/animations/Reveal/Reveal";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Merriweather } from "next/font/google";
import React from "react";

const merriweather = Merriweather({ weight: "700", subsets: ["cyrillic"] });

const Recipes = () => {
  return (
    <div className={styles.page}>
      <Reveal>
        <h1 className={classNames(styles.title, {}, [merriweather.className])}>
          Рецепты
        </h1>
      </Reveal>

      <div className={styles.recipes}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
};

export default Recipes;
