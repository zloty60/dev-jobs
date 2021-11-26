import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { pink } from "@mui/material/colors";

export function FormHeader({ icon, title }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ backgroundColor: pink["A400"] }}>{icon}</Avatar>
      <Typography
        component="h1"
        variant="h5"
        sx={{ marginTop: 2, marginBottom: 2 }}
      >
        {title}
      </Typography>
    </Box>
  );
}
