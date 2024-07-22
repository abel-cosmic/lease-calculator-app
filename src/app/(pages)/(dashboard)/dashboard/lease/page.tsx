"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { leaseColumns } from "@/components/custom/table/columns/lease";
import { DataTable } from "@/components/custom/table/data-table";
import CreateLease from "@/layout/form/lease/create";
import leases from "@/util/objects/table/lease";

export default function LeasePage() {
  return (
    <aside className="flex flex-col w-full gap-4 max-md:pt-32 items-start">
      <Breadcrumbs path="Dashboard/Lease" />
      <DataTable
        columns={leaseColumns}
        data={leases}
        DialogContentComponent={<CreateLease />}
      />
    </aside>
  );
}
