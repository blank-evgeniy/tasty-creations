"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./LoginForm.module.scss";
import TextField from "@/shared/ui/TextField/TextField";
import Button, { ButtonTheme } from "@/shared/ui/Button/Button";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { AuthForm, authService } from "@/features/authByUsername";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  className?: string;
  onSwap?: () => void;
}

const LoginForm = ({ className, onSwap }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthForm>();

  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: AuthForm) => authService.main("login", data),
    onSuccess() {
      reset();
      push("/menu");
    },
  });

  const submit: SubmitHandler<AuthForm> = (data) => {
    mutate(data);
  };

  const error: SubmitErrorHandler<AuthForm> = (data) => {
    console.log(data);
  };

  const nameValidate = (value: string) => {
    if (value.length < 5) {
      return "длина не менее 5 символов";
    }
  };

  const passwordValidate = (value: string) => {
    if (value.length < 8) {
      return "длина не менее 8 символов";
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit, error)}
      className={classNames(styles.login_form, {}, [className])}
    >
      <h1 className={classNames(styles.title)}>Вход</h1>
      <div className={styles.inputs_container}>
        <TextField
          label="Имя"
          type="text"
          {...register("username", {
            required: "введите имя пользователя",
            validate: nameValidate,
          })}
          maxLength={20}
          errorMessage={errors.username?.message || undefined}
        />
        <TextField
          label="Пароль"
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
          Войти
        </Button>
        <div>
          Еще нет аккаунта? -{" "}
          <Button onClick={onSwap} theme={ButtonTheme.CLEAR} type="button">
            создать аккаунт
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
