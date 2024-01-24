"use client";

import { useEffect, useState } from "react";

export default function useSearchValidation(debouncedSearch: string) {
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (debouncedSearch.length > 10) {
      setErrorMsg("search input must not exceed 10 characters");
    } else {
      setErrorMsg("");
    }
  }, [debouncedSearch]);

  return errorMsg;
}
