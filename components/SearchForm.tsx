"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useSearchStore, searchStoreType } from "@/hooks/useSearchStore";
import useDebounce from "@/hooks/useDebounce";
import useStore from "@/hooks/useStore";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const searchSchema = z.object({
  input: z.string().min(1).max(10, {
    message: "search input must be at max 10 characters",
  }),
});

export default function SearchForm() {
  const searchStore = useStore<searchStoreType, searchStoreType>(
    useSearchStore,
    (state: any) => state
  );

  const [erroMsg, setErrorMsg] = useState<string>("");

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      input: "",
    },
  });

  const debouncedSearch: string = useDebounce(form.watch("input"), 500);

  useEffect(() => {
    if (debouncedSearch.length > 10) {
      setErrorMsg("search input must not exceed 10 characters");
    } else {
      setErrorMsg("");
    }

    if (debouncedSearch) {
      searchStore?.setSearchInput(debouncedSearch);
    } else {
      searchStore?.setSearchInput("");
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (searchStore?.searchInput === form.watch("input")) return;
    form.setValue(
      "input",
      searchStore?.searchInput ? searchStore.searchInput : ""
    );
  }, [searchStore?.searchInput]);

  const onSubmit = async (values: z.infer<typeof searchSchema>) => {
    console.log("envIANDO", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
                {erroMsg}
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
