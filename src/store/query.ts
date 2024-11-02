import CloneDeep from "lodash-es/cloneDeep";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-toastify";

type Store = {
  query: any[];
  reset: () => void;
  addToQuery: (
    article: string | undefined,
    count: number,
    brand: string | undefined,
  ) => void;
  deleteFormQuery: (article: string) => void;
};

export const useQuery = create<Store>()(
  persist(
    (set, get) => ({
      query: [],
      reset: () => {
        set({ query: [] });
      },
      addToQuery: (serialnumber, quantity, brand) => {
        const products = CloneDeep(get().query);
        const product = products.find(
          (element: { serialnumber: string }) =>
            element.serialnumber === serialnumber,
        );

        toast.success("Товар добавлен в запросы");

        if (product) {
          product.quantity = product.quantity + quantity;
          set({ query: products });
          return;
        }

        set({
          query: [
            ...products,
            { serialnumber: serialnumber, quantity: quantity, brand: brand },
          ],
        });
      },
      deleteFormQuery: (serialnumber) => {
        const products = CloneDeep(get().query);
        const product = products.find(
          (element: { serialnumber: string }) =>
            element.serialnumber === serialnumber,
        );

        products.splice(product, 1);
        toast.success(`Товар удален из запросов`);
        set({ query: products });
      },
    }),
    { name: "query" },
  ),
);
