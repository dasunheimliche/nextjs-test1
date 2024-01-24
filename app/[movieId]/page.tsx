import BgImage from "@/components/ui/bgImage";

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
      <div className="pl-40  pt-36 text-slate-50 absolute w-[50rem]">
        <h1 className="text-[4rem] text-balance">{movie?.title}</h1>
        <p className="text-[1.2rem]">{movie?.overview}</p>
      </div>
    </main>
  );
}
