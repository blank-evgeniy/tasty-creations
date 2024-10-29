"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./UpdateRecipeBookButton.module.scss";
import Button, { ButtonColor } from "@/shared/ui/Button/Button";
import BookIcon from "@/shared/assets/icons/book-heart.svg";
import { useQuery } from "@tanstack/react-query";
import { recipeBookService } from "@/entities/RecipeBook";
import { useCallback } from "react";
import { toast } from "sonner";
import { useUpdateRecipeBook } from "../../api/useUpdateRecipeBook";
import { useAuth } from "@/features/authByUsername";

interface UpdateRecipeBookButtonProps {
  className?: string;
  recipeId: string;
}

export const UpdateRecipeBookButton = ({
  className,
  recipeId,
}: UpdateRecipeBookButtonProps) => {
  const { user } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["recipeBook"],
    queryFn: () => recipeBookService.getRecipeBook(),
    staleTime: 30 * 1000,
  });

  const { addToRecipeBook, removeFromRecipeBook, isPending } =
    useUpdateRecipeBook();

  const onAddToBook = useCallback(() => {
    addToRecipeBook(recipeId);
  }, [addToRecipeBook, recipeId]);

  const onRemoveFromBook = useCallback(() => {
    removeFromRecipeBook(recipeId);
  }, [removeFromRecipeBook, recipeId]);

  if (!user)
    return (
      <Button
        onClick={() =>
          toast.error("Чтобы добавить рецепт в книгу, войдите в аккаунт")
        }
        className={classNames(styles.button, {}, [className])}
      >
        <BookIcon /> Добавить в книгу рецептов
      </Button>
    );

  const notInBook = data
    ? !data.recipes.map((recipe) => recipe._id).includes(recipeId)
    : true;

  if (notInBook)
    return (
      <Button
        onClick={onAddToBook}
        className={classNames(styles.button, {}, [className])}
        disabled={isPending || isLoading}
      >
        <BookIcon /> Добавить в книгу рецептов
      </Button>
    );

  return (
    <Button
      onClick={onRemoveFromBook}
      color={ButtonColor.SECONDARY}
      className={classNames(styles.button, {}, [className])}
      disabled={isPending || isLoading}
    >
      <BookIcon /> Удалить из книги рецептов
    </Button>
  );
};
