export const useFilterRoles = (roles, searchQuery) => {
    return roles?.filter(role => 
      role.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
export const useFilterUsers = (users, searchQuery) => {
    return users?.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
    