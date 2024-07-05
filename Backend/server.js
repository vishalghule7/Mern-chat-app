import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import { config } from 'dotenv';

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

// const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

config();

app.use(express.json());//to parse the incominh req with json payload (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname,"/Frontend/dist")))

app.get("*" , (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});


server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});
