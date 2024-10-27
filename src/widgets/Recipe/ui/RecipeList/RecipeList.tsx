import { classNames } from "@/shared/lib/classNames/classNames";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { Reveal } from "@/shared/ui/Animation";

import styles from "./RecipeList.module.scss";
import { Recipe } from "@/entities/Recipe";

interface RecipeListProps {
  className?: string;
  recipes: Recipe[];
}

export const RecipeList = ({ className, recipes }: RecipeListProps) => {
  return (
    <div className={classNames(styles.recipes_list, {}, [className])}>
      {recipes.map((recipe, index) => (
        <Reveal key={recipe._id} delay={0.2 + 0.1 * index}>
          <RecipeCard data={recipe} />
        </Reveal>
      ))}
    </div>
  );
};
