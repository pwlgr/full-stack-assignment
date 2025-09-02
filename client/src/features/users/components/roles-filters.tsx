import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import type { User } from "../../../types";

interface RolesFiltersProps {
  roles: string[];
  filterRoles: (role: User["role"], checked: boolean) => Promise<void>;
}

export const RolesFilters = ({ roles, filterRoles }: RolesFiltersProps) => {
  const filtersControls = roles.map((role) => (
    <FormControlLabel
      key={role}
      control={
        <Checkbox
          defaultChecked
          onChange={(_, checked) => filterRoles(role, checked)}
        />
      }
      label={role}
    />
  ));

  return (
    <FormGroup>
      <Box>{filtersControls}</Box>
    </FormGroup>
  );
};
