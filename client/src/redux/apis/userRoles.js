import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersRolesApi = createApi({
    reducerPath: 'usersRolesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/v1',
    }),
    providesTags: ['Users'],
    endpoints: (builder) => ({
        getAllUsersRoles: builder.query({
            query: () => ({
                url: '/users/roles', 
            }),
            providesTags: ['Users'],
        }),
        createUserRole: builder.mutation({
            query: (data) => ({
                url: '/create/user/role',
                method: 'POST',
                body: data,
            }),
        }),
        deleteRoleByUserId: builder.mutation({
            query: ({ userId, roleId }) => ({
                url: `/delete/user/role/${userId}/${roleId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useCreateUserRoleMutation,
    useDeleteRoleByUserIdMutation,
} = usersRolesApi;

export default usersRolesApi;
