interface ManageLease {
  id: string;
  userId: string;
  leaseId: string;
  assignmentDate: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

type ManageLeaseResponse = ManageLease[];
type ManageLeaseDetailResponse = ManageLease;
type CreateManageLeaseResponse = ManageLease;
type UpdateManageLeaseResponse = ManageLease;
type DeleteManageLeaseResponse = { message: string };
