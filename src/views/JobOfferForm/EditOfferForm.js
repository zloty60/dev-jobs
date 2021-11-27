import { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { Form } from "./Form";
import { JobOfferSkeleton } from "./JobOfferSkeleton";
import { FormHeader } from "../../components/form/FormHeader";
import { FormNotification } from "../../components/form/FormNotification";
import { getSingleJobOffer } from "../../firebase/services/jobOffers";
import { useFirestoreDoc } from "../../hooks/useFirestoreDoc";
import { jobOfferDetailsPath } from "../../routes/AppRoutes";

export function EditJobOfferForm() {
  const { id } = useParams();
  const [isFormSent, setFormSent] = useState(false);
  const [isSuccessfullyAdded, setSuccessfullyAdded] = useState(false);
  const [isError, setError] = useState(false);
  const { status, data, error } = useFirestoreDoc(getSingleJobOffer, id);

  if (error) {
    <Container maxWidth="md">
      <p>coś poszło nie tak</p>
    </Container>;
  }

  if (status === "success" && !data) {
    return (
      <Container maxWidth="md">
        <p>nie ma takiego ogłsozenia</p>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Card>
        <Box
          sx={{
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          <FormHeader icon={<AssignmentIcon />} title="Edytuj ogłoszenie" />
          {isFormSent ? (
            <Box sx={{ marginTop: 2 }}>
              {isSuccessfullyAdded && (
                <FormNotification
                  severity="success"
                  title="Ogłoszenie zostało zaktualizowane poprawnie"
                  description="Jeżeli chcesz zobaczyć zaktualizowane ogłoszenie -"
                  strong="kliknij tutaj"
                  path={`${jobOfferDetailsPath}/${id}`}
                />
              )}
              {isError && (
                <FormNotification
                  severity="error"
                  title="Błąd!"
                  description="Niestety nie udało się zaktualizować pomyślnie ogłoszenia!"
                />
              )}
            </Box>
          ) : (
            <>
              {id && status === "success" && (
                <Form
                  selectedJobOffer={data}
                  id={id}
                  setFormSent={setFormSent}
                  setSuccessfullyAdded={setSuccessfullyAdded}
                  setError={setError}
                />
              )}
              {id && status === "loading" && <JobOfferSkeleton />}
            </>
          )}
        </Box>
      </Card>
    </Container>
  );
}
