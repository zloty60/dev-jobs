import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";

export function FormNotification({
  severity,
  title,
  description,
  strong,
  path,
}) {
  return (
    <Alert severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      <p>
        {description}{" "}
        <Box
          component={Link}
          to={path}
          sx={{
            color: "#1e4620",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <strong>{strong}</strong>
        </Box>
      </p>
    </Alert>
  );
}
