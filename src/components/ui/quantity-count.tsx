import { NumberInput, NumberInputBox, NumberInputButton } from "keep-react";
import { Minus, Plus } from "phosphor-react";

import { cn } from "@/lib/utils";

interface QuantityCountProps {
  className?: string;
  inPopoverCart: boolean;
  value: number;
  onChange: (value: number) => void;
}

const QuantityCount = ({
  className,
  inPopoverCart,
  value,
  onChange,
}: QuantityCountProps) => {
  return (
    <NumberInput className={cn("max-w-lg font-sora", className)}>
      <NumberInputButton
        disabled={value === 0}
        onClick={() => onChange(value - 1)}
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
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        className={cn(
          "bg-transparent",
          inPopoverCart ? "text-white text-sm" : "text-black"
        )}
      />
      <NumberInputButton
        disabled={value === 100}
        onClick={() => onChange(value + 1)}
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
