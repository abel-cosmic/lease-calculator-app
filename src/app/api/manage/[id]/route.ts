import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ManageLeaseSchema } from "@/util/schema/manage";

const prisma = new PrismaClient();

// GET manage lease by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const manageLease = await prisma.manageLease.findUnique({
      where: { id },
      include: { user: true, lease: true },
    });

    if (!manageLease) {
      return NextResponse.json(
        { error: "ManageLease not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(manageLease, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// PUT update manage lease by ID
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
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
    const manageLease = await prisma.manageLease.update({
      where: { id },
      data: {
        userId,
        leaseId,
        assignmentDate: new Date(assignmentDate),
        status,
      },
    });

    return NextResponse.json(manageLease, { status: 200 });
  } catch (error) {
    console.error(error);
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        { error: "ManageLease not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const manageLease = await prisma.manageLease.delete({
      where: { id },
    });

    return NextResponse.json(manageLease, { status: 200 });
  } catch (error) {
    console.error(error);
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        { error: "ManageLease not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
