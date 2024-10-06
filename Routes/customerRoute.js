import express from 'express'
import { createCustomer, deleteByIdCustomer, findByIdCustomer, updateCustomer } from '../Controller/customerController.js';
import { authMiddleware } from '../middleware/authmiddleware.js';


const router = express.Router();
router.post('/create-customer',authMiddleware, createCustomer);
router.get('/find-customer',authMiddleware,findByIdCustomer);
router.put('/update-Cutomer',authMiddleware,updateCustomer);
router.delete('/delete-Customer',authMiddleware,deleteByIdCustomer);
router.get('/findAll-Customer',authMiddleware,findByIdCustomer);







export default router;