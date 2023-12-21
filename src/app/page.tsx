"use client";

import SearchResults from "@/components/SearchResults";
import { useSearchStore } from "@/store/SearchStore";

export interface ProductQuery {
  searchText: string;
}

export default function Home() {
  const { productQuery } = useSearchStore();


  return <SearchResults productQuery={productQuery}/>;
  
  
}
