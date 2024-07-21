import { SidebarSheet } from "@/layout/nav/sheet";
import { Sidebar } from "@/layout/nav/side-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row gap-0">
      <SidebarSheet />
      <Sidebar />
      <section className="pt-12 pl-8 pr-8 h-screen w-full ">{children}</section>
    </div>
  );
}
