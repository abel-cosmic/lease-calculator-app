interface ManageLeases {
  id: string;
  userId: string;
  leaseId: string;
  assignmentDate: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

type ManageLeaseResponse = ManageLeases[];
type ManageLeaseDetailResponse = ManageLeases;
type CreateManageLeaseResponse = ManageLeases;
type UpdateManageLeaseResponse = ManageLeases;
type DeleteManageLeaseResponse = { message: string };
