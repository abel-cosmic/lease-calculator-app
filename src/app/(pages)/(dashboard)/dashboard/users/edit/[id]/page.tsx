"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import EditUser from "@/layout/form/user/edit";
import { useParams } from "next/navigation";

export default function UserEditPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <aside className="flex flex-col w-full gap-4 max-md:pt-32">
      <Breadcrumbs path="Dashboard/Users/Edit" />
      <EditUser userData={undefined} />
    </aside>
  );
}
