import { create } from "zustand";

import { IUser } from "@/types/user";
export const useUser = create((set) => ({
  userId: "", // ID
  username: "", // 名字
  userPic: "", // 图片
  setUserId: (userId: string) => set((state: IUser) => ({ userId })),
  setUsername: (username: string) =>
    set((state: IUser) => {
      localStorage.setItem("user", JSON.stringify(state));
      return { username };
    }),
  setUserPic: (userPic: string) => set((state: IUser) => ({ userPic })),
}));
