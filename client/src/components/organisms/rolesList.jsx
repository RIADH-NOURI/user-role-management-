const RolesList = ({ roles, handleGetUsersByRole }) => {
    return (
      <div className="mt-4 w-full">
        {roles?.length > 0 ? (
          <ul className="bg-white shadow-md rounded-lg overflow-hidden">
            {roles.map((role) => (
              <li
                key={role.id}
                onClick={() => handleGetUsersByRole(role.id)}
                className="p-3 border-b last:border-b-0 hover:bg-amber-50 active:bg-amber-100 transition-colors cursor-pointer"
              >
                {role.name}
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center text-gray-500 py-4">No roles found</div>
        )}
      </div>
    );
  };
  
  export default RolesList;
  