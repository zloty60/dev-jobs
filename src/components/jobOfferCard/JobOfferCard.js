import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { indigo } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import BusinessIcon from "@mui/icons-material/Business";
import { pink } from "@mui/material/colors";

import { CardChip } from "../dataDisplay/CardChip";
import { jobOfferDetailsPath } from "../../routes/AppRoutes";
import { formatDisplaySalary } from "../../utils/formatDisplaySalary";

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
    id,
  } = jobOffer;
  return (
    <Link to={`${jobOfferDetailsPath}/${id}`}>
      <Card
        sx={{
          "&:hover": {
            boxShadow:
              " 0  5px 10px rgba(154,160,185,0.4),0 15px 40px rgba(166,173,201,0.5)",
            cursor: "pointer",
          },
        }}
      >
        <Box sx={{ padding: "20px" }}>
          {logoUrl ? (
            <Box
              component="img"
              src={logoUrl}
              alt="company logo"
              sx={{ height: "32px", maxWidth: "60px", objectFit: "contain" }}
            />
          ) : (
            <Avatar
              sx={{
                width: "32px",
                height: "32px",
                backgroundColor: pink["A400"],
                marginBottom: 1,
              }}
            >
              <BusinessIcon sx={{ fontSize: 17 }} />
            </Avatar>
          )}

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
            <CardChip label={location} cursor="pointer" />
            <CardChip label={experienceLevel} cursor="pointer" />
            <CardChip label={category} cursor="pointer" />
          </Stack>
          <Typography
            variant="h6"
            component="h3"
            color={indigo[600]}
            sx={{ marginTop: "25px", fontSize: "17px" }}
          >
            {formatDisplaySalary(salaryMin)} - {formatDisplaySalary(salaryMax)}{" "}
            PLN
          </Typography>
        </Box>
      </Card>
    </Link>
  );
}
