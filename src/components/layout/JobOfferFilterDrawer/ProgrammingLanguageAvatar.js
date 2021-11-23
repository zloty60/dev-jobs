import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

import { categoryPath } from "../../../routes/AppRoutes";

export function ProgrammingLanguageAvatar({
  value,
  src,
  selectedProgrammingLanguage,
}) {
  const location = useLocation();
  const setOpacity = (value) => {
    if (selectedProgrammingLanguage === "all") {
      return "1";
    }

    if (selectedProgrammingLanguage === value) {
      return "1";
    }

    return "0.4";
  };

  const setOpacityHover = (value) => {
    if (selectedProgrammingLanguage === "all") {
      return "1";
    }

    if (selectedProgrammingLanguage === value) {
      return "1";
    }

    return "0.6";
  };

  return (
    <Grid item sx={{ textAlign: "center" }}>
      <Box
        component={Link}
        to={
          value === selectedProgrammingLanguage
            ? `/${location.search}`
            : `${categoryPath}/${value}${location.search}`
        }
        sx={{
          textDecoration: "none",
          color: "#000000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          opacity: () => setOpacity(value),
          "&:hover": { opacity: () => setOpacityHover(value) },
        }}
      >
        <Avatar src={src} variant="rounded" sx={{ width: 45, height: 45 }} />
        <Typography variant="caption">{value}</Typography>
      </Box>
    </Grid>
  );
}
