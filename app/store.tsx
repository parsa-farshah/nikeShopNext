import { create } from "zustand";
import { toast } from "react-toastify";

interface storeTypes {
  login: boolean;
  AccEmail: string;
  AccFullName: string;
  alertExist: boolean;
  basket: any[];
  updateUser: (logINUser: boolean) => void;
  AccInfo: (userEmail: string, userFullName: string) => void;
  updateBasket: (item: any) => void;
  deleteItem: (item: any) => void;
}

const useUserStore = create<storeTypes>((set) => ({
  login: false,
  basket: [],
  AccEmail: "",
  AccFullName: "",
  alertExist: false,
  updateUser: (logINUser) => set({ login: logINUser }),
  AccInfo: (userEmail, userFullName) =>
    set({ AccEmail: userEmail, AccFullName: userFullName }),
  updateBasket: (item) =>
    set((state) => {
      const newProduct = item.id;

      const exists = state.basket.find((i) => i.id === newProduct);

      if (exists) {
        toast.error("This product has already been added");
        return state;
      } else {
        toast.success("Added successfully");
        return { basket: [...state.basket, item] };
      }
    }),
  deleteItem: (id) =>
    set((state) => {
      toast.warning(`${id} deleted`);

      return { basket: state.basket.filter((item) => item.id !== id) };
    }),
}));

export default useUserStore;
