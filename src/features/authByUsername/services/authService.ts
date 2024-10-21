import { axiosClassic } from "@/shared/api/api";
import { AuthForm, AuthResponse } from "../types/authType";
import {
  removeFromStorage,
  saveTokenStorage,
} from "@/shared/services/auth-token";

class AuthService {
  private BASE_URL = "/auth";

  async main(type: "login" | "register", data: AuthForm) {
    const response = await axiosClassic.post<AuthResponse>(
      `${this.BASE_URL}/${type}`,
      data
    );

    if (response.data.token) saveTokenStorage(response.data.token);

    return response;
  }

  async logout() {
    removeFromStorage();
  }
}

export const authService = new AuthService();
