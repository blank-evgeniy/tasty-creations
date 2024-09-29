import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

export enum LinkTheme {
  DEFAULT = "default",
  BUTTON = "button",
}

interface AppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  theme?: LinkTheme;
  withIcon?: boolean;
  href: string;
}

const AppLink = ({
  className,
  href,
  theme = LinkTheme.DEFAULT,
  withIcon = false,
  children,
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      className={classNames(styles.link, { [styles.withIcon]: withIcon }, [
        className,
        styles[theme],
      ])}
      href={href}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
