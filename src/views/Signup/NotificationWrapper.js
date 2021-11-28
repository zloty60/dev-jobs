import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { addJobOfferPath } from "../../routes/AppRoutes";

export function NotificationWrapper({
  isSignUpSuccessfully,
  isSignUpFail,
  signUpFailMessage,
}) {
  return (
    <Box sx={{ marginTop: "150px" }}>
      <Container maxWidth="sm">
        {isSignUpSuccessfully && (
          <Alert severity="success">
            <AlertTitle>Konto zostało pomyślnie stworzone</AlertTitle>
            <p>
              Dodaj nowe ogłosznie —{" "}
              <Box
                component={Link}
                to={addJobOfferPath}
                sx={{
                  color: "#1e4620",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <strong>kliknij tutaj!</strong>
              </Box>
            </p>
            <p>
              Przeglądaj oferty pracy —{" "}
              <Box
                component={Link}
                to={"/"}
                sx={{
                  color: "#1e4620",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <strong>kliknij tutaj!</strong>
              </Box>
            </p>
            <p>
              Przejdz do ustawien swojego konta —{" "}
              <Box
                component={Link}
                to={"/"}
                sx={{
                  color: "#1e4620",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <strong>kliknij tutaj!</strong>
              </Box>
            </p>
          </Alert>
        )}
        {isSignUpFail && <Alert severity="error">{signUpFailMessage}</Alert>}
      </Container>
    </Box>
  );
}
