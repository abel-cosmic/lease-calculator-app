"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { SecurityTabs } from "@/layout/auth/update";

export default function SettingPage() {
  return (
    <aside className="flex flex-col w-full gap-4 max-md:pt-32">
      <Breadcrumbs path="Dashboard/Setting" />
      <SecurityTabs />
    </aside>
  );
}
