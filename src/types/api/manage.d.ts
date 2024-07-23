interface ManageLeases {
  id: string;
  userId: string;
  leaseId: string;
  assignmentDate: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  lease: Leases;
}

type ManageLeaseWithoutTimestamps = OmitFields<
  ManageLeases,
  "createdAt" | "updatedAt" | "id" | "user" | "lease"
>;

type ManageLeaseResponse = ManageLeases[];
type ManageLeaseDetailResponse = ManageLeases;
type CreateManageLeaseResponse = ManageLeaseWithoutTimestamps;
type UpdateManageLeaseResponse = ManageLeaseWithoutTimestamps;
type DeleteManageLeaseResponse = { message: string };
