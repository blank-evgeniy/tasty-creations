import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

export enum LinkTheme {
  DEFAULT = "default",
  BUTTON = "button",
}

export enum LinkColor {
  PRYMARY = "primary",
  SECONDARY = "secondary",
}

export enum LinkSize {
  S = "small",
  M = "medium",
  L = "large",
}

interface AppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  theme?: LinkTheme;
  withIcon?: boolean;
  color?: LinkColor;
  size?: LinkSize;
  href: string;
}

const AppLink = ({
  className,
  href,
  theme = LinkTheme.DEFAULT,
  color = LinkColor.PRYMARY,
  size = LinkSize.M,
  withIcon = false,
  children,
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      className={classNames(styles.link, { [styles.withIcon]: withIcon }, [
        className,
        styles[theme],
        styles[color],
        styles[size],
      ])}
      href={href}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
