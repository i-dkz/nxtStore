import Link from "next/link";

interface Props {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  category: string;
  quantity: number;
}

const CartItem = ({ id, title, thumbnail, price, category, quantity }: Props) => {
  const subtotal = quantity * price;

  return (
    <div className="flex h-[180px] border rounded-md p-4">
      <div className="flex w-full gap-4">
        <Link href={`../details/${id}`} className="flex overflow-hidden border rounded-md w-[150px] h-[100px]">
          <img src={thumbnail} className="object-cover" />
        </Link>
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <h3 className="font-bold">{title}</h3>
            <span>${subtotal}</span>
          </div>
          <span className="text-slate-400">{category}</span>
          <span>Quantity: {quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
