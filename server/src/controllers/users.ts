import { Request, Response } from "express";
import { usersData } from "../data";
import { logger } from "../utils";

export const getUsers = (req: Request, res: Response) => {
  try {
    res.status(200).json(usersData);
  } catch (error) {
    logger("Users not found", { req });
    return res.status(404).json({ message: "Users not found" });
  }
};
