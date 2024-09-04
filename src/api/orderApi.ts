import { axiosInstance } from "@/lib/axios";

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

export { fetchOrderByUserId };
