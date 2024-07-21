"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FormSchema = z.object({
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

const CreateUser = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast((t) => (
    //   <div className="flex flex-col items-end px-2">
    //     <Button size="icon" onClick={() => toast.dismiss(t.id)}>
    //       <X />
    //     </Button>
    //     <pre className="mt-2 flex flex-col text-wrap rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   </div>
    // ));
    toast.success("Successfully created!");
  }

  return (
    <Card className="w-2/3">
      <CardContent className="p-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" w-full gap-6 flex flex-col"
          >
            <div className="flex flex-row gap-4 items-center w-full">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} className="w-full" />
                    </FormControl>
                    <FormDescription>This is your first name.</FormDescription>
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
                      <Input placeholder="Doe" {...field} className="w-full" />
                    </FormControl>
                    <FormDescription>This is your last name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-row gap-4 items-center w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john.doe@example.com"
                        {...field}
                        type="email"
                        className="w-full"
                      />
                    </FormControl>
                    <FormDescription>
                      This is your email address.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123-456-7890"
                        type="number"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormDescription>
                      This is your phone number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main St" {...field} />
                  </FormControl>
                  <FormDescription>This is your address.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
export default CreateUser;
