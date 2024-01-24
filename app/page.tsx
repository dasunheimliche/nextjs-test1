import fetchRandomMovie from "@/actions/fetchRandomMovie";
import { getRandomMovie } from "@/lib/utils";
import { Movie } from "@/app/types";
import BgImage from "@/components/ui/bgImage";

export const revalidate = 0;

export default async function Home() {
  const { results }: { results: Movie[] } = await fetchRandomMovie();

  const movie = getRandomMovie(results);

  return (
    <main className="w-full h-full p-0 flex relative">
      <BgImage movie={movie} />
      <div className="pl-40  pt-36 text-slate-50 absolute w-[50rem]">
        <h1 className="text-[5rem]">{movie?.title}</h1>
        <p className="text-[1.2rem]">{movie?.overview}</p>
      </div>
    </main>
  );
}
