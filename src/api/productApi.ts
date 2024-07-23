import { notFound } from "@tanstack/react-router";

export const fetchProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products");

  if (!response.ok) throw notFound();

  const products = await response.json();

  if (!products) throw notFound();

  return products;
};

export const fetchProduct = async (slug: string) => {
  const response = await fetch(`http://localhost:3000/api/products/${slug}`);

  // TODO: Disini harusnya ketika !response.ok throw nya Error jaringan
  if (!response.ok) throw notFound();

  const product = await response.json();

  if (!product) throw notFound();

  return product;
};
