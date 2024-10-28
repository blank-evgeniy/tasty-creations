import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryParam = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    router.push(pathname + "?" + params.toString());
  };

  const removeQueryParam = (name: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(name);

    router.push(pathname + "?" + params.toString());
  };

  return { createQueryParam, removeQueryParam };
};
