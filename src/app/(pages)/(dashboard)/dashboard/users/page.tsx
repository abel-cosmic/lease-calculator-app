"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { columns } from "@/components/custom/table/columns/user";
import { DataTable } from "@/components/custom/table/data-table";
import { useGetUsersQuery } from "@/hooks/user";
import CreateUser from "@/layout/form/user/create";
import { useUserStore } from "@/util/store/user";
import { useEffect } from "react";

export default function UserPage() {
  const { data: users } = useGetUsersQuery();
  const { setEntity, entity } = useUserStore();
  useEffect(() => {
    if (users) {
      setEntity(users);
    }
  }, [users, setEntity]);
  return (
    <aside className="flex flex-col w-full gap-4 px-8 max-md:pt-32 items-start">
      <Breadcrumbs path="Dashboard/Users" />
      <DataTable
        columns={columns}
        data={entity}
        DialogContentComponent={<CreateUser />}
      />
    </aside>
  );
}
