import Image from "next/image";

export default function BgImage({ movie }: { movie: any }) {
  return (
    <div className="bg-slate-900 w-full h-full relative">
      {movie.backdrop_path && (
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
          fill={true}
          alt="bg"
          style={{
            objectFit: "cover",
            opacity: "35%",
          }}
          priority
        />
      )}
    </div>
  );
}
