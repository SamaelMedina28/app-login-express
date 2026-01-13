import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
    res.json({ message: "Register" });
});

router.post("/login", (req, res) => {
    res.json({ message: "Login" });
});

export default router;