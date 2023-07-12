"use server";

import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

export const addUser = async (data: Omit<User, "id" | "createdAt">) => {
  return await prisma.user.create({ data: data });
};

export const loginUser = async (email: string, password: string) => {
  const result = await prisma.user.findFirst({
    where: {
      email: email,
      password: password,
    },
  });

  return !!result;
};
