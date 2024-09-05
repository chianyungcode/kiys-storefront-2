import { axiosInstance } from "@/lib/axios";

type CreateOrderInput = {
  isPaid: boolean;
  orderItems: {
    productId: string;
    quantity: number;
  }[];
};

const fetchOrderByUserId = async (userId: string) => {
  try {
    const response = await axiosInstance.get(`/orders/${userId}`);
    const order = response.data;
    const orderItems = order.data.orderItems;

    console.log(orderItems);

    return orderItems;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};

export const addProductToOrder = async (
  userId: string | null,
  orderInput: CreateOrderInput
) => {
  try {
    await axiosInstance.post("/orders", {
      userId,
      isPaid: orderInput.isPaid,
      orderItems: orderInput.orderItems,
    });
  } catch (error) {
    console.error(error);
  }
};
export { fetchOrderByUserId };
