import Cookies from "js-cookie";
import { AUTH_TOKEN_COOKIE } from "../consts/consts";

export const getAuthToken = () => {
  const authToken = Cookies.get(AUTH_TOKEN_COOKIE);
  return authToken || null;
};

export const saveTokenStorage = (authToken: string) => {
  Cookies.set(AUTH_TOKEN_COOKIE, authToken, { expires: 7 });
};

export const removeFromStorage = () => {
  Cookies.remove(AUTH_TOKEN_COOKIE);
};
