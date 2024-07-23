interface Leases {
  id: string;
  leaseName: string;
  leaseType: string;
  startDate: string;
  endDate: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
}

type LeaseWithoutTimestamps = OmitFields<
  Leases,
  "createdAt" | "updatedAt" | "id"
>;

type LeaseResponse = Leases[];
type LeaseDetailResponse = Leases;
type CreateLeaseResponse = LeaseWithoutTimestamps;
type UpdateLeaseResponse = LeaseWithoutTimestamps;
type DeleteLeaseResponse = { message: string };
