import { API_URL } from "../config";

export const getRoles = async (): Promise<string[]> => {
  const res = await fetch(`${API_URL}/roles`);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  const data = await res.json();
  return data;
};
