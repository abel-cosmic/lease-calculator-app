"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { manageColumns } from "@/components/custom/table/columns/manage";
import { DataTable } from "@/components/custom/table/data-table";
import CreateLease from "@/layout/form/lease/create";
import manageLeases from "@/util/objects/table/manage";

export default function Page() {
  return (
    <aside className="flex flex-col w-full gap-4 px-8 max-md:pt-32">
      <Breadcrumbs path="Dashboard/Manage" />
      <DataTable
        columns={manageColumns}
        data={manageLeases}
        DialogContentComponent={<CreateLease />}
      />
    </aside>
  );
}
