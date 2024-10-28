import { classNames } from "@/shared/lib/classNames/classNames";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { Reveal } from "@/shared/ui/Animation";

import styles from "./RecipeList.module.scss";
import { Recipe } from "@/entities/Recipe";
import Loader from "@/shared/ui/Loader/Loader";

interface RecipeListProps {
  className?: string;
  data: Recipe[] | undefined;
  isLoading: boolean;
}

export const RecipeList = ({ className, data, isLoading }: RecipeListProps) => {
  if (isLoading)
    return (
      <div className={classNames(styles.recipes_list__error, {}, [className])}>
        <Loader />
      </div>
    );

  if (!data) return null;

  return (
    <div className={classNames(styles.recipes_list, {}, [className])}>
      {data.map((recipe, index) => (
        //было решено задать key из индекса и id, чтобы происходили перерендеры
        //для анимации появления карточки
        <Reveal key={"" + index + recipe._id} delay={0.1 * index - 0.1}>
          <RecipeCard data={recipe} />
        </Reveal>
      ))}
    </div>
  );
};
