"use client";
import { useCartStore } from "@/store/CartStore";
import CartItem from "@/components/CartItem";
import { OrderSummary } from "@/components/OrderSummary";

const Cart = () => {
  const { cart } = useCartStore();

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="flex w-[90%] max-w-[1080px] text-4xl font-bold mb-4">
        Your Cart
      </h1>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          {cart.map((item, index) => (
            <CartItem
              key={index}
              title={item.title}
              thumbnail={item.thumbnail}
              price={item.price}
              category={item.category}
              quantity={item.quantity}
            />
          ))}
        </div>
        <OrderSummary subtotal={90} />
      </div>
    </div>
  );
};

export default Cart;
