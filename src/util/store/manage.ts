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
        leaseName: "",
        leaseType: "",
        startDate: "",
        endDate: "",
        amount: 0,
        createdAt: "",
        updatedAt: "",
      },
    },
  ],
  setEntity: (manageLease: ManageLeases[]) => set({ entity: manageLease }),
}));
