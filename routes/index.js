import express from "express";
const router = express.Router();

import { registerController, loginController, userController } from '../controllers/index.js';
import auth from '../middlewares/auth.js'

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/me',auth, userController.me);

export default router;