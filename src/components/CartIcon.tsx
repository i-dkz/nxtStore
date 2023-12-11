import { MdLocalGroceryStore } from "react-icons/md";

interface Props {
  qty: number;
}

const CartIcon = ({ qty }: Props) => {
  return (
    <div className="flex relative items-center justify-center w-[40px] h-[40px]">
      {qty === 0 ? undefined : qty >= 99 ?         <div className="absolute bg-red-600 rounded-full w-[20px] h-[20px] right-0 top-0 text-white flex text-xs justify-center items-center">
          99
        </div> : (
        <div className="absolute bg-red-600 rounded-full w-[20px] h-[20px] right-0 top-0 text-white flex text-xs justify-center items-center">
          {qty}
        </div>
      )}

      <MdLocalGroceryStore size={30} />
    </div>
  );
};

export default CartIcon;
