import { Link } from "@tanstack/react-router";

import ProductCard from "./ui/product-card";

import { cn } from "@/lib/utils";
import { Category } from "@/types/category";
import { Product } from "@/types/product";

interface CategoryRowProps {
  category: Category;
  inCategoryPage: boolean;
}

const CategoryRow = ({ category, inCategoryPage }: CategoryRowProps) => {
  console.log("From category row:");

  return (
    <li className="space-y-8">
      {inCategoryPage ? (
        <></>
      ) : (
        <h1 className="text-4xl font-semibold">{category.name}</h1>
      )}
      <ul
        className={cn(
          "grid gap-x-4 gap-y-6 items-center",
          inCategoryPage ? "grid-cols-3" : "grid-cols-4"
        )}
      >
        {category.products.map((product: Product) => (
          <li key={product.id}>
            <Link
              params={{ productSlug: product.slug }}
              to="/products/$productSlug"
            >
              <ProductCard product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CategoryRow;
