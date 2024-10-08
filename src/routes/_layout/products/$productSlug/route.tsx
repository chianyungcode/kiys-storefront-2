import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { addProductToOrder } from "@/api/orderApi";
import { fetchProduct } from "@/api/productApi";
import NotFound from "@/components/not-found";
import BreadcrumbProductDetails from "@/components/routes/product-slug/breadcrumb-product-detail";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Form } from "@/components/ui/form";
import QuantityCount from "@/components/ui/quantity-count";
import { useAuth } from "@/context/auth-provider";
import { Image } from "@/types/image";
import { Product } from "@/types/product";
import { formatToRupiah } from "@/utils/currency-format";

const formSchema = z.object({
  isPaid: z.boolean().default(false),
  userId: z.string(),
  orderItems: z.array(
    z.object({
      productId: z.string().uuid(),
      quantity: z.number(),
    })
  ),
});

const ProductDetailsPage = () => {
  // State for managing the quantity of items to be purchased
  const [numberQuantity, setNumberQuantity] = useState(1);
  // const navigate = useNavigate();
  const { userId } = useAuth();

  // Fetch product data from loader
  const {
    product: { data },
  }: { product: { data: Product } } = useLoaderData({
    from: "/_layout/products/$productSlug",
  });

  // Handler for quantity change
  const onChangeQuantity = (value: number) => {
    setNumberQuantity(value);
  };

  // Initialize form with react-hook-form and zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isPaid: false,
      userId: "",
      orderItems: [
        {
          productId: data.id,
          quantity: numberQuantity,
        },
      ],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    addProductToOrder(userId, values);
  };

  useEffect(() => {
    form.setValue("orderItems.0.quantity", numberQuantity);
  }, [numberQuantity, form]);

  return (
    <Container>
      <div className="space-y-4">
        <BreadcrumbProductDetails productName={data.name} />
        <div className="grid grid-cols-2 gap-x-8">
          <div className="space-y-4 py-4">
            <div className="overflow-hidden rounded-3xl">
              <div className="aspect-square">
                <img
                  src={data.images?.[0]?.url || "/public/images/image.webp"}
                  alt="product-image-1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {data.images &&
                data.images.map((image: Image) => (
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={image.url || "/public/images/image.webp"}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="space-y-20 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-sora font-semibold text-[#323334] ">
                {data.name}
              </h1>
              <p className="text-xs font-medium">{data.sku.toUpperCase()}</p>
            </div>
            <div className="space-y-8">
              <p className="text-5xl font-sora font-semibold text-[#323334]">
                {formatToRupiah(data.price)}
              </p>
              <p className="text-[#5B5C5D]">{data.description}</p>
              {/* <div className="space-y-4" id="options">
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
              </div> */}
              <div className="border border-gray-200 rounded-2xl flex flex-col gap-y-2 px-6 py-4">
                <div className="flex items-center gap-x-4 w-full">
                  <div className="flex-grow">
                    <QuantityCount
                      inPopoverCart={false}
                      value={numberQuantity}
                      onChange={onChangeQuantity}
                    />
                  </div>
                  <p className="whitespace-nowrap">Stok sisa 8</p>
                </div>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full flex gap-x-2"
                  >
                    <Button
                      type="submit"
                      className="bg-[#D92A36] h-16 w-full flex gap-x-2 items-center rounded-xl"
                      disabled={numberQuantity === 0}
                    >
                      <ShoppingBag />
                      <h2 className="text-lg">Add to cart</h2>
                    </Button>
                    <Button className="h-16 p-6 rounded-xl">
                      <Heart />
                    </Button>
                  </form>
                </Form>
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
    return { product };
  },
  component: ProductDetailsPage,
  notFoundComponent: () => {
    return <NotFound>Product not found</NotFound>;
  },
});
