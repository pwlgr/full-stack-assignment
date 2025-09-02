import { FormControl, MenuItem, Select } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";

interface User {
  name: string;
  id: string;
  email: string;
  role?: unknown;
}

interface UsersTableProps {
  users: User[];
  isLoading: boolean;
  roles: string[];
  updateRole: (id: string, role: string) => Promise<void>;
}

export const UsersTable = ({
  users,
  isLoading,
  roles,
  updateRole,
}: UsersTableProps) => {
  const columns: GridColDef<User>[] = [
    { field: "id", headerName: "Id", width: 90, flex: 1 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      renderCell: (params) => (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
          <Select
            value={params.value ?? ""}
            label="Role"
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
    />
  );
};
