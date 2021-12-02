import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { indigo, pink } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { CardChip } from "../dataDisplay/CardChip";
import { formatDisplaySalary } from "../../utils/formatDisplaySalary";
import { programmingLanguages } from "../../data/programmingLanguages";

export function JobOfferCard({ jobOffer, sx, cursor }) {
  const {
    logoUrl,
    jobTitle,
    company,
    experienceLevel,
    category,
    salaryMin,
    salaryMax,
    location,
  } = jobOffer;

  return (
    <Card sx={{ borderLeft: `4px solid ${setBorderColor(category)}`, ...sx }}>
      <Box
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 2,
          paddingRight: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Logo logoUrl={logoUrl} />
          </Grid>
          <Grid item xs={8} md={9}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "ceneter",
              }}
            >
              <Box>
                <CardTitle jobTitle={jobTitle} />
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", marginTop: "5px" }}
                >
                  <CardSubtitle txt={company} icon={<BusinessIcon />} />
                  <CardSubtitle txt={location} icon={<LocationOnIcon />} />
                </Box>
              </Box>
              <Box>
                <CardSalary salaryMin={salaryMin} salaryMax={salaryMax} />
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    marginTop: "10px",
                    justifyContent: { xs: "initial", md: "end" },
                  }}
                >
                  <CardChip label={experienceLevel} cursor={cursor} />
                  <CardChip label={category} cursor={cursor} />
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

const Logo = ({ logoUrl }) => {
  if (logoUrl) {
    return (
      <Box
        component="img"
        src={logoUrl}
        alt="company logo"
        sx={{
          maxHeight: "30px",
          display: "block",
          width: "90%",
          objectFit: "scale-down",
        }}
      />
    );
  }

  return (
    <Avatar
      sx={{
        width: "60px",
        height: "60px",
        backgroundColor: pink["A400"],
      }}
    >
      <BusinessIcon sx={{ fontSize: 30 }} />
    </Avatar>
  );
};

const CardTitle = ({ jobTitle }) => {
  return (
    <Typography
      variant="h6"
      component="h2"
      sx={{
        textTransform: "capitalize",
        wordBreak: "break-all",
        fontSize: { xs: "18px", md: "20px" },
      }}
    >
      {jobTitle}
    </Typography>
  );
};

const CardSubtitle = ({ txt, icon }) => {
  return (
    <Typography
      sx={{
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        color: "#888d99",
        fontWeight: "500",
        wordBreak: "break-all",
        marginRight: { xs: 1, md: 3 },
      }}
    >
      {icon}
      <Box component="span" sx={{ marginLeft: 1 }}>
        {txt}
      </Box>
    </Typography>
  );
};

const CardSalary = ({ salaryMin, salaryMax }) => {
  return (
    <Typography
      variant="h6"
      component="h3"
      color={indigo[600]}
      sx={{
        fontSize: { xs: "16px", md: "18px" },
        wordBreak: "break-all",
        marginTop: { xs: "7px", md: "0px" },
        textAlign: { xs: "initial", md: "right" },
      }}
    >
      {formatDisplaySalary(salaryMin)} - {formatDisplaySalary(salaryMax)} PLN
    </Typography>
  );
};

function setBorderColor(category) {
  for (let i = 0; i < programmingLanguages.length; i++) {
    if (programmingLanguages[i].value === category) {
      return programmingLanguages[i].borderColor;
    }
  }
}
