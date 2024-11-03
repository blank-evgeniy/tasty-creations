"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./CategoryListLite.module.scss";
import { useQuery } from "@tanstack/react-query";
import { categoryService } from "@/entities/Category";
import AppLink, { LinkSize } from "@/shared/ui/Link/AppLink";
import { routes } from "@/app/config/routes";
import Loader from "@/shared/ui/Loader/Loader";
import { memo } from "react";

interface CategoryListLiteProps {
  className?: string;
}

export const CategoryListLite = memo(function CategoryListLite({
  className,
}: CategoryListLiteProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoryService.getAllCategories(),
  });

  if (isLoading)
    return (
      <div className={styles.categories_list__loading}>
        <Loader mini />
      </div>
    );

  if (!data) return <div>Категории не найдены</div>;

  return (
    <div className={classNames(styles.categories_list, {}, [className])}>
      {data.map((category) => (
        <AppLink
          key={category._id}
          size={LinkSize.L}
          href={`${routes.PUBLIC.RECIPES}/${category.path}`}
        >
          {category.name}
        </AppLink>
      ))}
    </div>
  );
});
