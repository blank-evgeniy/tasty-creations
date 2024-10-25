"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./RegistrationForm.module.scss";
import TextField from "@/shared/ui/TextField/TextField";
import Button, { ButtonColor, ButtonTheme } from "@/shared/ui/Button/Button";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { passwordAdvancedValidate } from "@/shared/lib/passwordValidate/passwordValidate";
import { AuthForm, authService } from "@/features/authByUsername";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { errorCatch } from "@/shared/api/error";

interface RegistrationFormProps {
  className?: string;
  onSwap: () => void;
}

export const RegistrationForm = ({
  className,
  onSwap,
}: RegistrationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthForm>();

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: AuthForm) => authService.main("register", data),
    onSuccess() {
      reset();
      onSwap();
      toast.success("Пользователь успешно создан :)");
    },
    onError(error) {
      if (errorCatch(error) === "Username already taken") {
        toast.error("Имя пользователя уже занято :( ", {
          description: "Пожалуйста, попробуйте другое имя",
        });
      }
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
      <h1 className={classNames(styles.title)}>Регистрация</h1>
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
        <Button
          color={ButtonColor.SECONDARY}
          className={styles.btn}
          type="submit"
        >
          Создать
        </Button>
        <div>
          Уже есть аккаунт? -{" "}
          <Button
            color={ButtonColor.SECONDARY}
            onClick={onSwap}
            theme={ButtonTheme.CLEAR}
            type="button"
          >
            войти
          </Button>
        </div>
      </div>
    </form>
  );
};
