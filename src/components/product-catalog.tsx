import { cn } from "@/lib/utils";
import ProductCard from "./ui/product-card";

interface ProductCatalogProps {
  inCategoryPage: boolean;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ inCategoryPage }) => {
  return (
    <div className="font-sora space-y-16">
      {inCategoryPage ? (
        <></>
      ) : (
        <h1 className="text-4xl font-semibold">Keyboards</h1>
      )}
      <div
        className={cn(
          "grid gap-x-4 gap-y-6 items-center",
          inCategoryPage ? "grid-cols-3" : "grid-cols-4"
        )}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductCatalog;
