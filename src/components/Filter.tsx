import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { IoFilter } from "react-icons/io5";
import { Button } from "@/registry/new-york/ui/button";
import { CategoryComboBox } from "./CategoryComboBox";
import { useCategoryStore } from "@/store/CategoryStore";
import { SubCategoryComboBox } from "./SubCategoryComboBox";

const categories = ["Computers", "Phones"];
interface Subcategories {
  computers: string[];
  phones: string[];
  [key: string]: string[]; // Index signature to allow any string index
}

const subcategories: Subcategories = {
  computers: ["Laptops", "Desktop", "Mini PC"],
  phones: ["Apple", "Google", "Samsung", "Huawei"],
};

const Filter = () => {
  const { selectedCategory, selectedSubCategory, setSelectedCategory } = useCategoryStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Subcategory:", selectedSubCategory);
    setSelectedCategory("");
    // Perform additional actions as needed
  };

  return (
    <>
      <Sheet key="left">
        <SheetTrigger asChild>
          <Button variant="outline" className="h-[40px] w-[50px]">
            <IoFilter size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col gap-4">
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
            <div className="flex items-center justify-between gap-4 ">
              Category: <CategoryComboBox filters={categories} />
            </div>
            <div className="flex items-center justify-between gap-4">
              {selectedCategory ? (
                <>
                  Type:{" "}
                  <SubCategoryComboBox
                    filters={subcategories[selectedCategory]}
                  />
                </>
              ) : undefined}
            </div>

            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Filter;
