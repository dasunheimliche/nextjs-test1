"use client";

import SearchForm from "@/components/SearchForm";
import SearchResults from "@/components/SearchResults";
import ToggleButton from "@/components/ToggleButton";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { useIsMobile } from "@/hooks/useIsMobile";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const isMobile = useIsMobile();

  return (
    <>
      <ToggleButton isOpen={isOpen} onOpen={() => setIsOpen(!isOpen)} />
      <aside
        className={cn(
          "overflow-hidden max-sm:max-w-full max-sm:min-w-full max-sm:absolute max-sm:inset-0 w-[27rem] min-w-[27rem] max-w-[27rem] px-10  bg-slate-950 h-full flex flex-col gap-4 pt-20 z-50 transition-all duration-150",
          isOpen ? "" : "w-0 min-w-0 max-0 p-0 max-sm:min-w-0 opacity-0"
        )}
      >
        <SearchForm />
        (
        <SearchResults
          onSelectCardInMobile={isMobile ? () => setIsOpen(false) : undefined}
        />
        )
      </aside>
    </>
  );
}
