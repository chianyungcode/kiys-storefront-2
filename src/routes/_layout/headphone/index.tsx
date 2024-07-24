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

const HeadphonePage = () => {
  const { category } = useLoaderData({ from: "/_layout/headphone/" });
  const { data }: { data: Category } = category;

  return (
    <Container className="flex gap-x-2">
      <SidebarFilter categoryTitle="Headphone" />
      <ProductCatalog inCategoryPage={true} categories={[data]} />
    </Container>
  );
};

export const Route = createFileRoute("/_layout/headphone/")({
  component: HeadphonePage,
  loader: async () => {
    const category = await fetchCategory("headphones");

    return { category };
  },
});
