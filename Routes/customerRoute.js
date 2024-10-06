import express from 'express'
import { createCustomer, deleteByIdCustomer, findAllCustomer, findByIdCustomer, updateCustomer } from '../Controller/customerController.js';
import { authMiddleware } from '../middleware/authmiddleware.js';


const router = express.Router();
router.post('/create-customer',authMiddleware, createCustomer);
router.get('/find-customer/:id', authMiddleware, findByIdCustomer);
router.put('/update-Cutomer/:id',authMiddleware,updateCustomer);
router.delete('/delete-Customer/:id',authMiddleware,deleteByIdCustomer);
router.get('/findAll-Customer',authMiddleware,findAllCustomer);







export default router;