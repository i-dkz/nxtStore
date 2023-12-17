import { create } from 'zustand';

// Define the type for the state
type CategoryState = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

// Create a store with the defined state type
export const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategory: '',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));