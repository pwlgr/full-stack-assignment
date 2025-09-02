import { useEffect, useState } from "react";
import { getRoles, updateRole } from "../api";

interface LoadingState {
  get: boolean;
  patch: boolean;
}

const INITIAL_LOADING_STATE: LoadingState = {
  get: false,
  patch: false,
};

export const useRoles = () => {
  const [loading, setLoading] = useState<LoadingState>(INITIAL_LOADING_STATE);
  const [roles, setRoles] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const fetchRolesData = async () => {
    setLoading({ ...INITIAL_LOADING_STATE, get: true });

    try {
      const response = await getRoles();
      setRoles(response);
    } catch (err) {
      setError(err.message);
    }

    setLoading(INITIAL_LOADING_STATE);
  };

  useEffect(() => {
    fetchRolesData();
  }, []);

  const updateUserRole = async (id: string, role: string) => {
    setLoading({ ...INITIAL_LOADING_STATE, patch: true });

    try {
      await updateRole(id, role);
    } catch (err) {
      setError(err.message);
    }

    setLoading(INITIAL_LOADING_STATE);
  };

  return {
    loading,
    roles,
    error,
    updateUserRole,
  };
};
