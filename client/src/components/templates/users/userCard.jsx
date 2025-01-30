import { Trash2, Plus } from "lucide-react";
import UpdateUserButton from "../../atoms/updateUserButton";

const UserCard = ({
  user,
  handleDeleteRole,
  handleCreateRole,
  handleRoleSelection,
  selectedRoles,
  rolesData,
  handleUpdateUser, 
  handleDeleteUser,
}) => {
  const availableRoles = rolesData.filter(
    (role) => !user.roles.some((userRole) => userRole.id === role.id)
  );

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 relative">
      <UpdateUserButton onClick={() => handleUpdateUser(user)} />
      <button
        className="p-2 transition duration-300 ease bg-red-500 cursor-pointer text-white text-sm rounded-sm absolute top-4 right-30 hover:bg-red-700"
        onClick={() => handleDeleteUser(user.id)}
      >
        Delete User
      </button>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">{user.name}</h2>
      <p className="text-gray-600 mb-4">
        Age: <span className="text-gray-700">{user.age}</span>
      </p>
      <p className="text-gray-600 mb-4">Email: {user.email}</p>

      <h3 className="text-gray-800 font-medium mb-2">Roles:</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {user.roles.map((role) => (
          <div
            key={role.id}
            className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border"
          >
            {role.name}
            <button
              className="cursor-pointer ml-2 text-white bg-red-500 rounded-full p-1 transition duration-300 ease hover:bg-red-700"
              onClick={() => handleDeleteRole(user.id, role.id)}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <select
          value={selectedRoles || ""}
          onChange={(e) => handleRoleSelection(user.id, e.target.value)}
          className="flex-1 bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
        >
          <option value="">Select Role</option>
          {availableRoles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
        <button
          onClick={() => handleCreateRole(user.id)}
          className="bg-blue-500 transition duration-300 ease hover:bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={16} /> Add
        </button>
      </div>
    </div>
  );
};

export default UserCard;