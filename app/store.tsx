import { create } from "zustand";

const useUserStore = create((set) => ({
  login: false,
  AccEmail: "",
  AccFullName: "",
  updateUser: (logINUser) => set({ login: logINUser }),
  AccInfo: (userEmail, userFullName) =>
    set({ AccEmail: userEmail, AccFullName: userFullName }),
}));

export default useUserStore;
