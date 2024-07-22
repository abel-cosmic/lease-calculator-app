"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "@/layout/nav/side-bar";
import TopNav from "@/layout/nav/top";
import NextAuthProvider from "@/util/provider/next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <ClipLoader color="#000" loading={true} size={50} />;
  }

  if (status === "unauthenticated") {
    router.push("/auth/signin");
    return null;
  }
  return (
    <NextAuthProvider session={session}>
      <div className="flex flex-row gap-0">
        <Sidebar />
        <section className="flex flex-col gap-2 pb-10 w-full h-screen ">
          <TopNav />
          <ScrollArea className="h-fit w-full">{children}</ScrollArea>
        </section>
      </div>
    </NextAuthProvider>
  );
}
