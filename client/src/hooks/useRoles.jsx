import { useState } from 'react';
import { useGetAllRolesQuery, useGetUsersByRoleQuery } from '../redux/apis/roles';
import { useGetAllUsersRolesQuery } from '../redux/apis/users';

const UseRoles = () => {
    const { data: roles, isLoading: isRolesLoading } = useGetAllRolesQuery();
    
    const { data: allUsers, isLoading: isAllUsersLoading } = useGetAllUsersRolesQuery();

    const [selectedRoleId, setSelectedRoleId] = useState(null);

    const { data: usersByRole, isLoading: isUsersByRoleLoading } = useGetUsersByRoleQuery(selectedRoleId, {
        skip: !selectedRoleId, 
    });

    const displayedUsers = selectedRoleId ? usersByRole?.users : allUsers?.users;

    const handleGetUsersByRole = (roleId) => {
        setSelectedRoleId(roleId);
    };

    return { roles, isRolesLoading, displayedUsers, isAllUsersLoading, isUsersByRoleLoading, handleGetUsersByRole };
};

export default UseRoles;
