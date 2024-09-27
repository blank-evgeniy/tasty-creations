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
  href: string;
}

const AppLink = ({
  className,
  href,
  theme = LinkTheme.DEFAULT,
  children,
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      className={classNames(styles.link, {}, [className, styles[theme]])}
      href={href}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
