import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
export function Notification() {
  const { state } = useLocation();

  if (state) {
    return (
      <Box sx={{ marginTop: "150px" }}>
        <Container maxWidth="sm">
          {state.isSuccess ? (
            <Alert severity="success">
              <AlertTitle>{state.alertTitle}</AlertTitle>
              {state.content.map((el) => (
                <p key={el.txt}>
                  {el.txt} —{" "}
                  <Box
                    component={Link}
                    to={el.path}
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
              ))}
            </Alert>
          ) : (
            <Alert severity="error">dasdsa</Alert>
          )}
        </Container>
      </Box>
    );
  }

  return null;
}
