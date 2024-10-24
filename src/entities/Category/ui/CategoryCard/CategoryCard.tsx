import { classNames } from "@/shared/lib/classNames/classNames";
import Link from "next/link";
import { Category } from "../../model/category";
import { Noto_Serif } from "next/font/google";
import { getClientIcon } from "@/shared/ui/ClientIcon";

import styles from "./CategoryCard.module.scss";
import { PagesUrl } from "@/app/config/pagesUrl";

const noto = Noto_Serif({ weight: "500", subsets: ["cyrillic"] });

interface CategoryCardProps {
  className?: string;
  data: Category;
}

export const CategoryCard = ({ className, data }: CategoryCardProps) => {
  const { path, name, icon } = data;

  const Icon = getClientIcon(icon);

  return (
    <Link href={`${PagesUrl.RECIPES}/${path}`}>
      <div className={classNames(styles.card, {}, [className, noto.className])}>
        <Icon width={100} height={100} className={styles.image} />
        <div className={styles.card__content}>
          <p className={styles.name}>{name}</p>
        </div>
      </div>
    </Link>
  );
};
