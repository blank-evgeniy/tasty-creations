import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Heading.module.scss";
import { ReactNode } from "react";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ weight: "700", subsets: ["cyrillic"] });

interface HeadingProps {
  className?: string;
  children?: ReactNode;
}

const Heading = ({ className, children }: HeadingProps) => {
  return (
    <h1
      className={classNames(styles.heading, {}, [
        className,
        merriweather.className,
      ])}
    >
      {children}
    </h1>
  );
};

export default Heading;
