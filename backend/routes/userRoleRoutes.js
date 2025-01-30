import express from 'express';
import {createUserRole,deleteRoleByUserId} from '../controllers/userRolesController.js'

const router = express.Router();


// POST /api/user-roles
router.post('/create/user/role', createUserRole);
// DELETE /api/user-roles/:userId
router.delete('/delete/user/role/:userId/:roleId', deleteRoleByUserId);






export default router;




