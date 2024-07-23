import { Product } from "./product";

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  products: Product[];
};
