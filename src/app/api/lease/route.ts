import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { options } from "@/lib/db/auth";
import { LeaseFormSchema } from "@/util/schema/lease";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const leases = await prisma.lease.findMany({});
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
  } = await request.json();

  const parsed = LeaseFormSchema.safeParse({
    leaseStartDate,
    leaseEndDate,
    monthlyRentAmount,
    securityDeposit,
    additionalCharges,
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const lease = await prisma.lease.create({
      data: {
        leaseStartDate,
        leaseEndDate,
        monthlyRentAmount,
        securityDeposit,
        additionalCharges,
      },
    });

    return NextResponse.json(lease, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
