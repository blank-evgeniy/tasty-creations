import { axiosClassic } from "@/shared/api/api";
import { AuthForm, AuthResponse } from "../types/auth.type";
import {
  removeFromStorage,
  saveTokenStorage,
} from "@/shared/services/auth-token";

export const authService = {
  async main(type: "login" | "register", data: AuthForm) {
    const response = await axiosClassic.post<AuthResponse>(
      `/auth/${type}`,
      data
    );

    if (response.data.token) saveTokenStorage(response.data.token);

    return response;
  },

  async logout() {
    removeFromStorage();
  },
};
