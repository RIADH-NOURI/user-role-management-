import * as roleService from "../services/rolesService.js";
import { handleError } from "../utils/errorHandler.js";

export const getAllRoles = async (req, res) => {
  try {
    const roles = await roleService.getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    handleError(res, error, "Error fetching roles.");
  }
};

export const createRole = async (req, res) => {
  try {
    const { name } = req.body;
    const role = await roleService.createRole(name);
    res.status(201).json(role);
  } catch (error) {
    handleError(res, error, "Error creating role.");
  }
};

export const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRole = await roleService.deleteRole(parseInt(id));
    res.status(200).json({ message: "Role deleted successfully", role: deletedRole });
  } catch (error) {
    handleError(res, error, "Error deleting role.");
  }
};
