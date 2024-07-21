import { SidebarSheet } from "@/layout/nav/sheet";
import { Sidebar } from "@/layout/nav/side-bar";
import TopNav from "@/layout/nav/top";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row gap-0">
      <Sidebar />
      <section className="flex flex-col gap-4 pb-10 w-full ">
        <TopNav />
        <div>{children}</div>
      </section>
    </div>
  );
}
