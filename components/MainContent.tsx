import { Movie } from "@/app/types";
import Details from "./Details";

export default function MainContent({ movie }: { movie: Movie }) {
  return (
    <div className="pl-40  pt-36 text-slate-50 absolute w-[50rem]">
      <h1 className="text-[5rem]">{movie?.title}</h1>
      <p className="text-[1.2rem]">{movie?.overview}</p>
      <Details movie={movie} />
    </div>
  );
}
