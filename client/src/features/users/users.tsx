import { Alert, Container, Snackbar } from "@mui/material";
import { useCallback } from "react";
import { useRoles, useUsers } from "../../hooks";
import type { User } from "../../types";
import { RolesFilters, UsersTable } from "./components";

export const Users = () => {
  const {
    users,
    loading: fetchingUsers,
    fetchUsersData,
    error: usersError,
    setActiveFilters,
    activeFilters,
  } = useUsers();
  const {
    roles,
    updateUserRole,
    error: rolesError,
    loading: loadingRoles,
  } = useRoles();

  const updateRole = async (id: User["id"], role: User["role"]) => {
    await updateUserRole(id, role);
    await fetchUsersData();
  };

  const filterRoles = useCallback(
    async (role: User["role"], checked: boolean) => {
      const areAllActiveOrEmpty =
        activeFilters.includes("all") || activeFilters.length === 0;

      const filteredRoles = checked
        ? [...activeFilters, role]
        : areAllActiveOrEmpty
        ? roles.filter((r) => r !== role)
        : activeFilters.filter((r) => r !== role);

      setActiveFilters(filteredRoles);
    },
    [roles, setActiveFilters, activeFilters]
  );

  return (
    <>
      <Container maxWidth="md">
        <RolesFilters roles={roles} filterRoles={filterRoles} />
        <UsersTable
          users={users}
          roles={roles}
          isLoading={fetchingUsers || loadingRoles}
          updateRole={updateRole}
        />
      </Container>
      <Snackbar open={!!rolesError || !!usersError}>
        <Alert severity="error" variant="filled">
          {rolesError || usersError}
        </Alert>
      </Snackbar>
    </>
  );
};
