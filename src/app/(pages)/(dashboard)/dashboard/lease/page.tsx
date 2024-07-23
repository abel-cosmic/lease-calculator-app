"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { leaseColumns } from "@/components/custom/table/columns/lease";
import { DataTable } from "@/components/custom/table/data-table";
import { useGetLeasesQuery } from "@/hooks/lease";
import CreateLease from "@/layout/form/lease/create";
import { useLeaseStore } from "@/util/store/lease";
import { useEffect } from "react";

export default function LeasePage() {
  const { data: leases } = useGetLeasesQuery();
  const { setEntity, entity } = useLeaseStore();

  useEffect(() => {
    if (leases) {
      setEntity(leases);
    }
  }, [leases, setEntity]);

  console.log("data", entity);

  return (
    <aside className="flex flex-col w-full gap-4 max-md:pt-32 items-start">
      <Breadcrumbs path="Dashboard/Lease" />
      <DataTable
        columns={leaseColumns}
        data={entity}
        DialogContentComponent={<CreateLease />}
      />
    </aside>
  );
}
