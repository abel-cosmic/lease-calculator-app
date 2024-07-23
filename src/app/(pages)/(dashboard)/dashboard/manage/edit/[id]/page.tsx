"use client";

import LoadingElement from "@/components/custom/loaders";
import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { useGetManageLeaseQuery } from "@/hooks/manage";
import { useParams } from "next/navigation";

export default function ManageViewPage() {
  const { id } = useParams();
  const {
    data: manageLease,
    isLoading,
    error,
  } = useGetManageLeaseQuery(id as string);

  if (isLoading) {
    return <LoadingElement />;
  }

  if (error) {
    return <div>Error loading manage lease details</div>;
  }

  return (
    <aside className="flex flex-col w-full gap-4 max-md:pt-32 p-4">
      <Breadcrumbs path="Dashboard/Manage/View" />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-4">Manage Lease Details</h2>
        <div className="bg-background shadow-md rounded p-4">
          <div className="mb-2">
            <strong>User:</strong> {manageLease.user.firstName}{" "}
            {manageLease.user.lastName}
          </div>
          <div className="mb-2">
            <strong>Lease:</strong> {manageLease.lease.leaseStartDate} -{" "}
            {manageLease.lease.leaseEndDate}
          </div>
          <div className="mb-2">
            <strong>Assignment Date:</strong> {manageLease.assignmentDate}
          </div>
          <div className="mb-2">
            <strong>Status:</strong> {manageLease.status}
          </div>
          <div className="mb-2">
            <strong>Created At:</strong> {manageLease.createdAt}
          </div>
          <div className="mb-2">
            <strong>Updated At:</strong> {manageLease.updatedAt}
          </div>
        </div>
      </div>
    </aside>
  );
}
