interface Props {
  title: string;
  thumbnail: string;
  price: number;
  category: string;
  quantity: number;
}

const CartItem = ({ title, thumbnail, price, category, quantity }: Props) => {
  const subtotal = quantity * price;
  
  return (
    <div className="w-[670px] h-[180px] border rounded-md p-4">
      <div className="flex gap-4">
        <img src={thumbnail} className="w-[150px] h-[150px] rounded-md" />
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
