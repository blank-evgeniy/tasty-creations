"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import NavLink from "../../../../shared/ui/NavLink/NavLink";
import styles from "./Navigation.module.scss";
import { NavigationLink } from "../../model/navbar";

interface NavigationProps {
  className?: string;
  navLinks: NavigationLink[];
}

const Navigation = ({ className, navLinks }: NavigationProps) => {
  return (
    <nav className={classNames(styles.navigation, {}, [className])}>
      <ul className={styles.links}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
