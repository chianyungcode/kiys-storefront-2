import { notFound } from "@tanstack/react-router";

export const fetchCategories = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/categories`
  );

  if (!response.ok) throw notFound();

  const categories = await response.json();

  if (!categories) throw notFound();

  return categories;
};

export const fetchCategory = async (slug: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/categories/${slug}`
  );

  if (!response.ok) throw notFound();

  const category = await response.json();

  if (!category) throw notFound();

  return category;
};
