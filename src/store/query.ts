import CloneDeep from "lodash-es/cloneDeep";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-toastify";

type Store = {
  query: any[];
  addToQuery: (article: number, count: number, brand: string) => void;
};

export const useQuery = create<Store>()(
  persist(
    (set, get) => ({
      query: [],
      addToQuery: (serialnumber, quantity, brand) => {
        const products = CloneDeep(get().query);
        const product = products.find(
          (element: { serialnumber: number }) =>
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
    }),
    { name: "query" },
  ),
);
