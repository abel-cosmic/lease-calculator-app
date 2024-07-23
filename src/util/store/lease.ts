import { create } from "zustand";
export const useLeaseStore = create<LeaseStore>((set) => ({
  entity: {
    id: "",
    leaseName: "",
    leaseType: "",
    startDate: "",
    endDate: "",
    amount: 0,
    createdAt: "",
    updatedAt: "",
    leaseStartDate: "",
    leaseEndDate: "",
    monthlyRentAmount: 0,
    securityDeposit: 0,
    additionalCharges: 0,
  },
  setEntity: (lease: Lease) => set({ entity: lease }),
}));
