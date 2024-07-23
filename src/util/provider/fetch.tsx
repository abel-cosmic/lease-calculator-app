import RootLayout from "@/app/layout";
import { fetchServerSession } from "@/lib/helper/server-session";

export default async function fetchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await fetchServerSession();

  return <RootLayout session={session}>{children}</RootLayout>;
}
