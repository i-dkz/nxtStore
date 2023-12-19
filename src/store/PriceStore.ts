import { create } from 'zustand';

// Define the type for the state
type PriceState = {
  selectedPrice: number;
  setSelectedPrice: (price: number) => void;
};

// Create a store with the defined state type
export const usePriceStore = create<PriceState>((set) => ({
  selectedPrice: 0,
  setSelectedPrice: (price) => set({ selectedPrice: price}),
}));