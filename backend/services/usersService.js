import { prisma } from "../config/prisma.js";

export const getAllUsersWithRoles = async () => {
  const users = await prisma.user.findMany({
    include: {
      roles: {
        include: {
          role: true,
        },
      },
    },
    orderBy: { id: 'asc' },
  });

  return users.map(user => ({
    ...user,
    roles: user.roles.map(userRole => ({
      id: userRole.role.id,
      name: userRole.role.name,
    }))
  }));
};
export const getUsersByRole = async (roleName) => {
    return await prisma.user.findMany({
      where: {
        roles: {
          some: {
            role: {
              name: roleName
            }
          }
        }
      },
      include: {
        roles: {
          include: {
            role: true
          }
        }
      }
    });
  };

export const getUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
    include: {
      roles: { include: { role: true } }
    },
  });

  if (!user) return null;

  return {
    ...user,
    roles: user.roles.map(r => r.role.name),
  };
};

export const createUser = async (email, name, age) => {
  return await prisma.user.create({
    data: { email, name, age }
  });
};

export const updateUser = async (id, email, name, age) => {
  return await prisma.user.update({
    where: { id: parseInt(id) },
    data: { email, name, age }
  });
};

export const deleteUser = async (id) => {
  return await prisma.user.delete({ where: { id: parseInt(id) } });
};
