"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import NavLink from "../../../../shared/ui/NavLink/NavLink";
import styles from "./MobileNavigation.module.scss";
import { PagesUrl } from "@/app/config/pagesUrl";
import { useAuth } from "@/features/authByUsername";
import { useEffect, useState } from "react";
import MenuIcon from "@/shared/assets/icons/menu.svg";
import CloseIcon from "@/shared/assets/icons/x.svg";
import { AnimatePresence, motion } from "framer-motion";
import AppLink, { LinkSize } from "@/shared/ui/Link/AppLink";
import AppIcon from "@/shared/assets/icons/app-icon.svg";
import { usePathname } from "next/navigation";

interface MobileNavigationProps {
  className?: string;
}

interface MobileNavigationLink {
  href: PagesUrl;
  title: string;
}

const NavLinks: MobileNavigationLink[] = [
  { href: PagesUrl.CATEGORIES, title: "Категории" },
  { href: PagesUrl.RECIPES, title: "Рецепты" },
];

const MobileNavigation = ({ className }: MobileNavigationProps) => {
  const { user } = useAuth();
  const [isCollapse, setIsCollapse] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsCollapse(false);
  }, [pathname]);

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <button className={styles.menu_icon}>
        <MenuIcon onClick={() => setIsCollapse(true)} />
      </button>

      <AnimatePresence>
        {isCollapse && (
          <motion.nav
            initial={{ translateX: "100%" }}
            animate={{ translateX: 0 }}
            exit={{ translateX: "100%" }}
            transition={{ ease: "linear" }}
            className={classNames(styles.navigation, {
              [styles.open]: isCollapse,
            })}
          >
            <ul className={styles.links}>
              <li key="logo">
                <AppLink
                  size={LinkSize.L}
                  className={styles.logo}
                  href={PagesUrl.HOME}
                >
                  <AppIcon />
                  Tasty Creations
                </AppLink>
              </li>
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
            <button
              className={styles.close_icon}
              onClick={() => setIsCollapse(false)}
            >
              <CloseIcon />
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavigation;
