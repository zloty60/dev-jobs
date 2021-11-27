import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { indigo, pink } from "@mui/material/colors";
import BusinessIcon from "@mui/icons-material/Business";

import { JobOfferDetailsSkeleton } from "./JobOfferDetailsSkeleton";
import { CardChip } from "../../components/dataDisplay/CardChip";
import { useFirestoreDoc } from "../../hooks/useFirestoreDoc";
import { getSingleJobOffer } from "../../firebase/services/jobOffers";
import { formatDisplaySalary } from "../../utils/formatDisplaySalary";

export function JobOfferDetails() {
  const { id } = useParams();
  const { status, data, error } = useFirestoreDoc(getSingleJobOffer, id);

  if (error) {
    return (
      <Container maxWidth="md">
        <p>Coś poszło nie tak, spróbuj ponownie</p>
      </Container>
    );
  }

  if (status === "success" && !data) {
    return (
      <Container maxWidth="md">
        <p>nie ma takiego ogłoszenia</p>
      </Container>
    );
  }

  if (status === "loading") {
    return <JobOfferDetailsSkeleton />;
  }

  if (status === "success") {
    const {
      category,
      logoUrl,
      company,
      experienceLevel,
      jobTitle,
      location,
      salaryMax,
      salaryMin,
    } = data;

    return (
      <Container maxWidth="md">
        <Card>
          <Box
            sx={{
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 2,
              paddingRight: 3,
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={3}
                sx={{
                  display: "flex",
                  alignItems: { xs: "normal", sm: "center" },
                  justifyContent: { xs: "initial", sm: "center" },
                }}
              >
                {logoUrl ? (
                  <Box
                    component="img"
                    src={logoUrl}
                    alt="company logo"
                    sx={{
                      maxHeight: "35px",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <Avatar
                    sx={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: pink["A400"],
                    }}
                  >
                    <BusinessIcon sx={{ fontSize: 30 }} />
                  </Avatar>
                )}
              </Grid>
              <Grid item xs={12} sm={9}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: { xs: "initial", md: "space-between" },
                    alignItems: { xs: "initial", md: "center" },
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      component="h2"
                      fontSize="24px"
                      sx={{
                        textTransform: "capitalize",
                      }}
                    >
                      {company}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ marginTop: "10px" }}
                    >
                      <CardChip label={location} />
                      <CardChip label={experienceLevel} />
                      <CardChip label={category} />
                    </Stack>
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    color={indigo[600]}
                    sx={{
                      fontSize: "20px",
                      marginTop: { xs: "10px", md: "0px" },
                    }}
                  >
                    {formatDisplaySalary(salaryMin)} -{" "}
                    {formatDisplaySalary(salaryMax)} PLN
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Card>
        <Card sx={{ marginTop: 4 }}>
          <Box
            sx={{
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 4,
              paddingRight: 4,
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              fontSize="26px"
              gutterBottom
              sx={{
                textTransform: "capitalize",
              }}
            >
              {jobTitle}
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Quos blanditiis
              tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat
              deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quos blanditiis tenetur unde
              suscipit, quam beatae rerum inventore consectetur, neque
              doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
              Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quos blanditiis tenetur unde
              suscipit, quam beatae rerum inventore consectetur, neque
              doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
              Eum quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
              beatae rerum inventore consectetur, neque doloribus, cupiditate
              numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
              quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
              inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Box>
        </Card>
      </Container>
    );
  }

  return null;
}