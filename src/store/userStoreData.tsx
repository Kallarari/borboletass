import { IUser } from "@/types/IUser";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  user: IUser | null;
  inc: (userToSet: IUser) => void;
};

const useStore = create<Store>()(
  persist(
    (set) => ({
      user: null,
      inc: (userToSet: IUser) => set(() => ({ user: userToSet })),
    }),
    {
      name: "auth",
    }
  )
);
