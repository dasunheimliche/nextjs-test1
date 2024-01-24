"use server";

import fetch from "node-fetch";

export default async function fetchMovies(searchInput: string, page: number) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_KEY}`,
    },
  };

  try {
    const movies = await fetch(url, options);
    return movies.json();
  } catch (error) {
    console.log(error);
  }
}
