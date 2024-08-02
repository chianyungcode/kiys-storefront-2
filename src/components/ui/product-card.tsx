import { ShoppingCart } from "lucide-react";

import IconButton from "./icon-button";

import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer rounded-xl space-y-4">
      {/* Images and actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <img
          src={product.images?.[0]?.url || "/images/image.webp"}
          alt="Image"
          className="aspect-square object-cover rounded-2xl"
        />
        <div className="opacity-0 group-hover:opacity-100 transition-all absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="space-y-4">
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="font-normal text-gray-600 font-sans">
          {product.description}
        </p>
        <p className="font-sans">Rp 1.300.000</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between"></div>
    </div>
  );
};

export default ProductCard;
