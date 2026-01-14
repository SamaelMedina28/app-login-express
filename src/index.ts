import express from "express";
import { config } from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { conectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
config();
conectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/", authRoutes);

app.listen(process.env.PORT || 5173, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});