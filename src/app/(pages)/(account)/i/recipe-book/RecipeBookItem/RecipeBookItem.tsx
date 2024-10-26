"uce client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./RecipeBookItem.module.scss";
import { Recipe } from "@/entities/Recipe";
import { getClientIcon } from "@/shared/ui/ClientIcon";
import Button from "@/shared/ui/Button/Button";
import AppLink from "@/shared/ui/Link/AppLink";
import { useUpdateRecipeBook } from "@/features/updateRecipeBook/api/useUpdateRecipeBook";

interface RecipeBookItemProps {
  className?: string;
  recipe: Recipe;
}

const RecipeBookItem = ({ className, recipe }: RecipeBookItemProps) => {
  const { name, icon, _id } = recipe;
  const { removeFromRecipeBook } = useUpdateRecipeBook();

  const Icon = getClientIcon(icon);

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <AppLink href={`/${_id}`}>
        <Icon height={24} width={24} /> {name}
      </AppLink>
      <Button onClick={() => removeFromRecipeBook(_id)}>Удалить</Button>
    </div>
  );
};

export default RecipeBookItem;
