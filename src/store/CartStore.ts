import { CartActions, CartState } from '@/app/details/[id]/page';
import create from 'zustand';

export const useCartStore = create<CartState & CartActions>((set) => ({
  cart: [],
  addToCart: (product) => {
    set((state) => ({ cart: [...state.cart, product] }));
  },
  removeFromCart: (productId) => {
    set((state) => ({ cart: state.cart.filter((item) => item.id !== productId) }));
  },
  clearCart: () => {
    set({ cart: [] });
  },
}));    


useCartStore.subscribe(
  (state) => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }
);