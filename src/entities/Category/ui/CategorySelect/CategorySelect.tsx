"use client";
import { useRouter } from "next/navigation";
import { memo, useCallback } from "react";
import Select, { SingleValue } from "react-select";
import { categoryService } from "../../api/categoryService";
import { useQuery } from "@tanstack/react-query";
import { PagesUrl } from "@/app/config/pagesUrl";

interface RecipeSortSelectProps {
  className?: string;
}

type selectValue = SingleValue<{
  value: string;
  label: string;
}>;

export const CategorySelect = memo(function CategorySelect({
  className,
}: RecipeSortSelectProps) {
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoryService.getAllCategories(),
  });

  const handleSelect = useCallback(
    (newValue: selectValue) => {
      if (newValue) {
        router.push(`${PagesUrl.RECIPES}/${newValue.value}`);
      } else {
        return;
      }
    },
    [router]
  );

  if (isLoading)
    return (
      <div className={className}>
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "white !important" : "orange",
              boxShadow: state.isFocused
                ? "0 0 0 1px var(--accent-color) !important"
                : undefined,
            }),
            option: (baseStyles, { isSelected, isFocused }) => ({
              ...baseStyles,
              backgroundColor: isSelected
                ? "var(--accent-color)"
                : isFocused
                ? "var(--accent-color-light)"
                : undefined,
              ":active": !isSelected ? { opacity: 0.8 } : undefined,
            }),
          }}
          placeholder="Выбрать категорию"
          instanceId={"category_select"}
        />
      </div>
    );

  if (!data) return null;

  const options = data.map((category) => ({
    value: category.path,
    label: category.name,
  }));

  return (
    <div className={className}>
      <Select
        isClearable
        options={options}
        onChange={handleSelect}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "white !important" : "orange",
            boxShadow: state.isFocused
              ? "0 0 0 1px var(--accent-color) !important"
              : undefined,
          }),
          option: (baseStyles, { isSelected, isFocused }) => ({
            ...baseStyles,
            backgroundColor: isSelected
              ? "var(--accent-color)"
              : isFocused
              ? "var(--accent-color-light)"
              : undefined,
            ":active": !isSelected ? { opacity: 0.8 } : undefined,
          }),
        }}
        placeholder="Выбрать категорию"
        instanceId={"category_select"}
      />
    </div>
  );
});
