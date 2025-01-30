const UsersList = ({ users, isLoading }) => {
    if (isLoading) {
      return <div className="text-center text-gray-500 py-4">Loading users...</div>;
    }
  
    return (
      <div className="mt-4 w-full">
        {users?.length > 0 ? (
          <ul className="bg-white shadow-md rounded-lg overflow-hidden">
            {users.map((user) => (
              <li
                key={user.id}
                className="p-3 border-b last:border-b-0 hover:bg-blue-50 active:bg-blue-100 transition-colors cursor-pointer"
              >
                {user.name}
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center text-gray-500 py-4">No users found</div>
        )}
      </div>
    );
  };
  
  export default UsersList;
  