import CloneDeep from "lodash-es/cloneDeep";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-toastify";
import Link from "next/link";

type Store = {
  basket: any;
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
        console.log(id, count);
        const products = CloneDeep(get().basket);
        const product = products.find(
          (element: { id: number }) => element.id === id,
        );

        toast.success(() => (
          <div className="notification">
            Товар добавлен в <Link href={"/basket"}>корзину</Link>
          </div>
      ));

        if (product) {
          product.quantity = product.quantity + count;
          set({ basket: products });
          return;
        }

        set({ basket: [...products, { id: id, quantity: count }] });
      },
      increment: (id) => {
        const products = CloneDeep(get().basket);
        const product = products.find(
          (element: { id: number }) => element.id === id,
        );
        product.quantity = product.quantity + 1;
        set({ basket: products });
      },
      decrement: (id) => {
        const products = CloneDeep(get().basket);
        const product = products.find(
          (element: { id: number }) => element.id === id,
        );
        product.quantity = product.quantity - 1;

        if (product.quantity <= 0) {
          products.splice(product, 1);
        }
        set({ basket: products });
      },
      deleteProduct: (id) => {
        const products = CloneDeep(get().basket);
        const product = products.find(
          (element: { id: number }) => element.id === id,
        );
        products.splice(product, 1);
        toast.success(`Товар удален из корзины`);
        set({ basket: products });
      },
      countChange: (id, count) => {
        const products = CloneDeep(get().basket);
        const product = products.find(
          (element: { id: number }) => element.id === id,
        );
        product.quantity = count;
        set({ basket: products });
      },
    }),
    { name: "basket" },
  ),
);
