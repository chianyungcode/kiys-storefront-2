import {
  createFileRoute,
  useLoaderData,
  // useLocation,
} from "@tanstack/react-router";

import { fetchCategory } from "@/api/categoryApi";
import ProductCatalog from "@/components/product-catalog";
import Container from "@/components/ui/container";
import SidebarFilter from "@/components/ui/sidebar-filter";
import { Category } from "@/types/category";

const KeyboardsPage = () => {
  const { category } = useLoaderData({ from: "/_layout/mouse/" });
  const { data }: { data: Category } = category;

  return (
    <Container className="flex gap-x-2">
      <SidebarFilter categoryTitle="Mouse" />
      <ProductCatalog inCategoryPage={true} categories={[data]} />
    </Container>
  );
};

export const Route = createFileRoute("/_layout/mouse/")({
  component: KeyboardsPage,
  loader: async () => {
    const category = await fetchCategory("mouse");

    return { category };
  },
});
