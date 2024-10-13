"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./RegistrationForm.module.scss";
import TextField from "@/shared/ui/TextField/TextField";
import Button, { ButtonTheme } from "@/shared/ui/Button/Button";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { passwordAdvancedValidate } from "@/shared/lib/passwordValidate/passwordValidate";

interface RegistrationFormProps {
  className?: string;
  onSwap?: () => void;
}

interface RegistrationFormFields {
  username: string;
  password: string;
}

const RegistrationForm = ({ className, onSwap }: RegistrationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormFields>();

  const submit: SubmitHandler<RegistrationFormFields> = (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<RegistrationFormFields> = (data) => {
    console.log(data);
  };

  const nameValidate = (value: string) => {
    if (value.length < 5) {
      return "длина не менее 5 символов";
    }
  };

  const passwordValidate = (value: string) => {
    const validateErrors = passwordAdvancedValidate(value);

    if (validateErrors.length) {
      return validateErrors[0];
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit, error)}
      className={classNames(styles.registration_form, {}, [className])}
    >
      <div className={styles.inputs_container}>
        <TextField
          label="Придумайте имя пользователя"
          type="text"
          {...register("username", {
            required: "введите имя пользователя",
            validate: nameValidate,
          })}
          maxLength={20}
          errorMessage={errors.username?.message || undefined}
        />
        <TextField
          label="Придумайте пароль"
          {...register("password", {
            required: "введите пароль",
            validate: passwordValidate,
          })}
          maxLength={20}
          errorMessage={errors.password?.message || undefined}
          type="password"
        />
      </div>

      <div className={styles.buttons_container}>
        <Button className={styles.btn} type="submit">
          Создать
        </Button>
        <div>
          Уже есть аккаунта? -{" "}
          <Button onClick={onSwap} theme={ButtonTheme.CLEAR} type="button">
            войти
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
