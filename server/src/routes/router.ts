import { Router } from "express";
import { getRoles, getUsers, updateRole } from "../controllers";

const router = Router();

router.get("/users", getUsers);
router.get("/roles", getRoles);
router.patch("/users/:id/roles", updateRole);

export { router };
