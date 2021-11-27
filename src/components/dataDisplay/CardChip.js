import Chip from "@mui/material/Chip";
import { indigo } from "@mui/material/colors";

export const CardChip = ({ label, cursor }) => {
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: " rgb(206 212 245)",
        fontWeight: "bold",
        color: indigo[400],
        letterSpacing: "0.4px",
        textTransform: "capitalize",
        cursor: cursor,
      }}
    />
  );
};
