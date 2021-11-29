import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Alert from "@mui/material/Alert";
import { pink } from "@mui/material/colors";

import { Form } from "./components/Form";
import { validationSchema } from "./validationSchema";
import { registerPath } from "../../routes/AppRoutes";
import { signInWithEmail } from "../../firebase/services/auth";
import { notificationPath, addJobOfferPath } from "../../routes/AppRoutes";

export function Login() {
  const navigate = useNavigate();
  const [isError, serError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await signInWithEmail(values);
        navigate(notificationPath, {
          reloadDocument: true,
          replace: true,
          state: {
            isSuccess: true,
            alertTitle: "Konto zostało pomyślnie stworzone",
            content: [
              { txt: "Dodaj nowe ogłosznie", path: addJobOfferPath },
              { txt: "Przeglądaj oferty pracy", path: "/" },
            ],
          },
        });
      } catch (err) {
        serError(true);
        if (
          err.code === "auth/wrong-password" ||
          err.code === "auth/user-not-found"
        ) {
          setErrorMessage(
            "Błędne hasło, lub użytkownik o takim mailu nie istnieje!"
          );
        } else {
          setErrorMessage("Coś poszło nie tak!");
        }
      }
    },
  });

  return (
    <Box sx={{ marginTop: "150px" }}>
      <Container maxWidth="sm">
        <Card>
          <Box
            sx={{
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 2,
              paddingRight: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ backgroundColor: pink["A400"] }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                sx={{ marginTop: 2, marginBottom: 2 }}
              >
                Zaloguj się
              </Typography>
            </Box>
            <Form formik={formik} />
            {isError && (
              <Alert sx={{ marginTop: 1, marginBottom: 1 }} severity="error">
                {errorMessage}
              </Alert>
            )}
            <Link
              variant="body2"
              component={RouterLink}
              to={registerPath}
              sx={{
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Nie masz konta? Zarejestruj się
            </Link>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
