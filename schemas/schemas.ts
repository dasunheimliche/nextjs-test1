import * as z from "zod";

export const searchSchema = z.object({
  input: z.string().min(1).max(10, {
    message: "search input must not exceed 10 characters",
  }),
});
