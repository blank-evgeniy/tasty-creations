import { classNames } from "@/shared/lib/classNames/classNames";
import AppLink, { LinkTheme } from "@/shared/ui/Link/AppLink";

import styles from "./Navigation.module.scss";

interface NavigationProps {
  className?: string;
}

interface NavLink {
  href: string;
  title: string;
}

const NavLinks: NavLink[] = [
  { href: "/categories", title: "Категории" },
  { href: "/recipes", title: "Рецепты" },
  { href: "/random", title: "Что приготовить?" },
];

const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={classNames(styles.navigation, {}, [className])}>
      <ul className={styles.links}>
        {NavLinks.map((link) => (
          <li key={link.href}>
            <AppLink theme={LinkTheme.BUTTON} href={link.href}>
              {link.title}
            </AppLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
