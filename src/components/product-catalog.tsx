import { cn } from "@/lib/utils";
import ProductCard from "./ui/product-card";
import { Product } from "@/types/product";
import { Link } from "@tanstack/react-router";

interface ProductCatalogProps {
  inCategoryPage: boolean;
  products: Product[];
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({
  inCategoryPage,
  products,
}) => {
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
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
        {products.map((product) => {
          return (
            <ul>
              <Link
                params={{ productSlug: product.slug }}
                to="/products/$productSlug"
              >
                <ProductCard product={product} />
              </Link>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCatalog;
