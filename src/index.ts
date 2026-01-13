import express from "express";
import { config } from "dotenv";

config();

const app = express();
app.use(express.json());

app.listen(process.env.PORT || 5173, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});