import { createLazyFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/ui/navbar";
import Container from "@/components/ui/container";
import ProductCatalog from "@/components/product-catalog";
import Footer from "@/components/ui/footer";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="h-[4000px] relative bg-[#FDFEFE]">
      <Navbar />
      <Container>
        <ProductCatalog inCategoryPage={false} />
      </Container>
      <Footer />
    </div>
  );
}
