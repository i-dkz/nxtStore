import { create } from 'zustand';

// Define the type for the state
type DialogState = {
  selectedDialog:boolean;
  setSelectedDialog: (dialog: boolean) => void;
};``

// Create a store with the defined state type
export const useDialogStore = create<DialogState>((set) => ({
  selectedDialog: false,
  setSelectedDialog: (dialog) => set({ selectedDialog: dialog}),
}));