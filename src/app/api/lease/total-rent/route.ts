import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const leases = await prisma.lease.findMany();
    const totalRent = leases.reduce(
      (sum, lease) => sum + parseFloat(lease.monthlyRentAmount || "0"),
      0
    );
    const totalSecurityDeposit = leases.reduce(
      (sum, lease) => sum + parseFloat(lease.securityDeposit || "0"),
      0
    );
    const totalAdditionalCharges = leases.reduce(
      (sum, lease) => sum + parseFloat(lease.additionalCharges || "0"),
      0
    );
    return NextResponse.json(
      {
        totalRent,
        totalSecurityDeposit,
        totalAdditionalCharges,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
