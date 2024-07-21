interface Image {
  id: string;
  url: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  description: string;
  isArchived: string;
  isFeatured: string;
  categoryId: string;
  price: number;
  createdAt: string;
  images?: Image[];
}
