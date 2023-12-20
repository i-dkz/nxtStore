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
import { Slider } from "@/components/ui/slider"
import { usePriceStore } from "@/store/PriceStore";
import { useRatingStore } from "@/store/RatingStore";
import { useDiscountStore } from "@/store/DiscountStore";


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
  const {
    selectedCategory,
    selectedSubCategory,
    setSelectedCategory,
    setSelectedSubCategory,
  } = useCategoryStore();

  const { selectedPrice, setSelectedPrice } = usePriceStore();
  const { selectedRating, setSelectedRating } = useRatingStore();
  const { selectedDiscount, setSelectedDiscount } = useDiscountStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Subcategory:", selectedSubCategory);
    // setSelectedCategory("");
    // setSelectedSubCategory("");
    // setSelectedPrice(0);
    // Perform additional actions as needed
  };

  function handlePriceChange(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement; // Assuming the event target is a div
    const ariaValueNow = target.getAttribute('aria-valuenow');
    setSelectedPrice(Number(ariaValueNow));
  }

  function handleRatingChange(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement; // Assuming the event target is a div
    const ariaValueNow = target.getAttribute('aria-valuenow');
    setSelectedRating(Number(ariaValueNow));
  }

  function handleDiscountChange(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement; // Assuming the event target is a div
    const ariaValueNow = target.getAttribute('aria-valuenow');
    setSelectedDiscount(Number(ariaValueNow));
  }
  

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
              ) : (
                undefined
              )}
            </div>
              Max Price: ${selectedPrice}
              <Slider defaultValue={[selectedPrice]} max={10000} step={1} onClick={(e) => handlePriceChange(e)}/>

              Customer Rating: {selectedRating} / 5
              <Slider defaultValue={[selectedRating]} max={5} step={.1} onClick={(e) => handleRatingChange(e)}/>

              Discount: {selectedDiscount}% or more
              <Slider defaultValue={[selectedDiscount]} max={100} step={.1} onClick={(e) => handleDiscountChange(e)}/>

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
