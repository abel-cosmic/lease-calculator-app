import { create } from "zustand";
export const useManageLeaseStore = create<ManageLeaseStore>((set) => ({
  entity: [
    {
      id: "",
      userId: "",
      leaseId: "",
      assignmentDate: "",
      status: "",
      createdAt: "",
      updatedAt: "",
      user: {
        id: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        createdAt: "",
        updatedAt: "",
      },
      lease: {
        id: "",
        createdAt: "",
        updatedAt: "",
        leaseStartDate: "",
        leaseEndDate: "",
        monthlyRentAmount: 0,
        securityDeposit: 0,
        additionalCharges: 0,
      },
    },
  ],
  setEntity: (manageLease: ManageLeases[]) => set({ entity: manageLease }),
}));
