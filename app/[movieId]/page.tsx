import BgImage from "@/components/ui/bgImage";
import MainContent from "@/components/MainContent";

import fetchMovieByid from "@/actions/fetchMovieById";
import { Movie } from "../types";

export default async function Page({
  params,
}: {
  params: { movieId: string };
}) {
  const { movieId } = params;

  const movie = (await fetchMovieByid(movieId)) as Movie;

  return (
    <main className="w-full h-full p-0 flex relative">
      <BgImage movie={movie} />
      <MainContent movie={movie} />
    </main>
  );
}
