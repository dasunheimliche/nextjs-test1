import fetchRandomMovie from "@/actions/fetchRandomMovie";
import { getRandomMovie } from "@/lib/utils";
import { MoviePage } from "@/app/types";
import BgImage from "@/components/ui/bgImage";
import MainContent from "@/components/MainContent";

export const revalidate = 0;

export default async function Home() {
  const { results } = (await fetchRandomMovie()) as MoviePage;

  const movie = getRandomMovie(results);

  return (
    <main className="w-full h-full p-0 flex relative">
      <BgImage movie={movie} />
      <MainContent movie={movie} />
    </main>
  );
}
