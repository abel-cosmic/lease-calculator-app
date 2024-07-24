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

type ManageLeaseResponse = ManageLeases[];
type ManageLeaseDetailResponse = ManageLeases;
type DeleteManageLeaseResponse = { message: string };
