"use client";

import CreateUser from "@/layout/form/user/create";

export default function Page() {
  return (
    <aside className="flex flex-col w-full gap-4 px-8 max-md:pt-32 items-start">
      <h1 className="text-4xl w-full font-bold">Users</h1>
      <CreateUser />
    </aside>
  );
}
