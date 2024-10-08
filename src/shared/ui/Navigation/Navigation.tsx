import { classNames } from "@/shared/lib/classNames/classNames";
import NavLink from "../NavLink/NavLink";

import styles from "./Navigation.module.scss";

interface NavigationProps {
  className?: string;
}

interface NavigationLink {
  href: string;
  title: string;
}

const NavLinks: NavigationLink[] = [
  { href: "/categories", title: "Категории" },
  { href: "/menu", title: "Рецепты" },
  { href: "/random", title: "Что приготовить?" },
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
