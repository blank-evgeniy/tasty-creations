"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./RecipesList.module.scss";
import { useQuery } from "@tanstack/react-query";
import { recipeService } from "../../api/recipeService";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { Reveal } from "@/shared/ui/Animation";

interface RecipesListProps {
  className?: string;
  category?: string;
}

const RecipesList = ({ className, category }: RecipesListProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["recipes", category],
    queryFn: () => recipeService.getRecipes(category),
    staleTime: 30 * 1000,
  });

  if (error) return <div>{error.message}</div>;

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>no data</div>;

  return (
    <div className={classNames(styles.recipes_list, {}, [className])}>
      {data.map((recipe, index) => (
        <Reveal key={recipe._id} delay={0.2 + 0.1 * index}>
          <RecipeCard data={recipe} />
        </Reveal>
      ))}
    </div>
  );
};

export default RecipesList;
