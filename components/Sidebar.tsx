"use client";

import SearchForm from "@/components/SearchForm";
import SearchResults from "@/components/SearchResults";
import ToggleButton from "@/components/ToggleButton";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <aside
      className={cn(
        "w-[27rem] min-w-[27rem] max-w-[27rem] px-10  bg-slate-950 h-full flex flex-col gap-4 pt-20 z-50 transition-all",
        isOpen ? "" : "w-0 min-w-0 max-0 p-0"
      )}
    >
      <ToggleButton isOpen={isOpen} onOpen={() => setIsOpen(!isOpen)} />
      {isOpen && <SearchForm />}
      {isOpen && <SearchResults />}
    </aside>
  );
}
