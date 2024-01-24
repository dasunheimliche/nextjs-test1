import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

import { searchStoreType } from "./useSearchStore";

export default function useSearchSync(
  searchStore: searchStoreType | undefined,
  debouncedSearch: string,
  form: UseFormReturn<
    {
      input: string;
    },
    any,
    undefined
  >
) {
  useEffect(() => {
    if (debouncedSearch) {
      searchStore?.setSearchInput(debouncedSearch);
    } else {
      searchStore?.setSearchInput("");
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (searchStore?.searchInput === form.watch("input")) return;
    form.setValue(
      "input",
      searchStore?.searchInput ? searchStore.searchInput : ""
    );
  }, [searchStore?.searchInput]);
}
