import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { fetchCategories } from "@/api/categoryApi";

import Navbar from "@/components/ui/navbar";
import Container from "@/components/ui/container";
import ProductCatalog from "@/components/product-catalog";
import Footer from "@/components/ui/footer";
import NotFound from "@/components/not-found";

export const Route = createFileRoute("/")({
  component: Index,
  loader: async () => {
    const categories = await fetchCategories();

    return { categories };
  },
  notFoundComponent: () => {
    return <NotFound>Something went wrong when fetch products</NotFound>;
  },
});

function Index() {
  const { categories } = useLoaderData({ from: "/" });
  const { data } = categories;

  return (
    <div className="relative bg-[#FDFEFE]">
      <Navbar />
      <Container>
        <ProductCatalog inCategoryPage={false} categories={data} />
      </Container>
      <Footer />
    </div>
  );
}
