import { z } from "zod";

export const ManageLeaseSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  leaseId: z.string().min(1, "Lease ID is required"),
  assignmentDate: z.string().min(1, "Assignment date is required"),
  status: z.string().min(1, "Status is required").default("active"),
});

export type ManageLeaseFormValues = z.infer<typeof ManageLeaseSchema>;
