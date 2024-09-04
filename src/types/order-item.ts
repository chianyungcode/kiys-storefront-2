import { Product } from "./product";

export type Order = {
  id: string;
  isPaid: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
  orderItems: OrderItem[];
};

export type OrderItem = {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  product: Product;
};
