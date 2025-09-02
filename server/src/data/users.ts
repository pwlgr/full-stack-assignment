import { randomUUID } from "crypto";
import { User } from "../types";

export const usersData: User[] = [
  {
    name: "john",
    email: "john@mail.com",
    id: randomUUID(),
    role: "Admin",
  },
  {
    name: "tom",
    email: "tom@mail.com",
    id: randomUUID(),
    role: "",
  },
  {
    name: "alice",
    email: "alice@mail.com",
    id: randomUUID(),
    role: "",
  },
];
