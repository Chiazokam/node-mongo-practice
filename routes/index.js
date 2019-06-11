import express from 'express';
import productRouter from './products.routes';

const router = express.Router();
router.use('/', productRouter);

export default router;
