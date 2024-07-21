import { createLazyFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/ui/navbar";
import Container from "@/components/ui/container";
import ProductCatalog from "@/components/product-catalog";
import Footer from "@/components/ui/footer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { isError, isPending, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/products?page=1&limit=4`
      );
      const data = await response.data;

      return data;
    },
  });

  if (isPending) {
    return (
      <Container>
        <Skeleton />
      </Container>
    );
  }

  if (isError) {
    return <span>Error {error.message}</span>;
  }

  console.log(data);

  return (
    <div className="h-[4000px] relative bg-[#FDFEFE]">
      <Navbar />
      <Container>
        <ProductCatalog inCategoryPage={false} products={data.data} />
      </Container>
      <Footer />
    </div>
  );
}
