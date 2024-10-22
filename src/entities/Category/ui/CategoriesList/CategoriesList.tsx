"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./CategoriesList.module.scss";
import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../../api/categoryService";
import { CategoryCard } from "../CategoryCard/CategoryCard";

interface CategoriesListProps {
  className?: string;
}

const CategoriesList = ({ className }: CategoriesListProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoryService.getAllCategories(),
    staleTime: 5 * 1000 * 60,
  });

  if (error) return <div>{error.message}</div>;

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>no data</div>;

  return (
    <div className={classNames(styles.container, {}, [className])}>
      {data.map((category) => (
        <CategoryCard key={category._id} data={category} />
      ))}
    </div>
  );
};

export default CategoriesList;
