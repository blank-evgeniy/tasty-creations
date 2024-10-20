import { classNames } from "@/shared/lib/classNames/classNames";
import AppIcon from "@/shared/assets/icons/app-icon.svg";
import Navigation from "@/shared/ui/Navigation/Navigation";
import { Merriweather } from "next/font/google";

import styles from "./Navbar.module.scss";
import AppLink, { LinkSize } from "@/shared/ui/Link/AppLink";
import { PagesUrl } from "@/app/config/pagesUrl";

const merriweather = Merriweather({ weight: "700", subsets: ["cyrillic"] });

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <header
      className={classNames(styles.container, {}, [
        className,
        merriweather.className,
      ])}
    >
      <AppLink className={styles.title} href={PagesUrl.HOME}>
        <AppIcon />
        Tasty Creations
      </AppLink>
      <Navigation />
      <AppLink href={PagesUrl.AUTH} size={LinkSize.L}>
        Войти
      </AppLink>
    </header>
  );
};

export default Navbar;
