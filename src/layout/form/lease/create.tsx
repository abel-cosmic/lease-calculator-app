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
import { ScrollArea } from "@/components/ui/scroll-area";
import { LeaseFormSchema } from "@/util/schema/lease";
import { useCreateLeaseMutation } from "@/hooks/lease";
import { Loader2 } from "lucide-react";

const CreateLease = () => {
  const form = useForm<z.infer<typeof LeaseFormSchema>>({
    resolver: zodResolver(LeaseFormSchema),
  });

  const {
    mutate: createLease,
    isPending,
    isError,
    isSuccess,
  } = useCreateLeaseMutation();

  const onSubmit = (data: z.infer<typeof LeaseFormSchema>) => {
    const leaseData: LeaseWithoutTimestamps = {
      leaseStartDate: data.leaseStartDate,
      leaseEndDate: data.leaseEndDate,
      monthlyRentAmount: data.monthlyRentAmount,
      securityDeposit: data.securityDeposit,
      additionalCharges: data.additionalCharges,
    };

    // createLease(leaseData, {
    //   onSuccess: () => {
    //     toast.success("Successfully created lease!");
    //     form.reset(); // Optional: reset the form after success
    //   },
    //   onError: (error) => {
    //     toast.error("Failed to create lease.");
    //     console.error("Error creating lease:", error);
    //   },
    // });
    toast((t) => (
      <div className="flex items-center">
        <div>{JSON.stringify(leaseData, null, 2)}</div>
        <Button
          onClick={() => {
            form.reset();
          }}
          className="ml-4"
        >
          Close
        </Button>
      </div>
    ));
  };

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
                <FormDescription>
                  Enter the start date of the lease.
                </FormDescription>
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
                <FormDescription>
                  Enter the end date of the lease.
                </FormDescription>
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
                  <Input step="0.01" {...field} className="w-full" />
                </FormControl>
                <FormDescription>
                  Enter the monthly rent amount.
                </FormDescription>
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
                  <Input step="0.01" {...field} className="w-full" />
                </FormControl>
                <FormDescription>
                  Enter the security deposit amount.
                </FormDescription>
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
                  <Input step="0.01" {...field} className="w-full" />
                </FormControl>
                <FormDescription>
                  Enter any additional charges (e.g., maintenance fees).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? <Loader2 className="animate-spin" /> : "Submit"}
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
};

export default CreateLease;
