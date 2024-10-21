"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./RecipesList.module.scss";
import { useQuery } from "@tanstack/react-query";
import { recipeService } from "../../services/recipeService";
import { RecipeCard } from "../RecipeCard/RecipeCard";

interface RecipesListProps {
  className?: string;
}

const RecipesList = ({ className }: RecipesListProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => recipeService.getAllRecipes(),
    staleTime: 30 * 1000,
  });

  if (error) return <div>{error.message}</div>;

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>no data</div>;

  return (
    <div className={classNames(styles.recipes_list, {}, [className])}>
      {data.map((recipe) => (
        <RecipeCard key={recipe.name} data={recipe} />
      ))}
    </div>
  );
};

export default RecipesList;
