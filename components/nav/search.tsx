"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import SearchModal from "@/components/search-modal";

export default function Search() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.5rem] w-[2.5rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
        onClick={() => {
          setOpen(true);
        }}
      >
        <span className="sr-only">Search</span>
        <MagnifyingGlassIcon className="w-4 h-4" />
      </button>
      <SearchModal open={open} setOpen={setOpen} />
    </>
  );
}
