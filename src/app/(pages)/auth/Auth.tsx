"use client";

import styles from "./page.module.scss";
import LoginForm from "@/features/authByUsername/ui/LoginForm/LoginForm";
import RegistrationForm from "@/features/authByUsername/ui/RegistrationForm/RegistrationForm";
import React, { useState } from "react";

export enum AuthMods {
  LOGIN = "login",
  CREATE = "create",
}

const Auth = () => {
  const [mode, setMode] = useState<AuthMods>(AuthMods.LOGIN);

  const toggleMode = () => {
    setMode((prev) =>
      prev === AuthMods.LOGIN ? AuthMods.CREATE : AuthMods.LOGIN
    );
  };

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        {mode === AuthMods.LOGIN ? (
          <LoginForm onSwap={toggleMode} />
        ) : (
          <RegistrationForm onSwap={toggleMode} />
        )}
      </div>
    </div>
  );
};

export default Auth;
