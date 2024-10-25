"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./RecipePage.module.scss";
import { useQuery } from "@tanstack/react-query";
import { recipeService } from "@/entities/Recipe/api/recipeService";
import Loader from "@/shared/ui/Loader/Loader";
import { Reveal } from "@/shared/ui/Animation";
import Heading from "@/shared/ui/Heading/Heading";
import IngredientIcon from "@/shared/assets/icons/cherry.svg";
import { getClientIcon } from "@/shared/ui/ClientIcon";
import { UpdateRecipeBookButton } from "@/features/updateRecipeBook";

interface RecipePageProps {
  className?: string;
  recipeId: string;
}

const RecipePage = ({ className, recipeId }: RecipePageProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => recipeService.getRecipeById(recipeId),
    staleTime: 60 * 1000,
  });

  if (isLoading) return <Loader className={styles.loader} />;

  if (error) return <div>{error.message}</div>;

  if (!data) return <div>Рецепт не найден</div>;

  const { name, description, calories, time, ingredients, steps, icon } = data;

  const Icon = getClientIcon(icon);

  return (
    <div className={classNames(styles.page, {}, [className])}>
      <Reveal>
        <Heading>
          <Icon className={styles.icon} height={24} width={24} />
          {" " + name}
        </Heading>
      </Reveal>
      <Reveal delay={0.2}>
        <p className={styles.description}>{description}</p>
      </Reveal>

      <div className={styles.content}>
        <Reveal delay={0.4}>
          {calories && (
            <p>
              <strong>Пищевая ценность:</strong> {calories} ккал
            </p>
          )}
          <p>
            <strong>Время приготовления:</strong> {time} минут
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <h3 className={styles.subtitle}>Ингредиенты</h3>
          <ul className={styles.ingredients}>
            {ingredients.map((ingredient) => (
              <li key={ingredient.name}>
                <IngredientIcon height={16} width={16} /> {ingredient.name} -{" "}
                {ingredient.quantity}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.8}>
          <h3 className={styles.subtitle}>Инструкция</h3>
          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={1}>
          <UpdateRecipeBookButton recipeId={recipeId} />
        </Reveal>
      </div>
    </div>
  );
};

export default RecipePage;
