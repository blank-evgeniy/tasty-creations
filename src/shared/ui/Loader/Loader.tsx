import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
  mini?: boolean;
}

const Loader = ({ className, mini = false }: LoaderProps) => {
  return (
    <span
      className={
        mini
          ? classNames(styles.loader_mini, {}, [className])
          : classNames(styles.loader, {}, [className])
      }
    ></span>
  );
};

export default Loader;
