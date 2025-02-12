"use client";
import { LoginForm } from "@/layout/auth/login";
import Image from "next/image";
import logo from "/public/logo-blue.png";
import darklogo from "/public/logo-white.png";
import { useTheme } from "next-themes";

export default function LoginIn() {
  const { theme } = useTheme();

  // Determine which logo to use based on the current theme
  const currentLogo = theme === "dark" ? darklogo : logo;

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#f0f0f0_0.2px,transparent_0.2px),linear-gradient(to_bottom,#f0f0f0_0.2px,transparent_0.2px)] bg-[size:6rem_4rem]"></div>
      <div className="mb-6">
        <Image src={currentLogo} alt="Logo" width={150} height={50} />
      </div>
      <LoginForm />
    </main>
  );
}
