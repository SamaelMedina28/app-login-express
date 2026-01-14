import express from "express";
import { register, login, logout } from "../controllers/auth.controller.js";
import { registerRules, loginRules } from "../validations/auth.validations.js";
import { validate } from "../middlewares/validate.js";

const router = express.Router();

router.post("/register", registerRules, validate, register);

router.post("/login", loginRules, validate, login);

router.post("/logout", logout);

export default router;