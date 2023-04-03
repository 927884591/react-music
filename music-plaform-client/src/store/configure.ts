import { create } from "zustand";
export const useConfigure = create((set) => ({
  token: false, // 用户是否登录
  showAside: false, // 是否显示侧边栏
  searchWord: "", // 搜索关键词
  activeNavName: "", // 导航栏名称
  setToken: (token: boolean) => set((state: any) => ({ token })),
  setActiveNavName: (activeNavName: string) =>
    set((state: any) => ({ activeNavName })),
  setShowAside: (showAside: boolean) => set((state: any) => ({ showAside })),
  setSearchWord: (searchWord: string) => set((state: any) => ({ searchWord })),
}));
