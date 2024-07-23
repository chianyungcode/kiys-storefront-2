import { cn } from "@/lib/utils";
import ProductCard from "./ui/product-card";
import { Product } from "@/types/product";
import { Link } from "@tanstack/react-router";
import { Category } from "@/types/category";

interface ProductCatalogProps {
  inCategoryPage: boolean;
  categories: Category[];
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({
  inCategoryPage,
  categories,
}) => {
  return (
    <div className="font-sora space-y-16">
      {inCategoryPage ? (
        <></>
      ) : (
        <>
          {categories.map((category: Category) => {
            return (
              <>
                <h1 className="text-4xl font-semibold">{category.name}</h1>
                <div
                  className={cn(
                    "grid gap-x-4 gap-y-6 items-center",
                    inCategoryPage ? "grid-cols-3" : "grid-cols-4"
                  )}
                >
                  <ul>
                    {category.products.map((product: Product) => {
                      return (
                        <Link
                          params={{ productSlug: product.slug }}
                          to="/products/$productSlug"
                        >
                          <ProductCard product={product} />
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ProductCatalog;
