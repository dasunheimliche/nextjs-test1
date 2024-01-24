import fetchGenresList from "@/actions/fetchGenresList";
import { Genre, Movie, MovieGenres } from "@/app/types";

export default async function Details({ movie }: { movie: Movie }) {
  const allGenres = (await fetchGenresList()) as MovieGenres;

  const genres = allGenres.genres.filter((genre: Genre) => {
    if (movie?.genre_ids?.includes(genre.id)) {
      return genre.name;
    }
  });

  let movieGenres;

  if (movie.genres) {
    movieGenres = movie.genres;
  } else {
    movieGenres = genres;
  }

  const releaseYear = movie.release_date.split("-")[0];
  return (
    <div className="mt-2">
      {`${movie.original_language.toUpperCase()} | ${releaseYear} |`}
      <span>
        {movieGenres.map((genre) => (
          <span className="mx-1" key={genre.id}>
            {genre.name}
          </span>
        ))}
      </span>
    </div>
  );
}
