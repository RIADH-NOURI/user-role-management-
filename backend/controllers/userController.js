import * as userService from "../services/usersService.js";
import { handleError } from "../utils/errorHandler.js";

export const getAllUsersWithRoles = async (req, res) => {
  try {
    const users = await userService.getAllUsersWithRoles();
    res.status(200).json({ users });
  } catch (error) {
    handleError(res, error, "Error fetching users.");
  }
};
export const getUsersByRole = async (req, res) => {
  try {
    const { role } = req.params;
    const users = await userService.getUsersByRole(role);
    if (users.length === 0) {
      return res.status(404).json({ message: `No users found with role: ${role}` });
    }
    res.status(200).json({ users });
  } catch (error) {
    handleError(res, error, "Error fetching users by role.");
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    handleError(res, error, "Error fetching user by ID.");
  }
};

export const createUser = async (req, res) => {
  try {
    const { email, name, age } = req.body;
    const user = await userService.createUser(email, name, age);
    res.status(201).json(user);
  } catch (error) {
    handleError(res, error, "Error creating user.");
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, name, age } = req.body;
    const updatedUser = await userService.updateUser(id, email, name, age);
    res.status(200).json(updatedUser);
  } catch (error) {
    handleError(res, error, "Error updating user.");
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await userService.deleteUser(id);
    res.status(200).json(deletedUser);
  } catch (error) {
    handleError(res, error, "Error deleting user.");
  }
};
