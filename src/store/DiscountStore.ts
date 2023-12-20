import { create } from 'zustand';

// Define the type for the state
type DiscountState = {
  selectedDiscount: number;
  setSelectedDiscount: (price: number) => void;
};

// Create a store with the defined state type
export const useDiscountStore = create<DiscountState>((set) => ({
  selectedDiscount: 0,
  setSelectedDiscount: (Discount) => set({ selectedDiscount: Discount}),
}));