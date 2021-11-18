import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { indigo } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import BusinessIcon from "@mui/icons-material/Business";

const CardChip = ({ label }) => {
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: " rgb(206 212 245)",
        fontWeight: "bold",
        color: indigo[400],
        letterSpacing: "0.4px",
        cursor: "pointer",
      }}
    />
  );
};

export function JobOfferCard() {
  return (
    <Card
      sx={{
        maxWidth: 370,
        boxShadow: 1,
        "&:hover": { boxShadow: 3, cursor: "pointer" },
      }}
    >
      <Box sx={{ padding: "20px" }}>
        <Avatar
          alt="company logo"
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          sx={{ marginBottom: "15px", width: "32px", height: "32px" }}
        />
        <Typography variant="h6" component="h2" gutterBottom fontSize="19px">
          Senior Software Engineer
        </Typography>
        <Box display="flex" alignItems="center">
          <BusinessIcon />
          <Typography
            marginLeft={1}
            variant="body2"
            component="h3"
            fontSize="15px"
            color="textSecondary"
          >
            Facebook
          </Typography>
        </Box>
        <Stack direction="row" spacing={1} sx={{ marginTop: "25px" }}>
          <CardChip label="Warszawa" />
          <CardChip label="Junior" />
          <CardChip label="Javascript" />
        </Stack>
        <Typography
          variant="h6"
          component="h3"
          color={indigo[600]}
          sx={{ marginTop: "25px", fontSize: "17px" }}
        >
          12 000 - 17 000 PLN
        </Typography>
      </Box>
    </Card>
  );
}
