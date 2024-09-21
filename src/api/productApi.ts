import { notFound } from "@tanstack/react-router";
import axios from "axios";

import { axiosInstance } from "@/lib/axios";
import { convertNameToSlug } from "@/utils/string-format";

export const fetchProducts = async () => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`);

  if (!response.ok) throw notFound();

  const products = await response.json();

  if (!products) throw notFound();

  return products.data;
};

export const fetchProduct = async (slug: string) => {
  try {
    const response = await axiosInstance.get(`products/${slug}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw notFound();
    }
    throw notFound();
  }
};

export const fetchProductByName = async (name: string) => {
  try {
    const slug = convertNameToSlug(name);

    const { data } = await axiosInstance.get(`/products/${slug}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};
