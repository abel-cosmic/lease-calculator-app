"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "@/layout/nav/side-bar";
import TopNav from "@/layout/nav/top";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row gap-0">
      <Sidebar />
      <section className="flex flex-col gap-2 pb-10 w-full h-screen ">
        <TopNav />
        <ScrollArea className="h-fit w-full">{children}</ScrollArea>
      </section>
    </div>
  );
}
