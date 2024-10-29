import styles from "./page.module.scss";
import React from "react";
import { Reveal } from "@/shared/ui/Animation";
import Heading from "@/shared/ui/Heading/Heading";
import { RecipePagination } from "@/widgets/Recipe";

export const metadata = {
  title: "Рецепты | Tasty Creations",
};

const Recipes = async () => {
  return (
    <div className={styles.page}>
      <Reveal>
        <Heading>Рецепты</Heading>
      </Reveal>

      <RecipePagination />
    </div>
  );
};

export default Recipes;
