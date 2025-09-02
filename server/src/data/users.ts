import { randomUUID } from "crypto";
import { User } from "../types";
import { ADMIN, EDITOR, VIEWER } from "./roles";

export const usersData: User[] = [
  {
    name: "john",
    email: "john@mail.com",
    id: randomUUID(),
    role: ADMIN,
  },
  {
    name: "tom",
    email: "tom@mail.com",
    id: randomUUID(),
    role: EDITOR,
  },
  {
    name: "alice",
    email: "alice@mail.com",
    id: randomUUID(),
    role: VIEWER,
  },
];
