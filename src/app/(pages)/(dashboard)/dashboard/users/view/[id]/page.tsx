"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import ViewUser from "@/layout/form/user/view";

export default function Page() {
  return (
    <aside className="flex flex-col w-full gap-4 px-8 max-md:pt-32">
      <Breadcrumbs path="Dashboard/Users/View" />
      <ViewUser userData={undefined} />
    </aside>
  );
}
