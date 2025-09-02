import { useEffect, useState } from "react";
import { getUsers } from "../api";

export const useUsers = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState<string>("");
  const fetchUsersData = async () => {
    setIsLoading(true);

    try {
      const response = await getUsers();
      setUsers(response);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  return {
    isLoading,
    users,
    error,
    fetchUsersData,
  };
};
