import { Link, createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import QuantityCount from "@/components/ui/quantity-count";
import { useAuth } from "@/context/auth-provider";
import { axiosInstance } from "@/lib/axios";
import { useOrderStore } from "@/lib/zustand/stores/order-store";
import { OrderItem } from "@/types/order-item";
import { formatToRupiah } from "@/utils/currency-format";
import { calculateTotalPrice } from "@/utils/order-utils";

const OrderPage = () => {
  const { userId } = useAuth(); // Ambil userId dari context auth
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const { order, setOrder } = useOrderStore((state) => state);
  // const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const fetchOrderItems = async () => {
      if (userId) {
        try {
          const { data } = await axiosInstance.get(`/orders/${userId}`);
          setOrder(data.data[0]);

          setOrderItems(data.data[0]?.orderItems || []);
        } catch (error) {
          console.error("Error fetching order items:", error);
        }
      }
    };

    fetchOrderItems();
  }, [userId, setOrder]);

  // TODO [refactor] : Pisahkan fungsi ini nanti ke `orderApi.ts`
  const handleRemoveItem = async (itemId: string) => {
    try {
      const updatedOrderItems = orderItems.filter((item) => item.id !== itemId);

      const response = await axiosInstance.patch(
        `${import.meta.env.VITE_BACKEND_URL}/orders/${order?.id}`,
        {
          isPaid: order?.isPaid,
          orderItems: updatedOrderItems.map((orderItem) => ({
            id: orderItem.id,
            productId: orderItem.productId,
            quantity: orderItem.quantity,
          })),
        }
      );

      if (response.status === 200) {
        setOrderItems(updatedOrderItems);
        console.log("Item berhasil dihapus");
      }
    } catch (error) {
      console.error("Gagal menghapus item:", error);
    }
  };

  const totalPrice = useMemo(
    () => calculateTotalPrice(orderItems),
    [orderItems]
  );

  return (
    <Container className="space-y-6">
      <h1 className="text-4xl font-semibold font-sora">Cart</h1>
      <div className="flex gap-x-10">
        <div className="flex flex-grow py-4 flex-col gap-y-8">
          {orderItems && orderItems.length > 0 ? (
            orderItems.map((item, index) => (
              <div key={index} className="flex gap-x-6 w-full">
                <img src="/public/images/image.webp" alt="" className="h-32" />
                <div className="flex-col justify-between space-y-4 w-full">
                  <div className="flex justify-between">
                    <Link to={`/products/${item.product.slug}`}>
                      <h1 className="font-medium font-sora">
                        {item.product.name}
                      </h1>
                    </Link>
                    <Button className="h-fit w-fit px-0 py-0 bg-transparent hover:bg-transparent">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="hover:bg-gray-100 p-1 ease-out transition-all duration-500 rounded-xl"
                      >
                        <X className="text-black hover:scale-95 duration-200 transition-all" />
                      </button>
                    </Button>
                  </div>
                  <p className="font-medium font-sora text-gray-500">
                    Linear Switch / Red
                  </p>
                  <div className="flex justify-between items-center">
                    <QuantityCount
                      value={item.quantity}
                      onChange={() => {}}
                      inPopoverCart={false}
                      className="h-10 rounded-none px-0"
                    />
                    <p className="font-sora text-lg font-medium">
                      {formatToRupiah(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No items in the cart</p>
          )}
        </div>
        <div className="bg-[#323334] py-4 px-5 text-white space-y-10 max-w-[19rem] w-full">
          <h1 className="text-white text-2xl font-sora">Order Summary</h1>
          <div className="space-y-3 text-white" id="product-row">
            {orderItems && orderItems.length > 0 ? (
              orderItems.map((orderItem) => (
                <div className="space-y-1" key={orderItem.id}>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{orderItem.product.name}</p>
                    <p>
                      <span>x</span>
                      {orderItem.quantity}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Linear Switch</p>
                    <p>
                      {formatToRupiah(
                        orderItem.product.price * orderItem.quantity
                      )}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>Belum ada item di keranjang belanja</p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">Total</p>
            <p>{formatToRupiah(totalPrice)}</p>
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
  // loader: async ({ context }) => {
  //   // Ignore this error because loader can't detect this
  //   console.log("Ini adalah", context.auth.userId);

  //   const { data } = await axiosInstance.get(`/orders/${context.auth.userId}`);
  //   const orderItems = data.data[0]?.orderItems || [];

  //   console.log(orderItems);

  //   return { orderItems };
  // },
});
