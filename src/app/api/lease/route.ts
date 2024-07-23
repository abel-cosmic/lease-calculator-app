import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { options } from "@/lib/db/auth";
import { LeaseSchema } from "@/util/schema/lease";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    // console.log("Fetching session...");
    // const session = await getServerSession(options);

    // if (!session) {
    //   console.log("No session found");
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    // console.log("Session found:", session);

    const leases = await prisma.lease.findMany({
      include: {
        user: true,
      },
    });

    return NextResponse.json(leases, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const {
    leaseStartDate,
    leaseEndDate,
    monthlyRentAmount,
    securityDeposit,
    additionalCharges,
    userId,
  } = await request.json();

  const parsed = LeaseSchema.safeParse({
    leaseStartDate,
    leaseEndDate,
    monthlyRentAmount,
    securityDeposit,
    additionalCharges,
    userId,
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    // Check the user's session
    const session = await getServerSession(options);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const lease = await prisma.lease.create({
      data: {
        leaseStartDate,
        leaseEndDate,
        monthlyRentAmount,
        securityDeposit,
        additionalCharges,
        userId,
      },
    });

    return NextResponse.json(lease, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
