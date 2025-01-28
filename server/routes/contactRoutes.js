import express from 'express';
const router = express.Router();
import { sendEmail } from '../controllers/contactController.js';
import asyncWrap from '../utils/asyncWrap.js';


router.post("/", asyncWrap(sendEmail));


export default router;