import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { LeaseSchema } from "@/util/schema/form/lease";

const prisma = new PrismaClient();

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
    // Create a new lease record
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
