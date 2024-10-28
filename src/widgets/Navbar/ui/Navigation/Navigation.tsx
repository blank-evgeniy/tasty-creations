"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import NavLink from "../../../../shared/ui/NavLink/NavLink";
import styles from "./Navigation.module.scss";
import { PagesUrl } from "@/app/config/pagesUrl";
import { useAuth } from "@/features/authByUsername";

interface NavigationProps {
  className?: string;
}

interface NavigationLink {
  href: PagesUrl;
  title: string;
}

const NavLinks: NavigationLink[] = [
  { href: PagesUrl.CATEGORIES, title: "Категории" },
  { href: PagesUrl.RECIPES, title: "Рецепты" },
];

const Navigation = ({ className }: NavigationProps) => {
  const { user } = useAuth();

  return (
    <nav className={classNames(styles.navigation, {}, [className])}>
      <ul className={styles.links}>
        {NavLinks.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href}>{link.title}</NavLink>
          </li>
        ))}
        {user && (
          <li key={"book"}>
            <NavLink href={PagesUrl.RECIPE_BOOK}>Книга рецептов</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
