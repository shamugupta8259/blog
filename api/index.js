import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";
import postRoutes from "./routes/postRoute.js";
import commentRoute from "./routes/commentRoute.js";
import path from "path";

import cookieParser from "cookie-parser";

dotenv.config();
const connectionUrl = process.env.MONGO;
mongoose
	.connect(connectionUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("monggose connected siccessfully******************"))
	.catch((error) => {
		console.log(error);
	});

const __dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post/", postRoutes);
app.use("/api/comment", commentRoute);
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal server error occured";
	res.status(statusCode).json({
		success: false,
		statusCode,
		message,
	});
});

app.listen(3001, () => {
	console.log("server is running on port 3001");
});
