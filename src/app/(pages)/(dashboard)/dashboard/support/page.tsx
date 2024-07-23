"use client";

import { useGetUsersQuery, useCreateUserMutation } from "@/hooks/user";
import { useGetLeasesQuery, useCreateLeaseMutation } from "@/hooks/lease";
import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { useEffect, useState } from "react";
import {
  useGetManageLeasesQuery,
  useCreateManageLeaseMutation,
} from "@/hooks/manage";

export default function SupportPage() {
  // User hooks
  const { data: users, isLoading: isLoadingUsers } = useGetUsersQuery();
  const createUserMutation = useCreateUserMutation();

  // Lease hooks
  const { data: leases, isLoading: isLoadingLeases } = useGetLeasesQuery();
  const createLeaseMutation = useCreateLeaseMutation();

  // ManageLease hooks
  const { data: manageLeases, isLoading: isLoadingManageLeases } =
    useGetManageLeasesQuery();
  const createManageLeaseMutation = useCreateManageLeaseMutation();

  // State to test create and update
  const [userId, setUserId] = useState("");
  const [leaseId, setLeaseId] = useState("");
  const [manageLeaseId, setManageLeaseId] = useState("");

  useEffect(() => {
    if (users && users.length > 0) {
      setUserId(users[0].id);
    }
    if (leases && leases.length > 0) {
      setLeaseId(leases[0].id);
    }
    if (manageLeases && manageLeases.length > 0) {
      setManageLeaseId(manageLeases[0].id);
    }
  }, [users, leases, manageLeases]);

  // Test functions
  const handleCreateUser = () => {
    createUserMutation.mutate({
      firstName: "New User",
      lastName: "New User",
      email: "newuser@example.com",
      phone: "password123",
    });
  };

  const handleCreateLease = () => {
    createLeaseMutation.mutate({
      leaseStartDate: new Date().toISOString(),
      leaseEndDate: new Date(
        Date.now() + 365 * 24 * 60 * 60 * 1000
      ).toISOString(),
      monthlyRentAmount: 1000,
      securityDeposit: 500,
      additionalCharges: 100,
      userId: userId,
    });
  };

  const handleCreateManageLease = () => {
    createManageLeaseMutation.mutate({
      userId: userId,
      leaseId: leaseId,
      assignmentDate: new Date().toISOString(),
      status: "active",
    });
  };

  if (isLoadingUsers || isLoadingLeases || isLoadingManageLeases) {
    return <div>Loading...</div>;
  }

  return (
    <aside className="flex flex-col w-full gap-4 max-md:pt-32">
      <Breadcrumbs path="Dashboard/Support" />
      <div>
        <h2>Users</h2>
        <button onClick={handleCreateUser}>Create User</button>
      </div>
      <div>
        <h2>Leases</h2>
        <button onClick={handleCreateLease}>Create Lease</button>
      </div>
      <div>
        <h2>Manage Leases</h2>
        <button onClick={handleCreateManageLease}>Create Manage Lease</button>
      </div>
    </aside>
  );
}
