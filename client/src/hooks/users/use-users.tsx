import { useEffect, useState } from "react";
import { getUsers } from "../../api";
import type { User } from "../../types";

export const useUsers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");
  const fetchUsersData = async () => {
    setLoading(true);

    try {
      const response = await getUsers();
      setUsers(response);
    } catch (err) {
      setError(err.message);
    }
    setError("");
    setLoading(false);
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  return {
    loading,
    users,
    error,
    fetchUsersData,
  };
};
