"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./RecipeBook.module.scss";
import BookImage from "@/shared/assets/pictures/recipe-book.jpg";
import { Reveal } from "@/shared/ui/Animation";
import Image from "next/image";
import Heading from "@/shared/ui/Heading/Heading";
import { useQuery } from "@tanstack/react-query";
import { recipeBookService } from "@/entities/RecipeBook";
import RecipeBookItem from "../RecipeBookItem/RecipeBookItem";

interface RecipeBookProps {
  className?: string;
}

const RecipeBook = ({ className }: RecipeBookProps) => {
  const { data } = useQuery({
    queryKey: ["recipeBook"],
    queryFn: () => recipeBookService.getRecipeBook(),
  });

  if (!data) return null;

  return (
    <div className={classNames(styles.recipe_book, {}, [className])}>
      <Reveal behaviour={"LEFT"}>
        <div className={styles.img_container}>
          <Image
            priority
            className={styles.book_image}
            src={BookImage}
            alt="персонаж-повар"
          />
        </div>
      </Reveal>
      <div>
        <Reveal delay={0.2}>
          <Heading>Книга рецептов</Heading>
        </Reveal>
        <Reveal delay={0.4}>
          <p className={styles.subtitle}>Список ваших любимых рецептов</p>
        </Reveal>
        {data.totalRecipes > 0 ? (
          <div className={styles.recipes_list}>
            {data.recipes.reverse().map((recipe, index) => (
              <Reveal key={recipe._id} delay={0.5 + 0.1 * index}>
                <RecipeBookItem recipe={recipe} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.6}>
            <p style={{ paddingTop: 32 }}>
              {"Ваша книга рецептов пока что пуста :("}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
};

export default RecipeBook;
