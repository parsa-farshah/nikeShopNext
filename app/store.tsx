import { create } from "zustand";

interface storeTypes {
  login: boolean;
  AccEmail: string;
  AccFullName: string;
  updateUser: (logINUser: boolean) => void;
  AccInfo: (userEmail: string, userFullName: string) => void;
}

const useUserStore = create<storeTypes>((set) => ({
  login: false,
  AccEmail: "",
  AccFullName: "",
  updateUser: (logINUser) => set({ login: logINUser }),
  AccInfo: (userEmail, userFullName) =>
    set({ AccEmail: userEmail, AccFullName: userFullName }),
}));

export default useUserStore;
