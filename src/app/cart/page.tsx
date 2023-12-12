import { OrderSummary } from "@/components/OrderSummary";

const Cart = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
        <h1 className="flex w-[90%] max-w-[1080px] text-4xl font-bold">Your Cart</h1>
        <OrderSummary subtotal={90}/>
    </div>
    
  )
}

export default Cart;