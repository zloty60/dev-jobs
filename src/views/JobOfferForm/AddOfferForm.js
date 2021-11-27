import { useState } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { Form } from "./Form";
import { FormHeader } from "../../components/form/FormHeader";
import { FormNotification } from "../../components/form/FormNotification";
import { jobOfferDetailsPath } from "../../routes/AppRoutes";

//const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function AddOfferForm() {
  const [isFormSent, setFormSent] = useState(false);
  const [isSuccessfullyAdded, setSuccessfullyAdded] = useState(false);
  const [isError, setError] = useState(false);
  const [idAddedOffer, setIdAddedOffer] = useState(null);

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
          <FormHeader icon={<AssignmentIcon />} title="Dodaj ogłoszenie" />
          {isFormSent ? (
            <Box sx={{ marginTop: 2 }}>
              {isSuccessfullyAdded && (
                <FormNotification
                  severity="success"
                  title="Ogłoszenie zostało dodane poprawnie"
                  description="Jeżeli chcesz zobaczyć dodane ogłoszenie -"
                  strong="kliknij tutaj"
                  path={`${jobOfferDetailsPath}/${idAddedOffer}`}
                />
              )}
              {isError && (
                <FormNotification
                  severity="error"
                  title="Błąd!"
                  description="Niestety nie udało się dodać pomyślnie ogłoszenia!"
                />
              )}
            </Box>
          ) : (
            <Form
              setFormSent={setFormSent}
              setSuccessfullyAdded={setSuccessfullyAdded}
              setError={setError}
              setIdAddedOffer={setIdAddedOffer}
            />
          )}
        </Box>
      </Card>
    </Container>
  );
}
