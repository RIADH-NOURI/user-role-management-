import express from 'express';
import { getAllUsersWithRoles, getUserById,createUser,updateUser,deleteUser,getUsersByRole } from '../controllers/userController.js';
const router = express.Router();

// Get all users
router.get('/users/roles', getAllUsersWithRoles);
// Create a new user
router.post('/create/user', createUser);
// Get a user by id
router.get('/user/:id', getUserById);

router.put('/update/user/:id', updateUser);

// Get users by role

router.get('/role/:id/users', getUsersByRole);

// Delete a user by id

router.delete('/delete/user/:id', deleteUser);





export default router;



