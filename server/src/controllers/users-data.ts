import { Request, Response } from "express";
import { usersData } from "../models";

export const getUsers = (req: Request, res: Response) => {
  try {
    res.status(200).json(usersData);
  } catch (error) {
    return res.status(404).json({ message: "Users not found" });
  }
};
