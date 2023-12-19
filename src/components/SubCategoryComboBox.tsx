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
import { useState } from "react"

  
  interface Props {
    filters: string[]; // Expects an array of Category
  }
  

export function SubCategoryComboBox({filters} : Props) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const { selectedCategory, setSelectedSubCategory, selectedSubCategory } = useCategoryStore();

  const handleValueChange = (val: string) => {
    setValue(val);
    setOpen(false); 
    setSelectedSubCategory(val);
  };

  React.useEffect(() => {
    setValue("Select Type");
  }, [selectedCategory]);
  
  return (

    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value}
          <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      
      <PopoverContent className="w-[200px] p-0">
        
        <Command>
           
          <CommandInput placeholder="Search types..." />
          <CommandEmpty>No type found.</CommandEmpty>
          
          <CommandGroup>
            {filters.map((filter,index) => (
              <CommandItem
                key={index}
                value={filter}
                onSelect={(currentValue) => {
                  handleValueChange(currentValue)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === filter ? "opacity-100" : "opacity-0"
                  )}
                />
                {filter}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
