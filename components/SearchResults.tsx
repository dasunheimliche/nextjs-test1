"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import useSearchStore from "@/hooks/useSearchStore";
import ResultCard from "@/components/ResultCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import fetchMovies from "@/actions/fetchMovies";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Movie, MoviePage } from "@/app/types";
import ResultCardLoading from "./ResultCardLoading";

export default function SearchResults() {
  const { searchResult, searchInput } = useSearchStore();

  const { ref, inView } = useInView();

  const [mounted, setMounted] = useState(false);

  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [searchInput + searchResult.length],
      queryFn: async ({ pageParam }: { pageParam: number }) => {
        const res = (await fetchMovies(searchInput, pageParam)) as MoviePage;
        return res;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        if (lastPage.total_pages < lastPage.page + 1) return undefined;
        return lastPage.page + 1 ?? undefined;
      },
    });

  useEffect(() => {
    if (inView && searchInput) {
      fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (!searchInput) return null;

  return (
    <ScrollArea className="">
      <div className="flex flex-col gap-4 rounded">
        {!data?.pages &&
          Array.from({ length: 10 }).map((_n, i) => (
            <ResultCardLoading key={i} />
          ))}
        {data &&
          data.pages?.map((page: MoviePage) => {
            return page.results?.map((mov: Movie) => (
              <ResultCard key={mov.id} movie={mov} />
            ));
          })}
      </div>
      <div>
        <button
          ref={ref}
          disabled={!hasNextPage || isFetchingNextPage}
          className="bg-red-600 opacity-0"
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load Newer"
            : "Nothing more to load"}
        </button>
      </div>
    </ScrollArea>
  );
}
