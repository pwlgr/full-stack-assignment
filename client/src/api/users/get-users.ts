import { API_URL } from "../config.js";

export const getUsers = async () => {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) {
    console.log(res);
    throw new Error(res.body?.toString());
  }

  const data = await res.json();
  return data;
};
