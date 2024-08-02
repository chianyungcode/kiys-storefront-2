import { createFileRoute, useLoaderData } from "@tanstack/react-router";

import { fetchCategory } from "@/api/categoryApi";
import ProductCatalog from "@/components/product-catalog";
import Container from "@/components/ui/container";
import SidebarFilter from "@/components/ui/sidebar-filter";
import { Category } from "@/types/category";

const AccessoriesPage = () => {
  const { category } = useLoaderData({ from: "/_layout/accessories/" });
  const { data }: { data: Category } = category;

  return (
    <Container className="flex gap-x-2">
      <SidebarFilter categoryTitle="Accessories" />
      <ProductCatalog inCategoryPage={true} categories={[data]} />
    </Container>
  );
};

export const Route = createFileRoute("/_layout/accessories/")({
  component: AccessoriesPage,
  loader: async () => {
    const category = await fetchCategory("accessories");

    return { category };
  },
});
