import { classNames } from "@/shared/lib/classNames/classNames";
import NavLink from "../../../../shared/ui/NavLink/NavLink";

import styles from "./Navigation.module.scss";
import { PagesUrl } from "@/app/config/pagesUrl";

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
  { href: PagesUrl.RANDOM, title: "Что приготовить?" },
];

const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={classNames(styles.navigation, {}, [className])}>
      <ul className={styles.links}>
        {NavLinks.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
