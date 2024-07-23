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
// Utility type to exclude specific fields
type OmitFields<T, K extends keyof T> = Omit<T, K>;

// Define types for creating and updating leases
type LeaseWithoutTimestamps = OmitFields<
  Lease,
  "createdAt" | "updatedAt" | "id"
>;

type LeaseResponse = Leases[];
type LeaseDetailResponse = Leases;
type CreateLeaseResponse = LeaseWithoutTimestamps;
type UpdateLeaseResponse = LeaseWithoutTimestamps;
type DeleteLeaseResponse = { message: string };
