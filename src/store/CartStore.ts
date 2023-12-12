import { CartActions, CartState } from '@/app/details/[id]/page';
import { create } from 'zustand';

export const useCartStore = create<CartState & CartActions>((set) => ({
  cart: [],
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        // If the item with the same ID already exists, update its quantity
        const updatedCart = state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );

        return { cart: updatedCart };
      } else {
        // If the item is not in the cart, add it
        return { cart: [...state.cart, product] };
      }
    });
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