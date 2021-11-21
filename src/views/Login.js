import { Link as RouterLink } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { pink } from "@mui/material/colors";
import { registerPath } from "../routes/AppRoutes";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Wpisz poprawny email")
    .required("Email jest wymagany")
    .max(100, "Maksymalna liczba znaków adresu email wynosi 100"),
  password: yup
    .string()
    .min(8, "Hasło musi mieć minimum 8 znaków")
    .required("Hasło jest wymagane"),
});

export function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
            <form onSubmit={formik.handleSubmit}>
              <TextField
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                variant="outlined"
                margin="normal"
                fullWidth
                label="Adres email"
              />
              <TextField
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                label="Hasło"
              />
              <Button
                type="submit"
                // disabled={!!loading}
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                sx={{ marginTop: 2, marginBottom: 1 }}
              >
                Zaloguj się
              </Button>
            </form>
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
