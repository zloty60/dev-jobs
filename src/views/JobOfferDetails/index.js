import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

import { JobOfferCard } from "../../components/jobOfferCard/JobOfferCard";
import { JobDescription } from "./components/JobDescription";
import { CreatorAction } from "./components/CreatorAction";
import { JobOfferDetailsSkeleton } from "./components/JobOfferDetailsSkeleton";
import { DeleteOfferAlert } from "./components/DeleteOfferAlert";
import { useFirestoreDoc } from "../../hooks/useFirestoreDoc";
import { getSingleJobOffer } from "../../firebase/services/jobOffers";
import { AuthContext } from "../../context/AuthContext";

export function JobOfferDetails() {
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const { userProfile } = auth;
  const [isOpenDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [isOfferDeleted, setOfferDeleted] = useState(false);
  const { status, data, error } = useFirestoreDoc(getSingleJobOffer, id);

  if (isOfferDeleted) {
    return (
      <Container maxWidth="md">
        <Alert severity="success">Ogłoszenie zostało pomyślnie usunięte!</Alert>
      </Container>
    );
  }

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
    const { jobTitle, jobDescription, createdBy } = data;

    return (
      <Container maxWidth="md">
        {auth.isAuth
          ? userProfile.id === createdBy && (
              <CreatorAction id={id} setOpenDeleteAlert={setOpenDeleteAlert} />
            )
          : null}
        <JobOfferCard jobOffer={data} />
        <Box sx={{ marginTop: 4 }}>
          <JobDescription jobTitle={jobTitle} jobDescription={jobDescription} />
        </Box>
        <DeleteOfferAlert
          open={isOpenDeleteAlert}
          setOpenDeleteAlert={setOpenDeleteAlert}
          id={id}
          setOfferDeleted={setOfferDeleted}
        />
      </Container>
    );
  }

  return null;
}
