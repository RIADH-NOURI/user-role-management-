import { prisma } from "../config/prisma.js";

export const getAllRoles = async () => {
  return await prisma.role.findMany();
};

export const createRole = async (name) => {
  return await prisma.role.create({ data: { name } });
};

export const deleteRole = async (id) => {
  return await prisma.role.delete({ where: { id } });
};
