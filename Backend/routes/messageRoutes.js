import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import protectRoutes from "../middleware/protectRoute.js"

const router = express.Router();

router.get("/:id", protectRoutes , getMessage );
router.post("/send/:id", protectRoutes , sendMessage);

export default router; 