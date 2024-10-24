"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import AppIcon from "@/shared/assets/icons/app-icon.svg";
import { Merriweather } from "next/font/google";
import AppLink, { LinkSize } from "@/shared/ui/Link/AppLink";
import { PagesUrl } from "@/app/config/pagesUrl";
import Navigation from "./Navigation/Navigation";
import { useAuth } from "@/features/authByUsername";
import Profile from "./Profile/Profile";

import styles from "./Navbar.module.scss";
import Link from "next/link";

const merriweather = Merriweather({ weight: "700", subsets: ["cyrillic"] });

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { user } = useAuth();

  return (
    <header
      className={classNames(styles.container, {}, [
        className,
        merriweather.className,
      ])}
    >
      <AppLink size={LinkSize.L} className={styles.title} href={PagesUrl.HOME}>
        <AppIcon />
        Tasty Creations
      </AppLink>
      <Navigation />
      {!!user ? (
        <Link href={PagesUrl.PROFILE}>
          <Profile user={user} />
        </Link>
      ) : (
        <AppLink href={PagesUrl.AUTH} size={LinkSize.L}>
          Войти
        </AppLink>
      )}
    </header>
  );
};
