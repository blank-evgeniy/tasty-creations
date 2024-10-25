import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./RecipeCard.module.scss";
import ClockIcon from "@/shared/assets/icons/clock.svg";
import BookIcon from "@/shared/assets/icons/book-heart.svg";
import FireIcon from "@/shared/assets/icons/flame.svg";
import { Recipe } from "../../model/recipe";
import Button, { ButtonSize } from "@/shared/ui/Button/Button";
import { getClientIcon } from "@/shared/ui/ClientIcon";
import AppLink, { LinkColor, LinkSize } from "@/shared/ui/Link/AppLink";

interface RecipeCardProps {
  className?: string;
  data: Recipe;
}

export const RecipeCard = ({ className, data }: RecipeCardProps) => {
  const { name, calories, time, icon, _id } = data;

  const Icon = getClientIcon(icon);

  return (
    <div className={classNames(styles.recipe_card, {}, [className])}>
      <div className={styles.icon_wrapper}>
        <Icon className={styles.icon} width={28} height={28} />
      </div>
      <div className={styles.content}>
        <div className={styles.content_header}>
          <AppLink
            color={LinkColor.SECONDARY}
            size={LinkSize.L}
            href={`/${_id}`}
            className={styles.name}
          >
            {name}
          </AppLink>

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
