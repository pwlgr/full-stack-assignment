import { FormControl, MenuItem, Select } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type { User } from "../../../types";
import { capitalize } from "../../../utils";

interface UsersTableProps {
  users: User[];
  isLoading: boolean;
  roles: string[];
  updateRole: (id: User["id"], role: User["role"]) => Promise<void>;
}

type UserFieldsType = {
  [K in keyof User]: K;
};

const userFields: UserFieldsType = {
  name: "name",
  id: "id",
  email: "email",
  role: "role",
};

export const UsersTable = ({
  users,
  isLoading,
  roles,
  updateRole,
}: UsersTableProps) => {
  const columns: GridColDef<User>[] = [
    { field: userFields.id, headerName: userFields.id, flex: 1 },
    {
      field: userFields.name,
      headerName: capitalize(userFields.name),
      flex: 1,
    },
    {
      field: userFields.email,
      headerName: capitalize(userFields.email),
      flex: 1,
    },
    {
      field: userFields.role,
      headerName: capitalize(userFields.role),
      flex: 1,
      renderCell: (params) => (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
          <Select
            value={params.value ?? ""}
            label={userFields.role}
            onChange={(e) => {
              updateRole(params.row.id, e.target.value);
            }}
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ),
    },
  ];

  return (
    <DataGrid
      rows={users}
      columns={columns}
      disableRowSelectionOnClick
      loading={isLoading}
      hideFooter
      slotProps={{
        loadingOverlay: {
          variant: "circular-progress",
          noRowsVariant: "circular-progress",
        },
      }}
    />
  );
};
