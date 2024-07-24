"use server";

import { compare } from "bcryptjs";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "../../lib/db/db";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email or password"),
  password: z.string().min(1, "Password is required"),
});

interface LoginFormState {
  errors: {
    email?: string[];
    password?: string[];
    _form?: string[];
  };
}

export async function loginAdmin(
  formState: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  const result = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  const { email, password } = result.data;
  const admin = await db.admin.findUnique({ where: { email } });
  if (!admin || !(await compare(password, admin.password))) {
    return {
      errors: {
        _form: ["Invalid email or password"],
      },
    };
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}
