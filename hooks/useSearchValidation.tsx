"use client";

import { useEffect, useState } from "react";
import { searchSchema } from "@/schemas/schemas";
import { ZodError } from "zod";

export default function useSearchValidation(debouncedSearch: string) {
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    try {
      searchSchema.parse({ input: debouncedSearch });
      setErrorMsg("");
    } catch (error) {
      if (error instanceof ZodError) {
        setErrorMsg(error.errors[0].message);
      }
    }
  }, [debouncedSearch]);

  return errorMsg;
}
