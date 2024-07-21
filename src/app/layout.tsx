import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Lease Calculator App",
  description:
    "A Lease Calculator App enabling users to sign in, input lease details, get instant calculations, save, edit, delete leases, and share them with others, utilizing Prisma ORM, Tailwind CSS, Zod, React Hook Form, React Hot Toast, TanStack Query, Axios, and Next Auth",
  keywords: [
    "Lease Calculator",
    "Next.js",
    "Prisma ORM",
    "Tailwind CSS",
    "Zod",
    "React Hook Form",
    "React Hot Toast",
    "TanStack Query",
    "Axios",
    "Next Auth",
    "Dark Theme",
  ],
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background plus-jakarta-sans antialiased",
          plusJakartaSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
