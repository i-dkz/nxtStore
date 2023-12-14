import Link from "next/link";
import { Button } from "./ui/button";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { FaRegTrashAlt } from "react-icons/fa";
import { useCartStore } from "@/store/CartStore";

interface Props {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  category: string;
  quantity: number;
}

const CartItem = ({
  id,
  title,
  thumbnail,
  price,
  category,
  quantity,
}: Props) => {
  const subtotal = quantity * price;

  const { addToCart, removeFromCart, clearCart } = useCartStore();

  const handleAddToCart = () => {
    // Call the addToCart function to update quantity
    addToCart({
      id,
      title,
      thumbnail,
      price,
      category,
      quantity: 1, // Increment quantity
    });
  };

  const handleSubtractFromCart = () => {
    // Call the addToCart function to update quantity
    if (quantity <= 1) {
      removeFromCart(id);
      return;
    }
    
    addToCart({
      id,
      title,
      thumbnail,
      price,
      category,
      quantity: -1, // Increment quantity
    });
  };

  return (
    <div className="flex p-4 border rounded-md">
      <div className="flex w-full gap-4">
        <Link
          href={`../details/${id}`}
          className="flex overflow-hidden border rounded-md w-[150px] h-[120px]"
        >
          <img src={thumbnail} className="object-cover" />
        </Link>
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <h3 className="font-bold">{title}</h3>
            <span>${subtotal}</span>
          </div>
          <span className="text-slate-400">{category}</span>
          <span>Quantity: {quantity}</span>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button
                className="transition-transform transform z-5 duration-10 focus:outline-none active:scale-90"
                variant={"outline"}
                onClick={handleAddToCart}
              >
                <CgMathPlus size={20} />
              </Button>
              <Button
                className="transition-transform transform duration-10 focus:outline-none active:scale-90"
                variant={"outline"}
                onClick={handleSubtractFromCart}
              >
                <CgMathMinus />
              </Button>
            </div>
            <Button
                className="transition-transform transform z-5 duration-10 focus:outline-none active:scale-90"
                variant={"outline"}
                onClick={() => removeFromCart(id)}
              >
                <FaRegTrashAlt />
              </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
