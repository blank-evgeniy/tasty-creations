"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./NavLink.module.scss";
import AppLink, { LinkTheme } from "../Link/AppLink";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  className?: string;
  children?: React.ReactNode;
  href: string;
}

const NavLink = ({ className, href, children }: NavLinkProps) => {
  const pathname = usePathname();

  const mods = {
    [styles.active]: pathname.startsWith(href),
  };

  return (
    <AppLink
      href={href}
      theme={LinkTheme.BUTTON}
      className={classNames(styles.NavLink, mods, [className])}
    >
      {children}
    </AppLink>
  );
};

export default NavLink;
