"use client";

import Button from "@/shared/ui/Button/Button";
import { useRouter } from "next/navigation";
import { useRandomRecipe } from "../../api/useRandomRecipe";

interface RandomRecipeButtonProps {
  className?: string;
}

export const RandomRecipeButton = ({ className }: RandomRecipeButtonProps) => {
  const router = useRouter();
  const { recipeUrl } = useRandomRecipe();

  const fetchData = () => {
    router.push(recipeUrl);
  };

  return (
    <Button onClick={fetchData} className={className}>
      Что приготовить?
    </Button>
  );
};
