import * as userRoleService from "../services/usersRolesService.js";
import { handleError } from "../utils/errorHandler.js";

export const createUserRole = async (req, res) => {
  try {
    const { userId, roleId } = req.body;
    const userRole = await userRoleService.createUserRole(userId, roleId);
    res.status(201).json(userRole);
  } catch (error) {
    handleError(res, error, "Error creating user role.");
  }
};

export const deleteRoleByUserId = async (req, res) => {
  try {
    const { userId, roleId } = req.params;
    await userRoleService.deleteRoleByUserId(userId, roleId);
    res.status(204).json({ message: "Role deleted successfully." });
  } catch (error) {
    handleError(res, error, "Error deleting role by user ID.");
  }
};
