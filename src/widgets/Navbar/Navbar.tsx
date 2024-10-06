import { classNames } from "@/shared/lib/classNames/classNames";
import Link from "next/link";
import AppIcon from "@/shared/assets/icons/app-icon.svg";
import Button, { ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import Navigation from "@/shared/ui/Navigation/Navigation";
import { Merriweather } from "next/font/google";

import styles from "./Navbar.module.scss";

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
      <Link className={styles.title} href="/">
        <AppIcon />
        Tasty Creations
      </Link>
      <Navigation />
      <Button theme={ButtonTheme.CLEAR} size={ButtonSize.L}>
        Войти
      </Button>
    </header>
  );
};

export default Navbar;
