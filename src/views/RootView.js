import { Navbar } from "../components/navbar/Navbar";
import { JobOfferCard } from "../components/jobOfferCard/JobOfferCard";
import Container from "@mui/material/Container";

export function RootView() {
  return (
    <div>
      <Navbar />
      <Container>
        <div style={{ marginTop: "100px" }}></div>
        <JobOfferCard />
      </Container>
    </div>
  );
}
