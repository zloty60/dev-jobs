import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

export function ProgrammingLanguageAvatar({
  value,
  src,
  selectedProgrammingLanguage,
  selectProgrammingLanguage,
}) {
  // console.log(selectedProgrammingLanguage);

  const handleSelectProgrammingLanguage = (value) => {
    if (selectedProgrammingLanguage === value) {
      selectProgrammingLanguage("all");
    } else {
      selectProgrammingLanguage(value);
    }
  };

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
        onClick={() => handleSelectProgrammingLanguage(value)}
        sx={{
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
