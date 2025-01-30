import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/v1',
    }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getAllUsersRoles: builder.query({
            query: () => ({
                url: '/users/roles', 
            }),
            providesTags: ['Users'],
        }),
        getUserById: builder.query({
            query: (id) => ({
                url: `/user/${id}`,
            }),
            providesTags: ['Users'],
        }),
        createUser: builder.mutation({
            query: ({...data}) => ({
                url: '/create/user',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Users'],
        }),
        updateUser: builder.mutation({
            query: ({id, ...data}) => ({
                url: `/update/user/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Users'], 
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/delete/user/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users'], 
        }),
        createUserRole: builder.mutation({
            query: (data) => ({
                url: '/create/user/role',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Users'],
        }),
        deleteRoleByUserId: builder.mutation({
            query: ({ userId, roleId }) => ({
                url: `/delete/user/role/${userId}/${roleId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users'],  
        }),
    }),
});

export const {
    useGetAllUsersRolesQuery,
    useGetUserByIdQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useCreateUserRoleMutation,
    useDeleteRoleByUserIdMutation,
} = usersApi;

export default usersApi;
