"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useCategoryStore } from "@/store/CategoryStore"


interface Category {
    title: string;
    subcategory: string[];
  }
  
  interface Props {
    filters: Category[]; // Expects an array of Category
  }
  

export function ComboBox({filters} : Props) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const { selectedCategory, setSelectedCategory } = useCategoryStore();

  const handleCategoryChange = (category: string) => {
    setValue(category === selectedCategory ? "" : category); 
    setSelectedCategory(category); 
    setOpen(false); 
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? selectedCategory
            : "Select framework..."}
          <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {filters.map((filter,index) => (
              <CommandItem
                key={index}
                value={filter.title}
                onSelect={(currentValue) => {
                  handleCategoryChange(currentValue)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === filter.title ? "opacity-100" : "opacity-0"
                  )}
                />
                {filter.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
