import { Request, Response } from "express";
import { usersData } from "../data";
import { logger } from "../utils";

export const getUsers = (req: Request, res: Response) => {
  try {
    const { roles } = req.query ?? "";
    const rolesArray = String(roles).split(",");
    const filteredUsers =
      roles === "all"
        ? usersData
        : usersData.filter((user) => rolesArray.includes(user.role)); // mocked db filtering

    res.status(200).json(filteredUsers);
  } catch (error) {
    logger("Users not found", { req });
    return res.status(404).json({ message: "Users not found" });
  }
};
