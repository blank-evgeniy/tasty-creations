"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./RecipeSearch.module.scss";
import SearchIcon from "@/shared/assets/icons/search.svg";
import ClearIcon from "@/shared/assets/icons/x.svg";
import { useCallback, useEffect, useState } from "react";
import { useQueryParams } from "@/shared/hooks/useQueryParams";
import debounce from "lodash.debounce";

interface RecipeSearchProps {
  className?: string;
  value?: string;
}

const RecipeSearch = ({ className }: RecipeSearchProps) => {
  const { createQueryParam, removeQueryParam } = useQueryParams();
  const [isFocuse, setIsFocuse] = useState(false);
  const [value, setValue] = useState("");

  const updateSearchQuery = (searchQuery?: string) => {
    if (searchQuery) {
      createQueryParam("search", searchQuery);
    } else {
      removeQueryParam("search");
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceUpdateSearchQuery = useCallback(
    debounce(updateSearchQuery, 500),
    []
  );

  useEffect(() => {
    debounceUpdateSearchQuery(value);

    return () => {
      debounceUpdateSearchQuery.cancel();
    };
  }, [value, debounceUpdateSearchQuery]);

  return (
    <div
      className={classNames(
        styles.search,
        { [styles.search__focused]: isFocuse },
        [className]
      )}
    >
      <SearchIcon width={24} height={24} />

      <input
        className={styles.input}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onFocus={() => setIsFocuse(true)}
        onBlur={() => setIsFocuse(false)}
        placeholder="Поиск..."
        type="text"
        id="recipe_search"
      />

      {value.length > 0 && (
        <ClearIcon width={24} height={24} onClick={() => setValue("")} />
      )}
    </div>
  );
};

export default RecipeSearch;
