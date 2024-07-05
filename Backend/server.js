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

config();

app.use(express.json());//to parse the incominh req with json payload (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req , res) => {
//     res.send("helo");
// });


server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});
