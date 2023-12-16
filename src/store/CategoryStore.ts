import { create } from 'zustand';

// Create a store to hold the selected category state
export const useCategoryStore = create((set) => ({
  selectedCategory: '',
  setSelectedCategory: (category: string) => set({ selectedCategory: category }),
}));