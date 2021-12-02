import { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";

import { AuthContext } from "../../context/AuthContext";
import { useFirestoreCollection } from "../../hooks/useFirestoreCollection";
import { getAllJobOffers } from "../../firebase/services/jobOffers";
import { JobOfferCardSkeleton } from "../../components/jobOfferCard/JobOfferCardSkeleton";
import { JobOfferCard } from "../../components/jobOfferCard/JobOfferCard";
import { jobOfferDetailsPath } from "../../routes/AppRoutes";

export function MyOffers() {
  const auth = useContext(AuthContext);
  const { userProfile } = auth;
  const { status, data } = useFirestoreCollection(getAllJobOffers, [
    "createdBy",
    "==",
    userProfile.id,
  ]);

  if (status === "loading") {
    return (
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {[0, 1, 2, 3].map((el) => (
            <Grid key={el} item xs={12}>
              <JobOfferCardSkeleton />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  if (status === "error") {
    return <p>coś poszło nie tak</p>;
  }

  if (status === "success") {
    return (
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {data.length ? (
            data.map((jobOffer) => (
              <Grid key={jobOffer.id} item xs={12}>
                <Link to={`${jobOfferDetailsPath}/${jobOffer.id}`}>
                  <JobOfferCard
                    jobOffer={jobOffer}
                    sx={{
                      "&:hover": {
                        boxShadow:
                          " 0  5px 10px rgba(154,160,185,0.4),0 15px 40px rgba(166,173,201,0.5)",
                        cursor: "pointer",
                      },
                    }}
                  />
                </Link>
              </Grid>
            ))
          ) : (
            <Alert severity="info" sx={{ width: "100%", marginTop: 3 }}>
              Nie masz dodanych jeszcze żadnych ogłoszeń!
            </Alert>
          )}
        </Grid>
      </Container>
    );
  }

  return null;
}
