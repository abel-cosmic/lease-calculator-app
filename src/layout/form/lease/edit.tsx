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
import toast from "react-hot-toast";
import { LeaseFormSchema } from "@/util/schema/lease";

const EditLease = ({
  leaseData,
}: {
  leaseData: z.infer<typeof LeaseFormSchema>;
}) => {
  const form = useForm<z.infer<typeof LeaseFormSchema>>({
    resolver: zodResolver(LeaseFormSchema),
    defaultValues: leaseData,
  });

  function onSubmit(data: z.infer<typeof LeaseFormSchema>) {
    // Perform the update operation here
    toast.success("Lease updated successfully!");
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
            name="leaseStartDate"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Lease Start Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="w-full" />
                </FormControl>
                <FormDescription>Start date of the lease.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="leaseEndDate"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Lease End Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="w-full" />
                </FormControl>
                <FormDescription>End date of the lease.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="monthlyRentAmount"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Monthly Rent Amount</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormDescription>Monthly rent amount.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="securityDeposit"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Security Deposit</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormDescription>Security deposit amount.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="additionalCharges"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Additional Charges</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormDescription>
                  Additional charges (e.g., maintenance fees).
                </FormDescription>
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

export default EditLease;
