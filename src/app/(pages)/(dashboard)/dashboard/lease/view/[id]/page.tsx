"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { useParams } from "next/navigation";

export default function LeaseViewPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <aside className="flex flex-col w-full gap-4 max-md:pt-32">
      <Breadcrumbs path="Dashboard/Lease/View" />
    </aside>
  );
}
