import { notFound } from "@tanstack/react-router";

export const fetchCategories = async () => {
  const response = await fetch("http://localhost:3000/api/categories");

  if (!response.ok) throw notFound();

  const categories = await response.json();

  if (!categories) throw notFound();

  return categories;
};
