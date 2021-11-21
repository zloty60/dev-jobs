import { useState } from "react";
import { JobOfferCard } from "../components/jobOfferCard/JobOfferCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import SortIcon from "@mui/icons-material/Sort";

import { jobOffers } from "../exampleData";
import { JobOfferFilterDrawer } from "../components/layout/JobOfferFilterDrawer/JobOfferFilterDrawer";

export function RootView() {
  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false);

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
              {jobOffers.map((jobOffer) => (
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
