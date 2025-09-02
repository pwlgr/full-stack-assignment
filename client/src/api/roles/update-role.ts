import type { User } from "../../types";
import { API_URL } from "../config";

export const updateRole = async (
  id: User["id"],
  role: User["role"]
): Promise<User> => {
  const res = await fetch(`${API_URL}/${`users/${id}/roles`}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ role }),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  const data = await res.json();
  return data;
};
