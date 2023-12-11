import { MdLocalGroceryStore } from "react-icons/md";

interface Props {
  qty: number;
}

const CartIcon = ({ qty }: Props) => {
  return (
    <div className="flex relative items-center justify-center w-[40px] h-[40px]">
      {qty === 0 ? undefined : (
        <div className="absolute bg-red-600 rounded-full w-[15px] h-[15px] right-1 top-0.5 text-white flex text-xs justify-center items-center">
          {qty}
        </div>
      )}

      <MdLocalGroceryStore size={30} />
    </div>
  );
};

export default CartIcon;
