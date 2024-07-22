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
import { ScrollArea } from "@/components/ui/scroll-area";
import { FormSchema } from "@/util/schema/user";
import toast from "react-hot-toast";

const EditUser = ({ userData }: { userData: z.infer<typeof FormSchema> }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: userData,
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // Perform the update operation here
    toast.success("User updated successfully!");
  }

  return (
    <ScrollArea className="h-[35rem] w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full gap-6 flex flex-col mt-4"
        >
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
                <FormDescription>This is your email address.</FormDescription>
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
                <FormDescription>This is your phone number.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
            Update
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
};

export default EditUser;
