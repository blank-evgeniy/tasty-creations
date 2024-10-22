export interface AuthForm {
  username: string;
  password: string;
}

export interface UserResponse {
  username: string;
  role: "admin" | "user";
}

export interface AuthResponse {
  token: string;
}
