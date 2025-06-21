import express from 'express';
import { addTransaction } from '../controllers/transaction.controller.js';

const router = express.Router();

router.post("/", addTransaction);

export default router;
