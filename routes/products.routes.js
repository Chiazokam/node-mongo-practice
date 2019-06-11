import express from 'express';
import { test, createProduct, getProducts, updateProduct, deleteProduct } from '../controllers/products.controllers';

const router = express.Router();

router.get('/test', test);
router.post('/products', createProduct);
router.get('/products', getProducts);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
