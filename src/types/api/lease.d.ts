interface Lease {
  id: string;
  leaseName: string;
  leaseType: string;
  startDate: string;
  endDate: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
}

type LeaseResponse = Lease[];
type LeaseDetailResponse = Lease;
type CreateLeaseResponse = Lease;
type UpdateLeaseResponse = Lease;
type DeleteLeaseResponse = { message: string };
