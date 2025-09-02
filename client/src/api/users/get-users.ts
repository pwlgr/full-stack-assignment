import type { User } from "../../types";
import { API_URL } from "../config";

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  const data = await res.json();
  return data;
};
