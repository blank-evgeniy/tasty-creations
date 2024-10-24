"use client";
import { PagesUrl } from "@/app/config/pagesUrl";
import { categoryService } from "@/entities/Category";
import Heading from "@/shared/ui/Heading/Heading";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

export const RecipesHeading = ({ path }: { path: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories", path],
    queryFn: () => categoryService.getCategoryByPath(path),
    staleTime: 5 * 1000 * 60,
  });

  if (isLoading) return null;

  return (
    <Heading>
      <Link
        href={PagesUrl.RECIPES}
        style={{ color: "inherit", textDecoration: "underline" }}
      >
        Рецепты
      </Link>
      /{data?.name}
    </Heading>
  );
};
