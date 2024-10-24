import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authService } from "./authService";
import Cookies from "js-cookie";
import { AUTH_TOKEN_COOKIE } from "@/shared/consts/consts";
import { AuthForm } from "../model/authType";
import { useRouter } from "next/navigation";
import { PagesUrl } from "@/app/config/pagesUrl";

export const useAuth = () => {
  const queryClient = useQueryClient();

  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => authService.fetchUser(),
    enabled: !!Cookies.get(AUTH_TOKEN_COOKIE),
    retry: false,
  });

  const { push } = useRouter();

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: AuthForm) => authService.main("login", data),
    onSuccess: () => {
      push(PagesUrl.HOME);
    },
  });

  const logoutMutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      push(PagesUrl.HOME);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return {
    user,
    error,
    isLoading,
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
  };
};
