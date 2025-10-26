import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import contactRoutes from "./routes/contact.route.js";
import { app, server } from "./lib/socket.js";

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }));

const allowedOrigins = [
  process.env.CORS_ORIGIN,
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/contacts", contactRoutes);

app.use((err, req, res, next) => {
    console.error("Unexpected error:", err.stack);
    res.status(500).json({ message: "Something broke" });
});

connectDB()
	.then(() => {
		server.listen(process.env.PORT || 5000, () => {
			console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
