// pages/RolesAndUsers.js
import { useState } from 'react';
import UseRoles from '../hooks/UseRoles';
import { useFilterUsers,useFilterRoles } from '../hooks/useFilterSearch';
import SearchInput from '../components/moleculles/searchInput';
import RolesList from '../components/organisms/rolesList';
import UsersList from '../components/organisms/userList';

const RolesAndUsers = () => {
  const { roles, isRolesLoading, displayedUsers, isAllUsersLoading, isUsersByRoleLoading, handleGetUsersByRole } = UseRoles();

  const [roleSearch, setRoleSearch] = useState('');
  const [userSearch, setUserSearch] = useState('');

  const filteredRoles = useFilterRoles(roles, roleSearch);
  const filteredUsers = useFilterUsers(displayedUsers, userSearch);

  if (isRolesLoading) {
    return <div className="text-center text-gray-500">Loading roles...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
      <div className="w-full max-w-4xl flex gap-6">
        {/*roles*/}
        <div className="w-1/2">
          <SearchInput
            placeholder="Search roles"
            value={roleSearch}
            onChange={(e) => setRoleSearch(e.target.value)}
          />
          <RolesList roles={filteredRoles} handleGetUsersByRole={handleGetUsersByRole} />
        </div>

        {/*users */}
        <div className="w-1/2">
          <SearchInput
            placeholder="Search users"
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
          />
          <UsersList users={filteredUsers} isLoading={isAllUsersLoading || isUsersByRoleLoading} />
        </div>
      </div>
    </div>
  );
};

export default RolesAndUsers;
