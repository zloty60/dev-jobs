import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import SortIcon from "@mui/icons-material/Sort";

import { JobOfferCard } from "../components/jobOfferCard/JobOfferCard";
import { JobOfferCardSkeleton } from "../components/jobOfferCard/JobOfferCardSkeleton";
import { useFirestoreCollection } from "../hooks/useFirestoreCollection";
import { getAllJobOffers } from "../firebase/services/jobOffers";
import { JobOfferFilterDrawer } from "../components/layout/JobOfferFilterDrawer/JobOfferFilterDrawer";
import { setSearchParamsToObj } from "../utils/setSearchParamsToObj";

export function RootView() {
  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  let { category } = useParams();
  const location = useLocation();
  let searchParams = {};
  let experienceLevel = null;
  let orderBy = ["createdAt", "desc"];

  if (location.search) {
    searchParams = setSearchParamsToObj(location.search);
  }

  if (category) {
    category = ["category", "==", category];
  }

  if (searchParams.hasOwnProperty("experienceLevel")) {
    experienceLevel = ["experienceLevel", "==", searchParams.experienceLevel];
  }

  if (searchParams.hasOwnProperty("orderBy")) {
    const sortDirection = searchParams.orderBy === "salaryMax" ? "desc" : "asc";
    orderBy = [searchParams.orderBy, sortDirection];
  }

  const { status, data, error } = useFirestoreCollection(
    getAllJobOffers,
    category,
    experienceLevel,
    orderBy
  );

  if (status === "loading") {
    return (
      <Box sx={{ display: "flex" }}>
        <JobOfferFilterDrawer
          isMobileDrawerOpen={isMobileDrawerOpen}
          setMobileDrawerOpen={setMobileDrawerOpen}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Container>
            <Grid container spacing={3}>
              {[0, 1, 2, 3, 4, 5, 6, 8, 9].map((el) => (
                <Grid key={el} item xs={12} sm={6} lg={4}>
                  <JobOfferCardSkeleton />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    );
  }

  if (status === "error") {
    return <p>{error}</p>;
  }

  if (status === "success") {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <JobOfferFilterDrawer
            isMobileDrawerOpen={isMobileDrawerOpen}
            setMobileDrawerOpen={setMobileDrawerOpen}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Container>
              <Grid container spacing={3}>
                {data.map((jobOffer) => (
                  <Grid key={jobOffer.id} item xs={12} sm={6} lg={4}>
                    <JobOfferCard jobOffer={jobOffer} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Box>
        <Fab
          onClick={() => setMobileDrawerOpen(true)}
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: "16px",
            right: "16px",
            display: { md: "none" },
          }}
        >
          <SortIcon />
        </Fab>
      </>
    );
  }
  return null;
}
