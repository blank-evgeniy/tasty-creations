"use client";
import styles from "./page.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import LoginForm from "@/widgets/LoginForm/LoginForm";
import RegistrationForm from "@/widgets/RegistrationForm/RegistrationForm";
import { Merriweather } from "next/font/google";
import React, { useState } from "react";

const merriweather = Merriweather({ weight: "700", subsets: ["cyrillic"] });

export enum AuthMods {
  LOGIN = "login",
  CREATE = "create",
}

const AuthPage = () => {
  const [mode, setMode] = useState<AuthMods>(AuthMods.LOGIN);

  const toggleMode = () => {
    setMode((prev) =>
      prev === AuthMods.LOGIN ? AuthMods.CREATE : AuthMods.LOGIN
    );
  };

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <h1 className={classNames(styles.title, {}, [merriweather.className])}>
          Вход
        </h1>
        {mode === AuthMods.LOGIN ? (
          <LoginForm onSwap={toggleMode} />
        ) : (
          <RegistrationForm onSwap={toggleMode} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
