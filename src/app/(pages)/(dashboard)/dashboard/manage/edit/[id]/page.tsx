"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";

export default function ManageEditPage() {
  return (
    <aside className="flex flex-col w-full gap-4 max-md:pt-32">
      <Breadcrumbs path="Dashboard/Manage/Edit" />
    </aside>
  );
}
