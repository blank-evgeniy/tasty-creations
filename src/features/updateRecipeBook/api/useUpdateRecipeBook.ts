"use client";

import { recipeBookService } from "@/entities/RecipeBook";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

export const useUpdateRecipeBook = () => {
  const queryClient = useQueryClient();

  const addToBookMutation = useMutation({
    mutationKey: ["recipeBook_post"],
    mutationFn: (recipeId: string) =>
      recipeBookService.addToRecipeBook(recipeId),
    onSuccess: () => {
      toast.success("Рецепт успешно добавлен в вашу книгу");
      queryClient.invalidateQueries({ queryKey: ["recipeBook"] });
    },
  });

  const removeFromBookMutation = useMutation({
    mutationKey: ["recipeBook_delete"],
    mutationFn: (recipeId: string) =>
      recipeBookService.removeFromRecipeBook(recipeId),
    onSuccess: () => {
      toast.success("Рецепт успешно удален из вашей книги");
      queryClient.invalidateQueries({ queryKey: ["recipeBook"] });
    },
  });

  return {
    addToRecipeBook: addToBookMutation.mutate,
    removeFromRecipeBook: removeFromBookMutation.mutate,
    isPending: addToBookMutation.isPending || removeFromBookMutation.isPending,
  };
};
