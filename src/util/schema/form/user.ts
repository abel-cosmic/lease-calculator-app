import { z } from "zod";
export const FormSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required.",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phoneNumber: z.string().min(1, {
    message: "Phone number is required.",
  }),
  address: z.string().min(1, {
    message: "Address is required.",
  }),
});
