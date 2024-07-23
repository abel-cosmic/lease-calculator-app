"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { manageColumns } from "@/components/custom/table/columns/manage";
import { DataTable } from "@/components/custom/table/data-table";
import { useGetManageLeasesQuery } from "@/hooks/manage";
import CreateLease from "@/layout/form/lease/create";
import { useManageLeaseStore } from "@/util/store/manage";
import { useEffect } from "react";

export default function ManagePage() {
  const { setEntity, entity } = useManageLeaseStore();
  const { data: manage } = useGetManageLeasesQuery();
  useEffect(() => {
    if (manage) {
      setEntity(manage);
    }
  }, [manage, setEntity]);
  return (
    <aside className="flex flex-col w-full gap-4 max-md:pt-32">
      <Breadcrumbs path="Dashboard/Manage" />
      <DataTable
        columns={manageColumns}
        data={entity}
        DialogContentComponent={<CreateLease />}
      />
    </aside>
  );
}
