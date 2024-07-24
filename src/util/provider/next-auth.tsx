"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
interface NextProviderProps extends React.PropsWithChildren {
  session: Session;
}

export default function NextAuthProvider({
  children,
  session,
}: NextProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
