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

interface PartialUser {
  id: string;
  firstName: string;
  lastName: string;
}

interface PartialLease {
  id: string;
  monthlyRentAmount: number;
}

interface ManageLease {
  user: PartialUser;
  lease: PartialLease;
  assignmentDate: Date;
  status: "active" | "inactive" | "terminated";
}
