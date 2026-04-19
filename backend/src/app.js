import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import portfolioRoutes from "./routes/portfolioRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/order", orderRoutes);

export default app;
