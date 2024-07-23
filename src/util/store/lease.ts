import { create } from "zustand";
export const useLeaseStore = create<LeaseStore>((set) => ({
  entity: [
    {
      id: "",
      leaseName: "",
      leaseType: "",
      startDate: "",
      endDate: "",
      amount: 0,
      createdAt: "",
      updatedAt: "",
    },
  ],
  setEntity: (lease: Leases[]) => set({ entity: lease }),
}));
