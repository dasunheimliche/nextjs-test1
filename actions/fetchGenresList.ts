"use server";

import fetch from "node-fetch";

export default async function fetchGenresList() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
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
