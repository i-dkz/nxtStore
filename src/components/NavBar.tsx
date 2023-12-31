"use client";
import { SiEventstore } from "react-icons/si";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { useCartStore } from "@/store/CartStore";
import CartIcon from "./CartIcon";
import { Button } from "@/registry/new-york/ui/button";
import { SearchDialog } from "./SearchDialog";
import Filter from "./Filter";

const NavBar = () => {
  const cart = useCartStore((state) => state.cart);

  let totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <div className="flex h-[60px] w-full border-b bg-white items-center justify-between">
      <Link href="../">
        <div className="flex items-center gap-3 mx-4">
          <SiEventstore size={30} />
          nxtStore
        </div>
      </Link>

      <div className="flex justify-center w-full gap-3 max-sm:w-[100px]">
        <Filter />
        <div className="w-full max-sm:hidden">
          <SearchBar />
        </div>
        <div className="sm:hidden">
          <SearchDialog />
        </div>
      </div>

      <div className="flex items-center justify-evenly w-[300px] max-sm:w-[150px]">
        <div className="flex items-center gap-3">
          <Link href="../cart">
            <CartIcon qty={totalQuantity} />
          </Link>
        </div>
        <Link href="../login">
          <Button>login</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
