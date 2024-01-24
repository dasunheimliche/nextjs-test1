import { Movie } from "@/app/types";
import Details from "./Details";

export default function MainContent({ movie }: { movie: Movie }) {
  return (
    <div className="max-sm:max-w-[100vw] max-sm:overflow-hidden max-sm:p-6 max-sm:pt-28  pl-40  pt-36 text-slate-50 absolute w-[50rem]">
      <h1 className="max-sm:text-[2.7rem] text-[5rem]">{movie?.title}</h1>
      <p className="text-[1.2rem]">{movie?.overview}</p>
      <Details movie={movie} />
    </div>
  );
}
