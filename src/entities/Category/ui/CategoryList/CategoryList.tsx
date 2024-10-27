"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./CategoryList.module.scss";
import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../../api/categoryService";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import Loader from "@/shared/ui/Loader/Loader";

interface CategoryListProps {
  className?: string;
}

const CategoryList = ({ className }: CategoryListProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoryService.getAllCategories(),
    staleTime: 5 * 1000 * 60,
  });

  if (isLoading) return <Loader className={styles.loader} />;

  if (error) return <div>{error.message}</div>;

  if (!data) return <div>Данные не найдены</div>;

  return (
    <div className={classNames(styles.container, {}, [className])}>
      {data.map((category) => (
        <CategoryCard key={category._id} data={category} />
      ))}
    </div>
  );
};

export default CategoryList;
