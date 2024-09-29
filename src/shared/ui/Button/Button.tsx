import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  DEFAULT = "default",
  CLEAR = "clear",
}

export enum ButtonSize {
  S = "small",
  M = "medium",
  L = "large",
}

export enum ButtonColor {
  PRYMARY = "primary",
  SECONDARY = "secondary",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  size?: ButtonSize;
  color?: ButtonColor;
  withIcon?: boolean;
}

const Button = ({
  className,
  theme = ButtonTheme.DEFAULT,
  size = ButtonSize.M,
  color = ButtonColor.PRYMARY,
  withIcon = false,
  children,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.link, { [styles.withIcon]: withIcon }, [
        className,
        styles[theme],
        styles[size],
        styles[color],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
