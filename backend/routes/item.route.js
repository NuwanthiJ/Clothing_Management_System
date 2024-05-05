import express from 'express';
import { addCart, viewCart, viewAllCart, updateCart, deleteCart } from '../controllers/item.controller.js';

const router = express.Router();

router.post('/save', addCart);
router.get('/items', viewAllCart);
router.get('/:id', viewCart);
router.put('/update/:id', updateCart);
router.delete('/delete/:id', deleteCart);

export default router;
