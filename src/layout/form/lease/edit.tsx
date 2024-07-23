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
import { useGetLeaseQuery, useUpdateLeaseMutation } from "@/hooks/lease";
import { Loader2 } from "lucide-react";

const EditLease = ({ id }: { id: string | string[] }) => {
  const { data: leases, isLoading, error } = useGetLeaseQuery(id as string);

  const lease = leases?.find((lease) => lease.id === id); // Find the specific lease
  const { mutate: updateLease, isPending } = useUpdateLeaseMutation(
    id as string
  );
  console.log(lease);

  const form = useForm<z.infer<typeof LeaseFormSchema>>({
    resolver: zodResolver(LeaseFormSchema),
    defaultValues:
      {
        ...lease,
        monthlyRentAmount: lease.monthlyRentAmount.toString(),
        securityDeposit: lease.securityDeposit.toString(),
        additionalCharges: lease.additionalCharges.toString(),
      } || {}, // Pre-fill form with existing lease data
  });

  const onSubmit = (data: z.infer<typeof LeaseFormSchema>) => {
    updateLease(data, {
      onSuccess: () => {
        toast.success("Successfully updated lease!");
        form.reset(data); // Reset form with updated data
      },
      onError: (error) => {
        toast.error("Failed to update lease.");
        console.error("Error updating lease:", error);
      },
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading lease details</div>;
  }

  if (!lease) {
    return <div>No lease found with the provided ID.</div>;
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
            {isPending ? <Loader2 className="animate-spin" /> : "Update"}
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
};

export default EditLease;
