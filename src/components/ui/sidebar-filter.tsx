import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "./checkbox";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SidebarFilterProps {
  categoryTitle: string;
}

const SidebarFilter = ({ categoryTitle }: SidebarFilterProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-start gap-y-10 md:min-w-[220px] lg:min-w-[248px]">
      <h1 className="text-2xl font-semibold font-sora">{categoryTitle}</h1>
      <Collapsible className="space-y-4" open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="font-sora flex gap-x-1 items-center">
          <p className="font-sans">Keyboard profile</p>
          <ChevronDown
            className={cn(
              "w-5 h-5 transition-transform",
              open ? "rotate-180" : "rotate-0"
            )}
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="flex gap-x-2 items-center text-gray-500">
            <Checkbox id="low-profile" className="border-gray-500" />
            <label htmlFor="low-profile">Low-Profile</label>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default SidebarFilter;
