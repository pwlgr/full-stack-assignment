import { useEffect, useState } from "react";
import { getRoles, updateRole } from "../../api";
import type { User } from "../../types";

export const useRoles = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [roles, setRoles] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const fetchRolesData = async () => {
    setError("");
    setLoading(true);

    try {
      const response = await getRoles();
      setRoles(response);
    } catch (err) {
      setError(err.message);
    }
    setError("");
    setLoading(false);
  };

  useEffect(() => {
    fetchRolesData();
  }, []);

  const updateUserRole = async (id: User["id"], role: User["role"]) => {
    setError("");
    setLoading(true);

    try {
      await updateRole(id, role);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return {
    loading,
    roles,
    error,
    updateUserRole,
  };
};
