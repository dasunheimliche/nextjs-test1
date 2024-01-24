"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface searchStoreType {
  searchInput: string;
  setSearchInput: (searchString: string) => void;
  searchResult: any[];
  setSearchResult: (result: any[]) => void;
}

export const useSearchStore = create<searchStoreType>()(
  persist(
    (set, get) => ({
      searchInput: "",
      setSearchInput: (searchString: string) =>
        set({ searchInput: searchString }),
      searchResult: [],
      setSearchResult: (result) => set({ searchResult: result }),
    }),
    {
      name: "search-storage",
    }
  )
);

export default useSearchStore;
