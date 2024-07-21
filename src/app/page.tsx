import { ModeToggle } from "@/components/custom/toogle/theme";
import { LoginForm } from "@/layout/auth/login";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <LoginForm />
    </main>
  );
}
