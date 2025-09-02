import { Alert, Container, Snackbar } from "@mui/material";
import { useRoles, useUsers } from "../../hooks";
import { UsersTable } from "./components";

export const Users = () => {
  const {
    users,
    isLoading: fetchingUsers,
    fetchUsersData,
    error: usersError,
  } = useUsers();
  const { roles, updateUserRole, error: rolesError } = useRoles();

  const updateRole = async (id: string, role: string) => {
    await updateUserRole(id, role);
    await fetchUsersData();
  };

  return (
    <>
      <Container maxWidth="md">
        <UsersTable
          users={users}
          roles={roles}
          isLoading={fetchingUsers}
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
