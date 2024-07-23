import { create } from "zustand";
export const useUserStore = create<UserStore>((set) => ({
  entity: [
    {
      id: "",
      name: "",
      email: "",
      createdAt: "",
      updatedAt: "",
      firstName: "",
      lastName: "",
      phone: "",
    },
  ],
  setEntity: (user: User[]) => set({ entity: user }),
}));
