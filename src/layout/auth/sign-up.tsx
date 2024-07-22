"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import { SignUpSchema } from "@/util/schema/form/sign-up";
import { useRouter } from "next/navigation";
import { useSignUp } from "../../../hooks/admin-signup";

const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useRouter();
  const { mutate, isPending } = useSignUp();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: z.infer<typeof SignUpSchema>) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Successfully signed up!");
        setTimeout(() => {
          navigate.push("/login");
        }, 2000);
      },
      onError: (error: any) => {
        toast.error(error.response?.data?.error || "An error occurred");
      },
    });
  };

  return (
    <Card className="w-full md:max-w-lg">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid grid-cols-2 gap-4 w-full">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input {...field} className="w-full" type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="w-full" type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} className="w-full" type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="w-full relative">
                        <Input
                          {...field}
                          type={passwordVisible ? "text" : "password"}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 top-6 px-3 flex items-center"
                          onClick={togglePasswordVisibility}
                        >
                          {passwordVisible ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Create an account"
              )}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
};
export default SignUpForm;
