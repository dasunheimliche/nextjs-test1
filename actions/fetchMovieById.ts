"use server";

import fetch from "node-fetch";

export default async function fetchMovieByid(movieId: string) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_KEY}`,
    },
  };

  try {
    const movie = await fetch(url, options);
    return movie.json();
  } catch (error) {
    console.log(error);
  }
}
