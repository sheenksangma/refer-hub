import express from "express";
import { registerUser, getUserEarnings } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/:userId/earnings", getUserEarnings); 

export default router;
