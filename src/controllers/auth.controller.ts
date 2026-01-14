import type { Request, Response } from "express";
import { validationResult } from "express-validator";

export const register = (req: Request, res: Response) => {
    res.json({ message: "Register" });
};

export const login = (req: Request, res: Response) => {
    res.json({ message: "Login" });
};