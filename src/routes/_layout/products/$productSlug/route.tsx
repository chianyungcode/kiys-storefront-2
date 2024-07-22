import { fetchProduct } from "@/api/productApi";
import NotFound from "@/components/not-found";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { formatToRupiah } from "@/utils/currency-format";
import {
  Link,
  createFileRoute,
  notFound,
  useLoaderData,
} from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";

const ProductDetailsPage = () => {
  const { product } = useLoaderData({ from: "/_layout/products/$productSlug" });

  const { data } = product;
  const productPrice = formatToRupiah(data.price);

  console.log("product dari loader:", data);

  return (
    <Container>
      <div className="space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid grid-cols-2 gap-x-8">
          <div className="space-y-4 py-4">
            <div className="overflow-hidden rounded-3xl">
              <img src="/public/images/image.webp" alt="" />
            </div>
            <div className="grid grid-cols-4 gap-x-2">
              <div className="overflow-hidden rounded-lg">
                <img src="/public/images/image.webp" alt="" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/public/images/image.webp" alt="" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/public/images/image.webp" alt="" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/public/images/image.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="space-y-20 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-sora font-semibold text-[#323334] ">
                {data.name}
              </h1>
              <div>KIYS SK9831-31</div>
            </div>
            <div className="space-y-8">
              <p className="text-5xl font-sora font-semibold text-[#323334]">
                {productPrice}
              </p>
              <p className="text-[#5B5C5D]">{data.description}</p>
              <div className="space-y-4" id="options">
                <h2 className="font-sora font-medium">Switch Type</h2>
                <div className="flex gap-2 flex-wrap">
                  <Button className="bg-[#323334]">Linear Switch</Button>
                  <Button className="bg-[#323334]">Linear Switch</Button>
                  <Button className="bg-[#323334]">Linear Switch</Button>
                  <Button className="bg-[#323334]">Linear Switch</Button>
                  <Button className="bg-[#323334]">Linear Switch</Button>
                  <Button className="bg-[#323334]">Linear Switch</Button>
                  <Button className="bg-[#323334]">Linear Switch</Button>
                </div>
              </div>
              <div className="space-y-4" id="options">
                <h2 className="font-sora font-medium">Switch Type</h2>
                <div className="flex gap-2 flex-wrap">
                  <Button className="bg-[#323334]">Linear Switch</Button>
                  <Button className="bg-[#323334]">Linear Switch</Button>
                  <Button className="bg-[#323334]">Linear Switch</Button>
                  <Button className="bg-[#323334]">Linear Switch</Button>
                  <Button className="bg-[#323334]">Linear Switch</Button>
                  <Button className="bg-[#323334]">Linear Switch</Button>
                  <Button className="bg-[#323334]">Linear Switch</Button>
                </div>
              </div>
              <div className="border border-gray-200 rounded-2xl flex gap-x-2 px-6 py-4">
                <Button className="bg-[#D92A36] h-16 w-full flex gap-x-2 items-center rounded-xl">
                  <ShoppingBag />
                  <h2 className="text-lg">Add to cart</h2>
                </Button>
                <Button className="h-16 p-6 rounded-xl">
                  <Heart />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export const Route = createFileRoute("/_layout/products/$productSlug")({
  loader: async ({ params: { productSlug } }) => {
    const product = await fetchProduct(productSlug);

    if (!product) throw notFound();

    return { product };
  },
  component: ProductDetailsPage,
  notFoundComponent: () => {
    return <NotFound>Product not found</NotFound>;
  },
});
