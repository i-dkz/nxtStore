import { create } from 'zustand';

// Define the type for the state
type SearchState = {
  selectedSearch: string;
  setSelectedSearch: (search: string) => void;
};

// Create a store with the defined state type
export const useSearchStore = create<SearchState>((set) => ({
  selectedSearch: "",
  setSelectedSearch: (search) => set({ selectedSearch: search}),
}));