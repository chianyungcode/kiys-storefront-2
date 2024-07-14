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
      <div className="grid grid-cols-4 gap-x-4 items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductCatalog;
