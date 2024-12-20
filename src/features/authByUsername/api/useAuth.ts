import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authService } from "./authService";
import Cookies from "js-cookie";
import { AUTH_TOKEN_COOKIE } from "@/shared/consts/consts";
import { AuthForm } from "../model/authType";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { routes } from "@/app/config/routes";

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

  const { push, refresh } = useRouter();

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: AuthForm) => authService.main("login", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      push(routes.PUBLIC.HOME);
      toast("Вы успешно вошли в аккаунт");
    },
    onError: () => {
      toast("Данные пользователя введены неверно");
    },
  });

  const logoutMutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      refresh();
      toast("Вы успешно вышли из аккаунта");
    },
  });

  return {
    user,
    error,
    isLoading,
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isPending: loginMutation.isPending || loginMutation.isPending,
  };
};
