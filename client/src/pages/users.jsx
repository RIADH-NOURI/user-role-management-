import { useState } from "react";
import useUserRoles from "../hooks/useUserRoles";
import UserCard from "../components/templates/users/userCard";
import Notification from "../components/atoms/notification";
import useNotification from "../hooks/useNotification";
import UserForm from "../components/organisms/UserForm";

const Users = () => {
  const {
    usersData,
    rolesData,
    isLoading,
    selectedRoles,
    handleCreateRole,
    handleRoleSelection,
    handleDeleteRole,
    handleUpdateUserData,
    handleDeleteUser,
    handleCreateUserData, 
  } = useUserRoles();
  const { notification } = useNotification();

  const [showForm, setShowForm] = useState(false); 
  const [currentUser, setCurrentUser] = useState({ name: "", email: "", age: "" }); 
  const [isUpdate, setIsUpdate] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  if (!usersData?.users || !rolesData) return <p>No data available.</p>;

  return (
    <main>
      {notification && <Notification message={notification} />}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Users List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usersData.users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            rolesData={rolesData}
            selectedRoles={selectedRoles[user.id] || ""}
            handleRoleSelection={handleRoleSelection}
            handleCreateRole={handleCreateRole}
            handleDeleteRole={handleDeleteRole}
            handleUpdateUser={() => {
              setCurrentUser(user); 
              setIsUpdate(true); 
              setShowForm(true);
            }}
            handleDeleteUser={() => handleDeleteUser(user.id)}
          />
        ))}
      </div>

      <button
        onClick={() => {
          setCurrentUser({ name: "", email: "", age: "" }); 
          setIsUpdate(false); 
          setShowForm(true); 
        }}
        className="p-2 transition duration-300 ease bg-blue-500 cursor-pointer text-white text-sm rounded-sm m-10"
      >
        Create User
      </button>

      {showForm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowForm(false)} 
        >
          <UserForm
            isUpdate={isUpdate} 
            showForm={showForm} 
            userData={currentUser} 
            setUserData={setCurrentUser}
            onSubmit={isUpdate ? handleUpdateUserData : handleCreateUserData} 
            onClose={() => setShowForm(false)}
          />
        </div>
      )}
    </main>
  );
};

export default Users;