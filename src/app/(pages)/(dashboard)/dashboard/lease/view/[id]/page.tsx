"use client";

import LoadingElement from "@/components/custom/loaders";
import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { useGetLeaseQuery } from "@/hooks/lease";
import { useParams } from "next/navigation";

export default function LeaseViewPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetLeaseQuery(id as string);
  console.log(data);

  if (isLoading) {
    return <LoadingElement />;
  }

  if (error) {
    return <div>Error loading lease details</div>;
  }

  return (
    <aside className="flex flex-col w-full gap-4 max-md:pt-32 p-4">
      <Breadcrumbs path="Dashboard/Lease/View" />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-4">Lease Details</h2>
        {data.map((lease) => (
          <div className="bg-background shadow-md rounded p-4">
            <div className="mb-2">
              <strong>Lease Start Date:</strong> {lease.leaseStartDate}
            </div>
            <div className="mb-2">
              <strong>Lease End Date:</strong> {lease.leaseEndDate}
            </div>
            <div className="mb-2">
              <strong>Monthly Rent Amount:</strong> ${lease.monthlyRentAmount}
            </div>
            <div className="mb-2">
              <strong>Security Deposit:</strong> ${lease.securityDeposit}
            </div>
            <div className="mb-2">
              <strong>Additional Charges:</strong> ${lease.additionalCharges}
            </div>
            <div className="mb-2">
              <strong>Created At:</strong> {lease.createdAt}
            </div>
            <div className="mb-2">
              <strong>Updated At:</strong> {lease.updatedAt}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
