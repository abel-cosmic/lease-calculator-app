import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { LeaseFormSchema } from "@/util/schema/lease"; // Ensure this import path is correct

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const lease = await prisma.lease.findUnique({
      where: { id: id },
    });

    if (!lease) {
      return NextResponse.json({ error: "Lease not found" }, { status: 404 });
    }

    return NextResponse.json(lease, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const lease = await prisma.lease.findUnique({
      where: { id: id },
    });

    if (!lease) {
      return NextResponse.json({ error: "Lease not found" }, { status: 404 });
    }
    await prisma.lease.delete({
      where: { id: id },
    });

    return NextResponse.json(
      { message: "Lease deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// Add PATCH method for updating lease
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const {
    leaseStartDate,
    leaseEndDate,
    monthlyRentAmount,
    securityDeposit,
    additionalCharges,
  } = await request.json();
  if (!id) {
    return NextResponse.json(
      { error: "Lease ID is required" },
      { status: 400 }
    );
  }

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
    const lease = await prisma.lease.update({
      where: { id: id },
      data: {
        leaseStartDate,
        leaseEndDate,
        monthlyRentAmount,
        securityDeposit,
        additionalCharges,
      },
    });

    return NextResponse.json(lease, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update lease" },
      { status: 500 }
    );
  }
}
