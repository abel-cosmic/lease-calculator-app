import { z } from "zod";

export const ManageLeaseSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  leaseId: z.string().min(1, "Lease ID is required"),
  assignmentDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  status: z.string().optional(),
});
