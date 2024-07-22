import { notFound } from "@tanstack/react-router";

export const fetchProduct = async (slug: string) => {
  const response = await fetch(`http://localhost:3000/api/products/${slug}`);

  if (!response.ok) throw notFound();

  const product = await response.json();

  if (!product) throw notFound();

  return product;
};
