import { Metadata } from "next";
import Auth from "./Auth";

export const metadata: Metadata = {
  title: "Авторизация",
};

const AuthPage = () => {
  return <Auth />;
};

export default AuthPage;
