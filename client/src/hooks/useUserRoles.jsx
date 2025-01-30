import { useState } from "react";
import {
  useGetAllUsersRolesQuery,
  useCreateUserRoleMutation,
  useDeleteRoleByUserIdMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useCreateUserMutation
} from "../redux/apis/users";
import { useGetAllRolesQuery } from "../redux/apis/roles";
import useNotification from "../hooks/useNotification";

const useUserRoles = () => {
  const { data: usersData, isLoading: isUsersLoading } = useGetAllUsersRolesQuery();
  const { data: rolesData, isLoading: isRolesLoading } = useGetAllRolesQuery();

  const [createUserRole] = useCreateUserRoleMutation();
  const [deleteRoleByUserId] = useDeleteRoleByUserIdMutation();
  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUserById] = useDeleteUserMutation();
  const [selectedRoles, setSelectedRoles] = useState({});
  const {setNotification} = useNotification();

  const handleCreateRole = async (userId) => {
    const roleId = selectedRoles[userId];
    if (!roleId) {
      alert("Please select a role");
      return;
    }

    const confirmed = window.confirm("Are you sure you want to create a role?");
    if (!confirmed) return;

    try {
      await createUserRole({ userId, roleId }).unwrap();
      setNotification("Role created successfully!");
      console.log("Notification set: Role created successfully!");
    } catch (error) {
      console.error("Error creating role:", error);
      setNotification("Error creating role.");
    }
  };

  const handleRoleSelection = (userId, roleId) => {
    setSelectedRoles((prevSelectedRoles) => ({
      ...prevSelectedRoles,
      [userId]: roleId,
    }));
  };

  const handleDeleteRole = async (userId, roleId) => {
    const confirmed = window.confirm("Are you sure you want to delete this role?");
    if (!confirmed) return;

    try {
      await deleteRoleByUserId({ userId, roleId }).unwrap();
      setNotification("Role deleted successfully!");
    } catch (error) {
      console.error("Error deleting role:", error);
      setNotification("Error deleting role.");
    }
  };

  const handleUpdateUserData = async (updatedUserData) => {
    try {
      console.log("Data being sent:", updatedUserData); 
      const response = await updateUser({
        id: updatedUserData.id,
        name: updatedUserData.name,
        email: updatedUserData.email,
        age: updatedUserData.age,
      }).unwrap();
      console.log("Response from server:", response); 
      alert("User updated successfully!");
      setNotification("User updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error);
      setNotification("Error updating user.");
    }

  };


  const handleDeleteUser = async (userId) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (!confirmed) return;
    try {
      await deleteUserById(userId).unwrap();
      setNotification("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      setNotification("Error deleting user.");
    }
  };

  
  const handleCreateUserData = async (userData) => {
    if (!userData.name || !userData.email || !userData.age) {
      alert("Please fill all fields");
      return;
    }
  
    try {
      console.log("Sending user data:", userData);
      const response = await createUser({
        name: userData.name.trim(),
        email: userData.email.trim(),
        age: Number(userData.age),
      }).unwrap();
      console.log("Response from server:", response);
      setNotification("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      if (error.data) {
        console.error("Server error details:", error.data);
      }
      setNotification("Error creating user.");
    }
  };
  return {
    usersData,
    rolesData,
    isLoading: isUsersLoading || isRolesLoading,
    selectedRoles,
    handleCreateRole,
    handleRoleSelection,
    handleDeleteRole,
    handleUpdateUserData,
    handleDeleteUser,
    handleCreateUserData,
  };
};

export default useUserRoles;
