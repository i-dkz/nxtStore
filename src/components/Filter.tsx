import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { IoFilter } from "react-icons/io5";
import { Button } from "@/registry/new-york/ui/button";

const Filter = () => {
  return (
    <Sheet key="left">
          <SheetTrigger asChild>
          <Button variant="outline" className="h-[40px] w-[50px]">
          <IoFilter size={20} />
        </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
  )
}

export default Filter;