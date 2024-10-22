import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { categoryService } from "../../api/categoryService";
import CategoriesList from "./CategoriesList";

interface CategoriesListHydrationProps {
  className: string;
}

export const CategoriesListHydration = async ({
  className,
}: CategoriesListHydrationProps) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: () => categoryService.getAllCategories(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CategoriesList className={className} />
    </HydrationBoundary>
  );
};
