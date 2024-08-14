import CloneDeep from "lodash-es/cloneDeep";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Product } from "@/common/types/Product";
import { Notification } from "@/utils/notification";

type Store = {
  basket: Product[];
  loading: boolean;
  error: null;
  addToBasket: (product: Product) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  deleteProduct: (id: number) => void;
};

export const useBasket = create<Store>()(
  persist(
    (set, get) => ({
      basket: [],
      loading: false,
      error: null,
      addToBasket: (product) => {
        const products = CloneDeep(get().basket);
        const index = products.findIndex(({ id }) => id === product.id);
        Notification.success(`Товар добавлен в корзину`);
        if (index !== -1) {
          products[index].count = products[index].count + product.count;
          set({ basket: products });
          return;
        }
        set({ basket: [...products, product] });
      },
      increment: (productId) => {
        const products = CloneDeep(get().basket);
        const index = products.findIndex(({ id }) => id === productId);
        if (index !== -1) {
          products[index].count = products[index].count + 1;
          set({ basket: products });
          return;
        }
        set({ basket: [...products, index] });
      },
      decrement: (productId) => {
        const products = CloneDeep(get().basket);
        const index = products.findIndex(({ id }) => id === productId);
        if (index !== -1) {
          products[index].count = products[index].count - 1;

          if (products[index].count <= 0) {
            products.splice(index, 1);
          }

          set({ basket: products });
          return;
        }
        set({ basket: [...products, index] });
      },
      deleteProduct: (productId) => {
        const products = CloneDeep(get().basket);
        const index = products.findIndex(({ id }) => id === productId);
        if (index > -1) {
          products.splice(index, 1);
          set({ basket: products });
        }
      },
    }),
    { name: "basket" },
  ),
);
