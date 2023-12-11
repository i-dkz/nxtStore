'use client'
import { SiEventstore } from "react-icons/si";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { useCartStore } from "@/store/CartStore";
import CartIcon from "./CartIcon";

const NavBar = () => {
  const cart = useCartStore((state) => state.cart);

  let totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <div className="flex h-[60px] w-full border-b bg-white items-center z-1000">
      <Link href="../">
        <div className="flex items-center gap-3 mx-4">
          <SiEventstore size={30} />
          nxtStore
        </div>
      </Link>
      <SearchBar />
      <div className="flex items-center justify-evenly w-[300px] ">
        <div className="flex items-center gap-3">
          <CartIcon qty={totalQuantity}/>
        </div>
        <div>login</div>
      </div>
    </div>
  );
};

export default NavBar;
