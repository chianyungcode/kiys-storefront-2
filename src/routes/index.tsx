import { createFileRoute, useLoaderData } from "@tanstack/react-router";

import { fetchCategories } from "@/api/categoryApi";
import NotFound from "@/components/not-found";
import ProductCatalog from "@/components/product-catalog";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

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

  console.log("From index", data);

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
