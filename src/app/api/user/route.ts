import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { UserSchema } from "@/util/schema/user";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const users = await prisma.user.findMany({
      include: {
        admin: true,
      },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { firstName, lastName, email, phone } = await request.json();
  const parsed = UserSchema.safeParse({
    firstName,
    lastName,
    email,
    phone,
    adminId: "1",
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        adminId: "clyy14kdl0001144i39d4j0k1",
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
