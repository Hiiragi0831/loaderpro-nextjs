import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-toastify";
import Link from "next/link";

type BasketItem = {
  id: number;
  quantity: number;
};

type Store = {
  basket: BasketItem[];
  order: string;
  reset: () => void;
  addToBasket: (id: number, count: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  deleteProduct: (id: number) => void;
  countChange: (id: number, count: number) => void;
};

export const useBasket = create<Store>()(
  persist(
    (set, get) => ({
      basket: [],
      order: "",
      reset: () => {
        set({ basket: [] });
      },
      addToBasket: (id, count) => {
        const products = [...get().basket];
        const product = products.find((element) => element.id === id);

        if (product) {
          product.quantity += count;
          set({ basket: products });
        } else {
          set({ basket: [...products, { id, quantity: count }] });
          toast.success(() => (
            <div className="notification">
              Товар добавлен в <Link href={"/basket"}>корзину</Link>
            </div>
          ));
        }
      },
      increment: (id) => {
        const products = [...get().basket];
        const product = products.find((element) => element.id === id);
        if (!product) return;

        product.quantity += 1;
        set({ basket: products });
      },
      decrement: (id) => {
        const products = [...get().basket];
        const product = products.find((element) => element.id === id);
        if (!product) return;

        product.quantity -= 1;
        if (product.quantity <= 0) {
          const index = products.findIndex((element) => element.id === id);
          if (index !== -1) {
            products.splice(index, 1);
          }
        }
        set({ basket: products });
      },
      deleteProduct: (id) => {
        const products = [...get().basket];
        const index = products.findIndex((element) => element.id === id);
        if (index !== -1) {
          products.splice(index, 1);
          toast.success(`Товар удален из корзины`);
          set({ basket: products });
        }
      },
      countChange: (id, count) => {
        const products = [...get().basket];
        const product = products.find((element) => element.id === id);
        if (!product) return;

        product.quantity = count;
        set({ basket: products });
      },
    }),
    {
      name: "basket",
      version: 1,
      migrate: (persistedState) => {
        return persistedState;
      },
    },
  ),
);
