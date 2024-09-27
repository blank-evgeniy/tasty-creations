import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import AppLink, { LinkTheme } from "@/shared/ui/Link/AppLink";
import AppIcon from "@/shared/assets/icons/app-icon.svg";
import Image from "next/image";
import Button, { ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={classNames(styles.container, {}, [className])}>
      <Link className={styles.title} href="/">
        <Image src={AppIcon} alt="app icon" width={32} height={32} />
        Tasty Creations
      </Link>
      <nav className={styles.navigation}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <AppLink theme={LinkTheme.BUTTON} href={"/"}>
              Категории
            </AppLink>
          </li>
          <li className={styles.link}>
            <AppLink theme={LinkTheme.BUTTON} href={"/"}>
              Рецепты
            </AppLink>
          </li>
          <li className={styles.link}>
            <AppLink theme={LinkTheme.BUTTON} href={"/"}>
              Что приготовить?
            </AppLink>
          </li>
        </ul>
      </nav>
      <Button theme={ButtonTheme.CLEAR} size={ButtonSize.L}>
        Войти
      </Button>
    </header>
  );
};

export default Navbar;
