"use client";

import { LoginForm, RegistrationForm } from "@/features/authByUsername";
import styles from "./Auth.module.scss";
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
