import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";

import { useDialogStore } from "@/store/DialogStore";

export function SearchDialog() {
  const { selectedDialog, setSelectedDialog } = useDialogStore();

  return (
    <div className="w-[90%]">
      <Dialog onOpenChange={() => setSelectedDialog(true)} open={selectedDialog}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <FaSearch className="text-gray-500" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[90%] rounded-md h-[110px]">
          <div className="flex items-end space-x-2">
            <SearchBar />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
