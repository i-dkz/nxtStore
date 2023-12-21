import { ProductQuery } from '@/app/page';
import { create } from 'zustand';


// Define the type for the state
type SearchState = {
  selectedSearch: string;
  setSelectedSearch: (search: string) => void;
  productQuery: ProductQuery;
  setProductQuery: (query: ProductQuery) => void;
};

// Create a store with the defined state type
export const useSearchStore = create<SearchState>((set) => ({
  selectedSearch: "",
  setSelectedSearch: (search) => set({ selectedSearch: search}),
  productQuery: {} as ProductQuery,
  setProductQuery: (query) => set({ productQuery: query }),
}));