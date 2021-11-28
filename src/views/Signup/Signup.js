import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useFormik } from "formik";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { pink } from "@mui/material/colors";

import { validationSchema } from "./validationSchema";
import { Form } from "./Form";
import { NotificationWrapper } from "./NotificationWrapper";
import { loginPath } from "../../routes/AppRoutes";
import { registerInFirebase } from "../../firebase/services/auth";

export function Signup() {
  const [isFormSent, setFormSent] = useState(false);
  const [isSignUpSuccessfully, setSignUpSuccessfully] = useState(false);
  const [isSignUpFail, setSignUpFail] = useState(false);
  const [signUpFailMessage, setSignUpFailMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await registerInFirebase(values);
        setFormSent(true);
        setSignUpSuccessfully(true);
      } catch (err) {
        setFormSent(true);
        setSignUpFail(true);
        setSignUpFailMessage(err.message);
      }
    },
  });

  if (isFormSent) {
    return (
      <NotificationWrapper
        isSignUpSuccessfully={isSignUpSuccessfully}
        isSignUpFail={isSignUpFail}
        signUpFailMessage={signUpFailMessage}
      />
    );
  }

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
                Zarejestruj się
              </Typography>
            </Box>
            <Form formik={formik} />
            <Link
              variant="body2"
              component={RouterLink}
              to={loginPath}
              sx={{
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Posiadasz już konto? Zaloguj się
            </Link>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
