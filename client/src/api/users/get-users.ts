import type { User } from "../../types";
import { API_URL } from "../config";

export const getUsers = async (roles?: string[]): Promise<User[]> => {
  const rolesQuery = roles?.length ? roles.join(",") : null;
  const res = await fetch(`${API_URL}/users?roles=${rolesQuery}`);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  const data = await res.json();
  return data;
};
