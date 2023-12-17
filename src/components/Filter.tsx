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
import { IoFilter } from "react-icons/io5";
import { Button } from "@/registry/new-york/ui/button";
import { ComboBox } from "./ui/combobox";
import { useCategoryStore } from "@/store/CategoryStore";

const filters = {
  categories: [
    {
      title: "Computers",
      subcategory: ["Laptops", "Desktop", "Mini PC"],
    },
    { 
      title: "Phones", 
      subcategory: ["Apple", "Google", "Samsung", "Huawei"] 
    },
  ],
};

const Filter = () => {
  const { selectedCategory } = useCategoryStore();

  return (
    <>
      <Sheet key="left">
        <SheetTrigger asChild>
          <Button variant="outline" className="h-[40px] w-[50px]">
            <IoFilter size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col gap-4">
          <SheetDescription>
            <ComboBox filters={filters.categories} />
          </SheetDescription>
          <SheetTitle>{selectedCategory || "All Categories"}</SheetTitle>
          <SheetFooter>
            <SheetClose asChild>
              <Button onSubmit={(e) => e.preventDefault}>Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Filter;
