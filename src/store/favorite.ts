import CloneDeep from "lodash-es/cloneDeep";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-toastify";

type Store = {
  favorite: any[];
  loading: boolean;
  error: null;
  toggleFavorite: (id: number) => void;
};

export const useFavorite = create<Store>()(
  persist(
    (set, get) => ({
      favorite: [],
      loading: false,
      error: null,
      toggleFavorite: (id) => {
        const favorites = CloneDeep(get().favorite);
        const index = favorites.indexOf(id);

        if (index !== -1) {
          toast.success(`Товар удален из избранного`);
          favorites.splice(index, 1);
          set({ favorite: favorites });
        } else {
          toast.success(`Товар добавлен в избранное`);
          set({ favorite: [...favorites, id] });
        }
      },
    }),
    { name: "favorite" },
  ),
);
