import { z } from "zod";

// Define the schema for lease form
export const LeaseFormSchema = z.object({
  leaseStartDate: z.string().nonempty("Lease start date is required"),
  leaseEndDate: z.string().nonempty("Lease end date is required"),
  monthlyRentAmount: z
    .number()
    .min(0, "Monthly rent amount must be at least 0"),
  securityDeposit: z.number().min(0, "Security deposit must be at least 0"),
  additionalCharges: z
    .number()
    .min(0, "Additional charges must be at least 0")
    .optional(),
});
