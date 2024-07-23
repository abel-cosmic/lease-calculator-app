interface Leases {
  id: string;
  leaseStartDate: string;
  leaseEndDate: string;
  monthlyRentAmount: number;
  securityDeposit: number;
  additionalCharges: number;
  createdAt: string;
  updatedAt: string;
}

type LeaseResponse = Leases[];
type LeaseDetailResponse = Leases;
type DeleteLeaseResponse = { message: string };
interface TotalRentResponse {
  totalRent: number;
  totalSecurityDeposit: number;
  totalAdditionalCharges: number;
}
