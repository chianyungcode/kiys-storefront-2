import { create } from "zustand";

import { Order } from "@/types/order-item";

export type OrderState = {
  order: Order;
};

export type OrderActions = {
  setOrder: (order: Order) => void;
};

export type OrderStore = OrderState & OrderActions;

export const useOrderStore = create<OrderStore>((set) => ({
  order: {} as Order,
  setOrder: (newOrder) => set({ order: newOrder }),
}));
