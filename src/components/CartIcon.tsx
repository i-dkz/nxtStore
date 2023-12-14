import { MdLocalGroceryStore } from "react-icons/md";

interface Props {
  qty: number;
}

const CartIcon = ({ qty }: Props) => {
  return (
    <div className="flex relative items-center justify-center w-[45px] h-[45px]">
      {qty === 0 ? undefined : qty > 99 ? (
        <div className="absolute bg-red-600 rounded-full w-[22px] h-[22px] right-0 top-0 text-white flex text-[0.625rem] justify-center items-center font-bold">
          99+
        </div>
      ) : (
        <div className="absolute bg-red-600 rounded-full w-[22px] h-[22px] right-0 top-0 text-white flex text-[0.625rem] justify-center items-center font-bold">
          {qty}
        </div>
      )}

      <MdLocalGroceryStore size={30} />
    </div>
  );
};

export default CartIcon;
