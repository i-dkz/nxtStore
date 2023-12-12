"use client";
import { useCartStore } from "@/store/CartStore";
import CartItem from "@/components/CartItem";
import { OrderSummary } from "@/components/OrderSummary";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useCartStore();
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Calculate subtotal based on the quantity of each item in the cart
    const newSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setSubtotal(newSubtotal);
  }, [cart]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="flex w-[90%] max-w-[1080px] text-4xl font-bold mb-4">
        Your Cart
      </h1>
      <div className="flex flex-wrap justify-center w-full gap-4">
        <div className="flex flex-col gap-4 w-[90%] max-w-[670px]">
          {cart.map((item, index) => (
            <CartItem
              key={index}
              id={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              price={item.price}
              category={item.category}
              quantity={item.quantity}
            />
          ))}
        </div>
        <OrderSummary subtotal={subtotal} />
      </div>
    </div>
  );
};

export default Cart;
