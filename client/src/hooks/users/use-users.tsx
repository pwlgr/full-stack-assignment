import { useCallback, useEffect, useState } from "react";
import { getUsers } from "../../api";
import type { User } from "../../types";

export const useUsers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");
  const [activeFilters, setActiveFilters] = useState<string[]>(["all"]);

  const fetchUsersData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await getUsers(activeFilters);
      setUsers(response);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return;
    }

    setError("");
    setLoading(false);
  }, [activeFilters]);

  useEffect(() => {
    fetchUsersData();
  }, [fetchUsersData]);

  return {
    loading,
    users,
    error,
    fetchUsersData,
    setActiveFilters,
    activeFilters,
  };
};
