import express from 'express'

import { authMiddleware } from '../middleware/authmiddleware.js';
import { createProduct, deleteByIdProduct, findAllProduct, findByIdProduct, updateProduct } from '../Controller/productController.js';


const router = express.Router();
router.post('/create-product',authMiddleware,  createProduct);
router.get('/find-product',authMiddleware, findByIdProduct);
router.put('/update-product',authMiddleware,updateProduct);
router.delete('/delete-product',authMiddleware,deleteByIdProduct);
router.get('/findAll-product',authMiddleware,findAllProduct);







export default router;