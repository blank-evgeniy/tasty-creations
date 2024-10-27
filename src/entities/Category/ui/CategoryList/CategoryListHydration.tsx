import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { categoryService } from "../../api/categoryService";
import CategoryList from "./CategoryList";

interface CategoryListHydrationProps {
  className: string;
}

export const CategoryListHydration = async ({
  className,
}: CategoryListHydrationProps) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: () => categoryService.getAllCategories(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CategoryList className={className} />
    </HydrationBoundary>
  );
};
