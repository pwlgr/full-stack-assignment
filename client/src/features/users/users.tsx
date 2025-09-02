import { Alert, Container, Snackbar } from "@mui/material";
import { useRoles, useUsers } from "../../hooks";
import type { User } from "../../types";
import { UsersTable } from "./components";

export const Users = () => {
  const {
    users,
    loading: fetchingUsers,
    fetchUsersData,
    error: usersError,
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

  return (
    <>
      <Container maxWidth="md">
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
