import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { indigo } from "@mui/material/colors";
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
        textTransform: "capitalize",
      }}
    />
  );
};

export function JobOfferCard({ jobOffer }) {
  const {
    category,
    location,
    company,
    experienceLevel,
    jobTitle,
    logoUrl,
    salaryMax,
    salaryMin,
  } = jobOffer;
  return (
    <Card
      sx={{
        boxShadow: 1,
        "&:hover": { boxShadow: 3, cursor: "pointer" },
      }}
    >
      <Box sx={{ padding: "20px" }}>
        <Box
          component="img"
          src={logoUrl}
          alt="company logo"
          sx={{ height: "32px", maxWidth: "60px", objectFit: "contain" }}
        />
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          fontSize="19px"
          sx={{
            textTransform: "capitalize",
          }}
        >
          {jobTitle}
        </Typography>
        <Box display="flex" alignItems="center">
          <BusinessIcon />
          <Typography
            marginLeft={1}
            variant="body2"
            component="h3"
            fontSize="15px"
            color="textSecondary"
            sx={{
              textTransform: "capitalize",
            }}
          >
            {company}
          </Typography>
        </Box>
        <Stack direction="row" spacing={1} sx={{ marginTop: "25px" }}>
          <CardChip label={location} />
          <CardChip label={experienceLevel} />
          <CardChip label={category} />
        </Stack>
        <Typography
          variant="h6"
          component="h3"
          color={indigo[600]}
          sx={{ marginTop: "25px", fontSize: "17px" }}
        >
          {salaryMin} - {salaryMax} PLN
        </Typography>
      </Box>
    </Card>
  );
}
