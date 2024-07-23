import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
// import { options } from "@/lib/db/auth";
import { UserSchema } from "@/util/schema/user";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    // const session = await getServerSession(options);

    // if (!session) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

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
  // // get the adminId from the session
  // const session = await getServerSession(options);

  // if (!session) {
  //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  // }
  // there is not user.id from the session but there is email so fetch the adminId by selecting the admin from the database
  // const admin = await prisma.admin.findUnique({
  //   where: {
  //     email: session.user.email,
  //   },
  // });
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
    // const session = await getServerSession(options);

    // if (!session) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }
    // // there is not user.id from the session but there is email so fetch the adminId by selecting the admin from the database
    // const admin = await prisma.admin.findUnique({
    //   where: {
    //     email: session.user.email,
    //   },
    // });

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        adminId: "1",
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
