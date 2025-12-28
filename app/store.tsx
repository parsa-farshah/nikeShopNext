import { create } from "zustand";

const useUserStore = create((set) => ({
  login: false,
  updateUser: (logINUser) => set({ login: logINUser }),
}));

export default useUserStore;
