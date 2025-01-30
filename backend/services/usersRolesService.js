import { prisma } from "../config/prisma.js";

export const createUserRole = async (userId, roleId) => {
  return await prisma.userRole.create({
    data: {
      userId: parseInt(userId),
      roleId: parseInt(roleId),
    },
  });
};

export const deleteRoleByUserId = async (userId, roleId) => {
  await prisma.userRole.delete({
    where: {
      userId_roleId: {
        userId: parseInt(userId),
        roleId: parseInt(roleId),
      },
    },
  });
};
