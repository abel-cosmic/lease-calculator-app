import axios from "@/lib/axios";
import { z } from "zod";
import { SignUpSchema } from "@/util/schema/sign-up";
import { useMutation } from "@tanstack/react-query";

interface SignUpData extends z.infer<typeof SignUpSchema> {}

const signUp = async (data: SignUpData) => {
  const response = await axios.post("/api/auth/sign-up", data);
  return response.data;
};

export const useSignUp = () =>
  useMutation({
    mutationFn: signUp,
    mutationKey: ["sign up admin"],
  });
