import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { IoFilter } from "react-icons/io5";
import { Button } from "@/registry/new-york/ui/button";
import { useState } from "react";
import { ComboBox } from "./ui/combobox";



const filters = {
  categories: [
    {
      title: "computers",
      computers: ["Laptops", "Desktop", "Mini PC"],
    },
    { title: "Phones", phones: ["Apple", "Google", "Samsung", "Huawei"] },
  ],
};

const Filter = () => {
  
  const [value, setValue] = useState("")

  return (
    <>
      <Sheet key="left">
        <SheetTrigger asChild>
          <Button variant="outline" className="h-[40px] w-[50px]">
            <IoFilter size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle>Category</SheetTitle>
          <SheetDescription>
            
          </SheetDescription>

          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Filter;
