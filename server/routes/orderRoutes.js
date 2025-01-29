import express from 'express';
const router = express.Router();
import { verifyPayment } from '../controllers/orderControllers.js';
import asyncWrap from '../utils/asyncWrap.js';


router.post("/verify-payment", asyncWrap(verifyPayment));

export default router;