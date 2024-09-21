import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";

import { fetchProducts } from "@/api/productApi";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Product } from "@/types/product";

interface ICommandSearch {
  openCommand: boolean;
  setOpenCommand: (open: boolean) => void;
}

const CommandSearch = ({ openCommand, setOpenCommand }: ICommandSearch) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [debouncedValues, setValue] = useDebounceValue("", 2000);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    fetchData();
  }, []);

  console.log(debouncedValues);

  if (products.length === 0) return null;

  return (
    <CommandDialog open={openCommand} onOpenChange={setOpenCommand}>
      <CommandInput
        placeholder="Type a command or search..."
        onValueChange={(input) => setValue(input)}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Products">
          {products.map((product) => (
            <Link to={`/products/${product.slug}`} key={product.id}>
              <CommandItem>{product.name}</CommandItem>
            </Link>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandSearch;
