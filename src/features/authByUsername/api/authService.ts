import { axiosClassic, axiosWithAuth } from "@/shared/api/api";
import { AuthForm, AuthResponse, UserResponse } from "../model/authType";
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

  async fetchUser() {
    try {
      const response = await axiosWithAuth.get<UserResponse>("/profile");
      return response.data;
    } catch {
      return null;
    }
  }
}

export const authService = new AuthService();
