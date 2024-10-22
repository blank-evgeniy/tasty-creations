import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./CategoryCard.module.scss";
import Link from "next/link";
import { Category } from "../../model/category";
import { Noto_Serif } from "next/font/google";

import Icon from "@/shared/assets/icons/cherry.svg";

const noto = Noto_Serif({ weight: "500", subsets: ["cyrillic"] });

interface CategoryCardProps {
  className?: string;
  data: Category;
}

export const CategoryCard = ({ className, data }: CategoryCardProps) => {
  const { path, name, icon } = data;

  return (
    <Link href={`/menu/${path}`}>
      <div className={classNames(styles.card, {}, [className, noto.className])}>
        <Icon width={100} height={100} className={styles.image} />
        <div className={styles.card__content}>
          <p className={styles.name}>{name}</p>
        </div>
      </div>
    </Link>
  );
};
