import express from 'express'
import { register } from '../Controller/UserController.js';

const router = express.Router();

router.post("/register", register)






export default router;