import CategoryRow from "./category-row";

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
      <ul className="space-y-12">
        {categories.map((category: Category) => (
          <CategoryRow
            category={category}
            key={category.id}
            inCategoryPage={inCategoryPage}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;
