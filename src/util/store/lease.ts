import { create } from "zustand";
export const useLeaseStore = create<LeaseStore>((set) => ({
  entity: [
    {
      id: "",
      createdAt: "",
      updatedAt: "",
      leaseStartDate: "",
      leaseEndDate: "",
      monthlyRentAmount: 0,
      securityDeposit: 0,
      additionalCharges: 0,
    },
  ],
  setEntity: (lease: Leases[]) => set({ entity: lease }),
}));
