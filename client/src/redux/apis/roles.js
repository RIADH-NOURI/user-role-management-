import {createApi,fetchBaseQuery}from '@reduxjs/toolkit/query/react';

export const rolesApi = createApi({
    reducerPath: "rolesApi",
    baseQuery: fetchBaseQuery({
         baseUrl : import.meta.env.VITE_API_URL
    }),
    tagTypes: ['Roles'],
    endpoints: (builder) => ({
        getAllRoles: builder.query({
            query: () => ({
                url: "/roles",
            }),
            providesTags: ["Roles"],
        }),
        getUsersByRole: builder.query({
            query: (id) => ({
                url: `/role/${id}/users`,
            }),
            providesTags: ["Roles"],
        }),
        createRole: builder.mutation({
            query: (data) => ({
                url: "/create/role",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['Roles'],
        }),
        deleteRole: builder.mutation({
            query: (id) => ({
                url: `/delete/role/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Roles'],
        }),
    }),
});
export const {
    useGetAllRolesQuery,
    useGetUsersByRoleQuery,
    useCreateRoleMutation,
    useDeleteRoleMutation,
} = rolesApi;

export default rolesApi;