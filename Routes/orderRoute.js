import express from 'express'

import { authMiddleware } from '../middleware/authmiddleware.js';
import { createOrder, deleteByIdOrder, findAllOrder, findByIdOrder, updateOrder } from '../Controller/orderController.js';



const router = express.Router();
router.post('/create-order',authMiddleware,   createOrder);
router.get('/find-order',authMiddleware, findByIdOrder);
router.put('/update-order',authMiddleware , updateOrder);
router.delete('/delete-order',authMiddleware, deleteByIdOrder);
router.get('/findAll-order',authMiddleware, findAllOrder);







export default router;