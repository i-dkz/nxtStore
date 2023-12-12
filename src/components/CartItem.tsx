'use client'
import { useCartStore } from "@/store/CartStore";


const CartPage = () => {
  const { cart } = useCartStore();

  return (
    <div className="w-[670px] h-[400px] border rounded-md">
      
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {/* Render your cart item details here */}
            {item.title} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
