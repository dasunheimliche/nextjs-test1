import * as z from "zod";

export const searchSchema = z.object({
  input: z
    .string()
    .min(1, {
      message: "Search input must contain at least 1 character(s)",
    })
    .max(10, {
      message: "Search input must not exceed 10 characters",
    }),
});
