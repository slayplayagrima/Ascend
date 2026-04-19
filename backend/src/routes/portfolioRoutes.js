import express from "express";
import { getPortfolio } from "../controllers/portfolioController.js";
import {protect} from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getPortfolio);

export default router; 