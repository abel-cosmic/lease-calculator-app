"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { columns } from "@/components/custom/table/columns/user";
import { DataTable } from "@/components/custom/table/data-table";
import CreateUser from "@/layout/form/user/create";
import user from "@/util/objects/table/user";

export default function UserPage() {
  return (
    <aside className="flex flex-col w-full gap-4 px-8 max-md:pt-32 items-start">
      <Breadcrumbs path="Dashboard/Users" />
      <DataTable
        columns={columns}
        data={user}
        DialogContentComponent={<CreateUser />}
      />
    </aside>
  );
}
