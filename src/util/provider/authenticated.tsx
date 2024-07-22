"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

const AuthRedirect = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading

    if (!session) {
      router.push("/"); // Redirect to home page if not authenticated
    } else {
      router.push("/dashboard"); // Redirect to dashboard if authenticated
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <ClipLoader />; // Show a loader while checking session status
  }

  return <>{children}</>; // Render children if authentication check is complete
};

export default AuthRedirect;
