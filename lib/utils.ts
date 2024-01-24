import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { Movie } from "@/app/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomMovie(movieList: Movie[]) {
  const randomNum = Math.random();

  const randomIndex = Math.floor(randomNum * movieList.length);

  return movieList[randomIndex];
}
