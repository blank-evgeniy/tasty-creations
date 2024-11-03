"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import NavLink from "../../../../shared/ui/NavLink/NavLink";
import styles from "./MobileNavigation.module.scss";
import { routes } from "@/app/config/routes";
import { useEffect, useState } from "react";
import MenuIcon from "@/shared/assets/icons/menu.svg";
import CloseIcon from "@/shared/assets/icons/x.svg";
import { AnimatePresence, motion } from "framer-motion";
import AppLink, { LinkSize } from "@/shared/ui/Link/AppLink";
import AppIcon from "@/shared/assets/icons/app-icon.svg";
import { usePathname } from "next/navigation";
import { NavigationLink } from "../../model/navbar";

interface MobileNavigationProps {
  className?: string;
  navLinks: NavigationLink[];
}

const MobileNavigation = ({ className, navLinks }: MobileNavigationProps) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsCollapse(false); //при изменении текущего uri закрываем меню навигации
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
                  href={routes.PUBLIC.HOME}
                >
                  <AppIcon />
                  Tasty Creations
                </AppLink>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href}>{link.title}</NavLink>
                </li>
              ))}
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
