import { createFileRoute, useLoaderData } from "@tanstack/react-router";

import { fetchCategories } from "@/api/categoryApi";
import NotFound from "@/components/not-found";
import ProductCatalog from "@/components/product-catalog";
import Container from "@/components/ui/container";

const ProductsPage = () => {
  const { categories } = useLoaderData({ from: "/_layout/products/" });
  const { data } = categories;

  return (
    <Container>
      <ProductCatalog inCategoryPage={false} categories={data} />
    </Container>
  );
};

export const Route = createFileRoute("/_layout/products/")({
  component: ProductsPage,
  loader: async () => {
    const categories = await fetchCategories();

    return { categories };
  },
  notFoundComponent: () => {
    return <NotFound>Something went wrong when fetch products</NotFound>;
  },
});
