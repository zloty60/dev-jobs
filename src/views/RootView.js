import { Navbar } from "../components/navbar/Navbar";
import { JobOfferCard } from "../components/jobOfferCard/JobOfferCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { jobOffers } from "../exampleData";

export function RootView() {
  return (
    <div>
      <Navbar />
      <Container>
        <div style={{ marginTop: "100px" }}></div>
        <Grid container spacing={3}>
          {jobOffers.map((jobOffer) => (
            <Grid key={jobOffer.id} item xs={12} sm={6} lg={4}>
              <JobOfferCard jobOffer={jobOffer} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
