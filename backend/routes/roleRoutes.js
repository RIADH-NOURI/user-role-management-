import express from 'express';
import { createRole,getAllRoles,deleteRole } from '../controllers/roleController.js';
const router = express.Router();

// Create a new role
 router.post('/create/role',createRole);
 // Get all roles
 router.get('/roles',getAllRoles);
 // Delete a role by id
 router.delete('/role/:id', deleteRole);

 export default router;

