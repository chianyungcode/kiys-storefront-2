import { ShoppingCart } from "lucide-react";

import QuantityCount from "./quantity-count";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverCart = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <ShoppingCart />
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        sideOffset={20}
        align="end"
        alignOffset={-30}
        className="bg-[#323334] max-w-xl w-full text-white px-5"
      >
        <div className="flex gap-x-4">
          <img
            src="/public/images/image.webp"
            className="h-[108px] rounded-md self-center"
          />
          <div className="space-y-4 font-sora">
            <h1 className="font-medium">KIYS SK-9391</h1>
            <p className="text-sm">Linear Switch / Red</p>
            <QuantityCount
              className="bg-transparent h-8 text-sm text-red-500"
              inPopoverCart={true}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverCart;
