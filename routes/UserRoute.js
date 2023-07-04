import express from "express";
import { register, login } from "../controllers/UserpanController.js";
import { 
    getUsers, 
    getUserById,
    saveUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

// import { register } from "../controllers/Userlogin.js";

const router = express.Router();


// router.post('/register', register)
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/api/register', register);
router.post('/api/login', register);
router.delete('/users/delete', deleteUser);


export default router;