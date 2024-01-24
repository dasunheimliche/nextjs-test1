import Link from "next/link";

import { Skeleton } from "./ui/skeleton";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function ResultCardLoading() {
  return (
    <Card className="bg-slate-900 cursor-pointer rounded-sm border-none hover:bg-slate-800 relative">
      <CardHeader>
        <Skeleton className="h-3 w-16 bg-slate-300" />
        <Skeleton className="h-3 w-full bg-slate-300" />
        <Skeleton className="h-3 w-full bg-slate-300" />
      </CardHeader>
    </Card>
  );
}
