import { useState } from "react";
import { useFormik } from "formik";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { Form } from "./Form";
import { FormHeader } from "../../components/form/FormHeader";
import { FormNotification } from "../../components/form/FormNotification";
import { addJobOffer } from "../../firebase/services/jobOffers";
import { validationSchema } from "./validationSchema";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function JobOfferForm() {
  const [isFormSent, setFormSent] = useState(false);
  const [isSuccessfullyAdded, setSuccessfullyAdded] = useState(false);
  const [isError, setError] = useState(false);

  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      company: "",
      location: "",
      salaryMin: "",
      salaryMax: "",
      category: "",
      experienceLevel: "",
      createdAt: new Date(),
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await addJobOffer(values);
        setFormSent(true);
        setSuccessfullyAdded(true);
      } catch (e) {
        setFormSent(true);
        setError(true);
      }
    },
  });

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
            <Form formik={formik} />
          )}
        </Box>
      </Card>
    </Container>
  );
}
