import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return <span className={classNames(styles.loader, {}, [className])}></span>;
};

export default Loader;
