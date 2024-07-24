import { createFileRoute, useLoaderData } from "@tanstack/react-router";

import { fetchCategory } from "@/api/categoryApi";
import ProductCatalog from "@/components/product-catalog";
import Container from "@/components/ui/container";
import SidebarFilter from "@/components/ui/sidebar-filter";
import { Category } from "@/types/category";

const TwsPage = () => {
  const { category } = useLoaderData({ from: "/_layout/tws/" });
  const { data }: { data: Category } = category;

  return (
    <Container className="flex gap-x-2">
      <SidebarFilter categoryTitle="TWS" />
      <ProductCatalog inCategoryPage={true} categories={[data]} />
    </Container>
  );
};

export const Route = createFileRoute("/_layout/tws/")({
  component: TwsPage,
  loader: async () => {
    const category = await fetchCategory("tws");

    return { category };
  },
});
