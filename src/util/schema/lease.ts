import { z } from "zod";

// Define the schema for lease form
export const LeaseFormSchema = z.object({
  leaseStartDate: z.string().nonempty("Lease start date is required"),
  leaseEndDate: z.string().nonempty("Lease end date is required"),
  monthlyRentAmount: z.string(),
  securityDeposit: z.string(),
  additionalCharges: z.string(),
});
