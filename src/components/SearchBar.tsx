import { useSearchStore } from "@/store/SearchStore";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { useDialogStore } from "@/store/DialogStore";



const SearchBar = () => {
  const path = usePathname();
  const router = useRouter();
  const { setSelectedSearch, productQuery, setProductQuery } = useSearchStore();
  const {selectedDialog, setSelectedDialog} = useDialogStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputValue = (
      event.currentTarget.elements.namedItem("searchInput") as HTMLInputElement
    ).value;
    setSelectedSearch(inputValue);

    setProductQuery({ ...productQuery, searchText: inputValue });
    setSelectedDialog(false);

    path === "/" ? null : router.push("./");

    console.log(inputValue);
  };

  useEffect(() => {
    // Reset the search input when path changes
    setSelectedSearch("");
    setProductQuery({ ...productQuery });
    let searchInput = document.getElementById(
      "searchInput"
    ) as HTMLInputElement;
    searchInput.value = "";
  }, [path]);

  return (
    <form onSubmit={handleSubmit} className="relative flex w-full">
      <input
        type="text"
        className="w-full py-2 pl-10 pr-4 border rounded-md"
        name="searchInput"
        id="searchInput"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaSearch className="text-gray-500" />
      </div>
      <button
        className="ml-2 h-[42px] border rounded-md px-2 hover:bg-slate-100"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
