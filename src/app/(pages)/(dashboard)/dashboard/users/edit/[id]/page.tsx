"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import EditUser from "@/layout/form/user/edit";

export default function Page() {
  return (
    <aside className="flex flex-col w-full gap-4 px-8 max-md:pt-32">
      <Breadcrumbs path="Dashboard/Users/Edit" />
      <EditUser />
    </aside>
  );
}
