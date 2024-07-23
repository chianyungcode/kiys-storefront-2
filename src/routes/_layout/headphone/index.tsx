import { createFileRoute } from "@tanstack/react-router";

import ProductCatalog from "@/components/product-catalog";
import Container from "@/components/ui/container";
import SidebarFilter from "@/components/ui/sidebar-filter";

const Headphone = () => {
  return (
    <Container>
      <div className="flex gap-x-20">
        <SidebarFilter categoryTitle="Headphone" />
        <ProductCatalog inCategoryPage={true} />
      </div>
    </Container>
  );
};

export const Route = createFileRoute("/_layout/headphone/")({
  component: () => <Headphone />,
});
