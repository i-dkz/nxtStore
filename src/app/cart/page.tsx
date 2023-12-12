
import CartItem from "@/components/CartItem";
import { OrderSummary } from "@/components/OrderSummary";

const Cart = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
        <h1 className="flex w-[90%] max-w-[1080px] text-4xl font-bold mb-4">Your Cart</h1>
        <div className="flex gap-4">
          <CartItem></CartItem>
          <OrderSummary subtotal={90}/>
        </div>
    </div>
    
  )
}

export default Cart;