import { useSearchStore } from "@/store/SearchStore";
import { ProductQuery } from "../app/page";
import useData from "./useData";

export type Product = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
};

const useSearch = (productQuery: ProductQuery) => {
  const { selectedSearch } = useSearchStore();

  const endpoint = selectedSearch
    ? `/products/search?q=${encodeURIComponent(selectedSearch)}`
    : "/products";

  return useData<Product>(endpoint, {}, [productQuery, selectedSearch]);
};

export default useSearch;
