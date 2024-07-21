import { Sidebar } from "@/layout/nav/side-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row gap-0">
      <Sidebar />
      <section className="p-8 h-screen">{children}</section>
    </div>
  );
}
