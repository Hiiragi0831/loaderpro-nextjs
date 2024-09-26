import { create } from "zustand";

type SearchPanelSlice = {
  isShow: boolean;
  toggleShow: (isShow: boolean) => void;
};

export const useSearchPanel = create<SearchPanelSlice>((set) => ({
  isShow: false,
  toggleShow: (isShow) => {
    set({ isShow });
  },
}));
