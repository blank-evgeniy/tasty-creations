import { useQueryParams } from "@/shared/hooks/useQueryParams";
import { useSearchParams } from "next/navigation";
import { memo, useCallback } from "react";
import Select, { SingleValue } from "react-select";

interface RecipeSortSelectProps {
  className?: string;
}

type selectValue = SingleValue<{
  value: string;
  label: string;
}>;

const options = [
  { value: "time", label: "по времени приготовления" },
  { value: "calories", label: "по калориям" },
];

const RecipeSortSelect = memo(function RecipeSortSelect({
  className,
}: RecipeSortSelectProps) {
  const { createQueryParam, removeQueryParam } = useQueryParams();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sortBy");

  const getValue = useCallback(() => {
    return sortBy
      ? options.find((option) => option.value === sortBy)
      : undefined;
  }, [sortBy]);

  const handleSelect = useCallback(
    (newValue: selectValue) => {
      if (newValue) {
        createQueryParam("sortBy", newValue.value);
      } else {
        removeQueryParam("sortBy");
      }
    },
    [createQueryParam, removeQueryParam]
  );

  return (
    <div className={className}>
      <Select
        value={getValue()}
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
        placeholder="Сортировать по"
        instanceId={"recipe_sort"}
      />
    </div>
  );
});

export default RecipeSortSelect;
