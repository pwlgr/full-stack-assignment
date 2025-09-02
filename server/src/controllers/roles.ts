import { Request, Response } from "express";
import { ROLES, usersData } from "../models";

export const getRoles = (req: Request, res: Response) => {
  try {
    res.status(200).json(ROLES);
  } catch (error) {
    return res.status(404).json({ message: "Roles not found" });
  }
};

export const updateRole = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = usersData.find((u) => u.id === id);

    if (!user) {
      return res.status(404).json({ message: "User not found on server." });
    }

    const { role } = req.body;

    if (!ROLES.includes(role)) {
      return res.status(400).json({ message: "Invalid role." });
    }

    user.role = role;

    res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
};
