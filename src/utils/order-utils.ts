import { OrderItem } from "@/types/order-item";

export const calculateTotalPrice = (orderItems: OrderItem[]) => {
  if (orderItems.length === 0) return 0;

  const productArrayPrice = orderItems.map(
    (item) => item.product.price * item.quantity
  );

  return productArrayPrice.reduce((prev, curr) => prev + curr, 0);
};
