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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  useGetManageLeaseQuery,
  useUpdateManageLeaseMutation,
} from "@/hooks/manage";
import { useGetUsersQuery } from "@/hooks/user";
import { Loader2 } from "lucide-react";
import { ManageLeaseSchema } from "@/util/schema/manage";
import { useGetLeasesQuery } from "@/hooks/lease";
import LoadingElement from "@/components/custom/loaders";

const ManageLeaseEditForm = ({ id }: { id: string | string[] }) => {
  const {
    data: manageLease,
    isLoading,
    error,
  } = useGetManageLeaseQuery(id as string);
  const form = useForm<z.infer<typeof ManageLeaseSchema>>({
    resolver: zodResolver(ManageLeaseSchema),
    defaultValues: manageLease,
  });
  const { mutate: updateManageLease, isPending } = useUpdateManageLeaseMutation(
    id as string
  );
  const { data: users } = useGetUsersQuery();
  const { data: leases } = useGetLeasesQuery();

  const onSubmit = (data: z.infer<typeof ManageLeaseSchema>) => {
    updateManageLease(data, {
      onSuccess: () => {
        toast.success("Successfully created manage lease!");
        form.reset();
      },
      onError: (error) => {
        toast.error("Failed to create manage lease.");
        console.error("Error creating manage lease:", error);
      },
    });
  };
  if (isLoading) {
    return <LoadingElement />;
  }

  if (error) {
    return <div>Error loading lease details</div>;
  }

  if (!manageLease) {
    return <div>No lease found with the provided ID.</div>;
  }

  return (
    <ScrollArea className="h-[35rem] w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a user" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {users?.map((user) => (
                      <SelectItem key={user.id} value={user.id}>
                        {user.firstName} {user.lastName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select the user for the lease.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="leaseId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lease</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a lease" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {leases?.map((lease) => (
                      <SelectItem key={lease.id} value={lease.id}>
                        {lease.leaseStartDate} - {lease.leaseEndDate}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>Select the lease to manage.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="assignmentDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Assignment Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormDescription>Enter the assignment date.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select the status of the lease management.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? <Loader2 className="animate-spin" /> : "Create"}
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
};

export default ManageLeaseEditForm;
