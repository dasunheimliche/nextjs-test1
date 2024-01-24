"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useSearchStore, searchStoreType } from "@/hooks/useSearchStore";
import useDebounce from "@/hooks/useDebounce";
import useStore from "@/hooks/useStore";
import useSearchValidation from "@/hooks/useSearchValidation";

import { searchSchema } from "@/schemas/schemas";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useSearchSync from "@/hooks/useSearchSync";

export default function SearchForm() {
  const searchStore = useStore<searchStoreType, searchStoreType>(
    useSearchStore,
    (state: any) => state
  );

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      input: "",
    },
  });

  const debouncedSearch: string = useDebounce(form.watch("input"), 500);

  const errorMsg = useSearchValidation(debouncedSearch);

  useSearchSync(searchStore, debouncedSearch, form);

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-100">Search</FormLabel>
              <FormControl>
                <div className="flex">
                  <Input
                    placeholder="movie"
                    {...field}
                    className="text-slate-300 border-slate-400"
                  />
                </div>
              </FormControl>
              <div className="text-destructive text-[0.8rem] font-medium">
                {errorMsg}
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
