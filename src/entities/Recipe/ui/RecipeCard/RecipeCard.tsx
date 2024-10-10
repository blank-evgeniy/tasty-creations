import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./RecipeCard.module.scss";
import Icon from "@/shared/assets/icons/cooking-pot.svg";
import ClockIcon from "@/shared/assets/icons/clock.svg";
import BookIcon from "@/shared/assets/icons/book-heart.svg";
import FireIcon from "@/shared/assets/icons/flame.svg";
import { Recipe } from "../../model/recipe";
import { RecipesListMock } from "../../model/RecipesList";
import Button, { ButtonSize } from "@/shared/ui/Button/Button";

interface RecipeCardProps {
  className?: string;
  data?: Recipe;
}

export const RecipeCard = ({
  className,
  data = RecipesListMock[0],
}: RecipeCardProps) => {
  const { name, calories, time } = data;

  return (
    <div className={classNames(styles.recipe_card, {}, [className])}>
      <div className={styles.icon_wrapper}>
        <Icon className={styles.icon} width={28} height={28} />
      </div>
      <div className={styles.content}>
        <div className={styles.content_header}>
          <p className={styles.name}>{name}</p>

          <div className={styles.info}>
            <p className={styles.time}>
              <ClockIcon width={16} height={16} /> {time} мин.
            </p>
            <p className={styles.calories}>
              <FireIcon width={16} height={16} /> {calories} ккал
            </p>
          </div>
        </div>

        <div className={styles.content_footer}>
          <Button className={styles.button} size={ButtonSize.S}>
            <BookIcon /> добавить в книгу рецептов
          </Button>
        </div>
      </div>
    </div>
  );
};
