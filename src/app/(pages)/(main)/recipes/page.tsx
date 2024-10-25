import styles from "./page.module.scss";
import React from "react";
import { Reveal } from "@/shared/ui/Animation";
import Heading from "@/shared/ui/Heading/Heading";
import { RecipesList } from "@/widgets/Recipe";

const Recipes = async () => {
  return (
    <div className={styles.page}>
      <Reveal>
        <Heading>Рецепты</Heading>
      </Reveal>

      <RecipesList className={styles.recipes_list} />
    </div>
  );
};

export default Recipes;
