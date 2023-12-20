import { create } from 'zustand';

// Define the type for the state
type RatingState = {
  selectedRating: number;
  setSelectedRating: (price: number) => void;
};

// Create a store with the defined state type
export const useRatingStore = create<RatingState>((set) => ({
  selectedRating: 0,
  setSelectedRating: (rating) => set({ selectedRating: rating}),
}));