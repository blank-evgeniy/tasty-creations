import axios, { CreateAxiosDefaults } from "axios";
import { getAuthToken, removeFromStorage } from "../services/auth-token";
import { errorCatch } from "./error";

const options: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const axiosClassic = axios.create(options);

const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const authToken = getAuthToken();

  if (config?.headers && authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  return config;
});

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (errorCatch(error) === "Invalid token" ||
        error.response.status === 401) &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      removeFromStorage();
    }
  }
);

export { axiosClassic, axiosWithAuth };
