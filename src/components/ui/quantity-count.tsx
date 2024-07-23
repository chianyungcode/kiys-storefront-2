import { NumberInput, NumberInputBox, NumberInputButton } from "keep-react";
import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface QuantityCountProps {
  className?: string;
  inPopoverCart: boolean;
}

const QuantityCount = ({ className, inPopoverCart }: QuantityCountProps) => {
  const [number, setNumber] = useState(1);

  return (
    <NumberInput className={cn("max-w-lg font-sora", className)}>
      <NumberInputButton
        disabled={number === 0}
        onClick={() => setNumber((prev) => prev - 1)}
        className="hover:bg-transparent"
      >
        <Minus
          size={inPopoverCart ? 12 : 16}
          className={cn(inPopoverCart ? "text-white" : "text-black")}
        />
      </NumberInputButton>
      <NumberInputBox
        min={0}
        max={100}
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
        className={cn(
          "bg-transparent",
          inPopoverCart ? "text-white text-sm" : "text-black"
        )}
      />
      <NumberInputButton
        disabled={number === 100}
        onClick={() => setNumber((prev) => prev + 1)}
        className="hover:bg-transparent"
      >
        <Plus
          size={inPopoverCart ? 12 : 16}
          className={cn(inPopoverCart ? "text-white" : "text-black")}
        />
      </NumberInputButton>
    </NumberInput>
  );
};

export default QuantityCount;
