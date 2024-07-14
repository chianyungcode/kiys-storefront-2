import ProductCatalog from "@/components/product-catalog";
import Container from "@/components/ui/container";
import SidebarFilter from "@/components/ui/sidebar-filter";
import { createFileRoute } from "@tanstack/react-router";

const Accessories = () => {
  return (
    <Container>
      <div className="flex gap-x-20">
        <SidebarFilter categoryTitle="Accessories" />
        <ProductCatalog inCategoryPage={true} />
      </div>
    </Container>
  );
};

export const Route = createFileRoute("/_layout/accessories/")({
  component: () => <Accessories />,
});
