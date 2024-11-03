"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import AppIcon from "@/shared/assets/icons/app-icon.svg";
import { Merriweather } from "next/font/google";
import AppLink, { LinkSize } from "@/shared/ui/Link/AppLink";
import { routes } from "@/app/config/routes";
import Navigation from "./Navigation/Navigation";
import { useAuth } from "@/features/authByUsername";
import Profile from "./Profile/Profile";
import Link from "next/link";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import { NavigationLinks, NavigationLinksWithAuth } from "../model/navbar";

import styles from "./Navbar.module.scss";

const merriweather = Merriweather({ weight: "700", subsets: ["cyrillic"] });

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { user } = useAuth();

  const navLinks = user ? NavigationLinksWithAuth : NavigationLinks;

  return (
    <header
      className={classNames(styles.container, {}, [
        className,
        merriweather.className,
      ])}
    >
      <AppLink
        size={LinkSize.L}
        className={styles.title}
        href={routes.PUBLIC.HOME}
      >
        <AppIcon />
        Tasty Creations
      </AppLink>
      <Navigation navLinks={navLinks} className={styles.navigation} />
      <MobileNavigation
        navLinks={navLinks}
        className={styles.mobile_navigation}
      />
      {!!user ? (
        <Link href={routes.PRIVATE.PROFILE}>
          <Profile user={user} />
        </Link>
      ) : (
        <AppLink href={routes.PUBLIC.AUTH} size={LinkSize.L}>
          Войти
        </AppLink>
      )}
    </header>
  );
};
