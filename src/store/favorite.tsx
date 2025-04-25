import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-toastify";
import Link from "next/link";

type Store = {
  favorite: any[];
  toggleFavorite: (id: number) => void;
};

export const useFavorite = create<Store>()(
  persist(
    (set, get) => ({
      favorite: [],
      toggleFavorite: (id) => {
        const favorites = [...get().favorite];
        const index = favorites.indexOf(id);

        if (index !== -1) {
          toast.success(`Товар удален из избранного`);
          favorites.splice(index, 1);
          set({ favorite: favorites });
        } else {
          toast.success(() => (
            <div className="notification">
              Товар добавлен в <Link href={"/favorites"}>избранное</Link>
            </div>
          ));
          set({ favorite: [...favorites, id] });
        }
      },
    }),
    { name: "favorite" },
  ),
);
