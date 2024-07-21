interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
interface Lease {
  id: string;
  leaseStartDate: string;
  leaseEndDate: string;
  monthlyRentAmount: number;
  securityDeposit: number;
  additionalCharges: number;
}
