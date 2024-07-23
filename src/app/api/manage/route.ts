import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { ManageLeaseSchema } from "@/util/schema/manage";
import { options } from "@/lib/db/auth";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const manageLeases = await prisma.manageLease.findMany({
      include: {
        user: true,
        lease: true,
      },
    });

    return NextResponse.json(manageLeases, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { userId, leaseId, assignmentDate, status } = await request.json();

  const parsed = ManageLeaseSchema.safeParse({
    userId,
    leaseId,
    assignmentDate,
    status,
  });

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.errors },
      { status: 400 }
    );
  }

  try {
    const session = await getServerSession(options);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const manageLease = await prisma.manageLease.create({
      data: {
        userId,
        leaseId,
        assignmentDate: new Date(assignmentDate),
        status,
      },
    });

    return NextResponse.json(manageLease, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
