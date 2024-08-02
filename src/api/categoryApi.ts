import { notFound } from "@tanstack/react-router";

export const fetchCategories = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/categories`
    );

    if (!response.ok) throw notFound();

    const categories = await response.json();

    if (!categories) throw notFound();

    return categories;
  } catch (error) {
    console.error("Failed to get categories:", error);
    throw notFound();
  }
};

export const fetchCategory = async (slug: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/categories/${slug}`
    );

    if (!response.ok) throw notFound();

    const category = await response.json();

    if (!category) throw notFound();

    return category;
  } catch (error) {
    console.error(`Failed to get category with slug ${slug}:`, error);
    throw notFound();
  }
};
