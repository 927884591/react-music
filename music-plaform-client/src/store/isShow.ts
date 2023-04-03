import { create } from "zustand";

export const useIsShow = create((set) => ({
  isShow: false,
  setIsShow: (isShow: boolean) =>
    set((state: any) => ({
      isShow,
    })),
}));
