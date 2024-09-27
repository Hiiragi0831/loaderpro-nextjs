import { create } from "zustand";

type MobileNavSlice = {
  isShow: boolean;
  toggleShow: (isShow: boolean) => void;
};

export const useMobileNav = create<MobileNavSlice>((set) => ({
  isShow: false,
  toggleShow: (isShow) => {
    set({ isShow });
  },
}));
