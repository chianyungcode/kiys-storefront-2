import { Link, createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import QuantityCount from "@/components/ui/quantity-count";
import { formatToRupiah } from "@/utils/currency-format";

const OrderPage = () => {
  const price = formatToRupiah(1800000);

  return (
    <Container className="space-y-6">
      <h1 className="text-4xl font-semibold font-sora">Cart</h1>
      <div className="flex gap-x-10">
        <div className="flex flex-grow py-4 flex-col gap-y-8">
          {[1, 2].map(() => (
            <div className="flex gap-x-6 w-full">
              <img src="/public/images/image.webp" alt="" className="h-32" />
              <div className="flex-col justify-between space-y-4 w-full">
                <div className="flex justify-between">
                  <h1 className="font-medium font-sora">Kiys SK931</h1>
                  <Button
                    className="h-fit w-fit px-0 py-0 bg-transparent hover:bg-transparent
            "
                  >
                    <X className="text-black" />
                  </Button>
                </div>
                <p className="font-medium font-sora text-gray-500">
                  Linear Switch / Red
                </p>
                <div className="flex justify-between items-center">
                  <QuantityCount
                    inPopoverCart={false}
                    className="h-10 rounded-none px-0"
                  />
                  <p className="font-sora text-lg font-medium">{price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#323334] py-4 px-5 text-white space-y-10 max-w-[19rem] w-full">
          <h1 className="text-white text-2xl font-sora">Order Summary</h1>
          <div className="space-y-3 text-white" id="product-row">
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <p className="font-semibold">KIYS SK-9391</p>
                <p>x2</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm">Linear Switch</p>
                <p>{price}</p>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <p className="font-semibold">KIYS SK-9391</p>
                <p>x2</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm">Linear Switch</p>
                <p>{price}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">Total</p>
            <p>Rp 10.030.000</p>
          </div>
          <Link
            to="/products"
            className="bg-red-500 p-4 rounded-md flex justify-center font-sora font-medium items-center"
          >
            Checkout
          </Link>
        </div>
      </div>
    </Container>
  );
};

export const Route = createFileRoute("/_layout/_protected/order/")({
  component: OrderPage,
});
