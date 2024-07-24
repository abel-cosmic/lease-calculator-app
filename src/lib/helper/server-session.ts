"use server";
import { getServerSession } from "next-auth";
import { options } from "@/lib/db/auth";

export async function fetchServerSession() {
  return await getServerSession(options);
}
