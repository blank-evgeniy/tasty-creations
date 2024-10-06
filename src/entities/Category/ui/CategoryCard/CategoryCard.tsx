import { classNames } from "@/shared/lib/classNames/classNames";
import Image from "next/image";
import styles from "./CategoryCard.module.scss";
import Link from "next/link";
import { Category } from "../../model/category";

interface CategoryCardProps {
  className?: string;
  data: Category;
}

export const CategoryCard = ({ className, data }: CategoryCardProps) => {
  const { path, name, image } = data;

  return (
    <Link href={`/menu/${path}`}>
      <div className={classNames(styles.card, {}, [className])}>
        <Image
          className={styles.image}
          src={image}
          alt={`Изображение "${name}"`}
        />
        <div className={styles.card__content}>
          <p className={styles.name}>{name}</p>
        </div>
      </div>
    </Link>
  );
};
