import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { registerRules } from "../validations/auth.validations.js";
import { validate } from "../utils/validate.js";

const router = express.Router();

router.post("/register", registerRules, validate, register);

router.post("/login", login);

export default router;