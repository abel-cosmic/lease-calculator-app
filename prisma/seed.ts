import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("password123", 12);

  const admin = await prisma.admin.upsert({
    where: { email: "admin@admin.com" },
    update: {},
    create: {
      firstName: "abel",
      lastName: "shibabaw",
      email: "admin@admin.com",
      password,
    },
  });

  console.log({ admin });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
