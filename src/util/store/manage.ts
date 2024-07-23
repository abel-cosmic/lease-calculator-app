import { create } from "zustand";
export const useManageLeaseStore = create<ManageLeaseStore>((set) => ({
  entity: {
    id: "",
    userId: "",
    leaseId: "",
    assignmentDate: "",
    status: "",
    createdAt: "",
    updatedAt: "",
  },
  setEntity: (manageLease: ManageLeases) => set({ entity: manageLease }),
}));
