import type { Request, Response } from "express";
import { validationResult } from "express-validator";
import { hashPassword } from "../utils/hashBcrypt.js";
import User from "../models/User.js";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const hashedPassword = hashPassword(password);
  const user = await User.create({ name, email, password: hashedPassword });
  res.status(201).json({ message: "User created", user });
};

export const login = (req: Request, res: Response) => {
  res.status(200).json({ message: "Login" });
};
