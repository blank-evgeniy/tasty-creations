import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./TextField.module.scss";
import { forwardRef, InputHTMLAttributes, Ref } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const TextField = forwardRef(function TextField(
  { label, name, className, errorMessage, ...otherProps }: TextFieldProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div className={classNames(styles.container, {}, [className])}>
      {!!label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={styles.input}
        id={name}
        name={name}
        {...otherProps}
      />

      {!!errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
});

export default TextField;
