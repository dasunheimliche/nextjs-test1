import Link from "next/link";

import { Movie } from "@/app/types";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function ResultCard({ movie }: { movie: Movie }) {
  const releaseYear = movie.release_date.split("-")[0];

  return (
    <Link href={`/${movie.id}`}>
      <Card className=" bg-slate-900 cursor-pointer rounded-sm border-none hover:bg-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-50">
            {movie.title} {releaseYear ? `- ${releaseYear}` : ""}
          </CardTitle>
          <CardDescription className="h-10 text-ellipsis overflow-hidden text-slate-300">
            {movie.overview}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
