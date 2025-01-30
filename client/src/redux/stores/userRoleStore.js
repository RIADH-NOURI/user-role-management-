import { configureStore } from '@reduxjs/toolkit';
import rolesApi from '../apis/roles'; 
import usersApi from '../apis/users';

export const store = configureStore({
    reducer: {
        [rolesApi.reducerPath]: rolesApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rolesApi.middleware, usersApi.middleware),
});
