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
import { loginPath } from "../routes/AppRoutes";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Nazwa użytkownika jest wymagana")
    .max(50, "Maksymalna liczba znaków dla nazwy użytkownika wynosi 50"),
  email: yup
    .string()
    .email("Wpisz poprawny email")
    .required("Email jest wymagany")
    .max(100, "Maksymalna liczba znaków dla adresu email wynosi 100"),
  password: yup
    .string()
    .min(8, "Hasło musi mieć minimum 8 znaków")
    .max(100, "Maksymalna liczba znaków dla hasła to 100")
    .required("Hasło jest wymagane"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Hasła muszą być takie same"),
});

export function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
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
                Zarejestruj się
              </Typography>
            </Box>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                variant="outlined"
                margin="normal"
                fullWidth
                label="Nazwa użytkownika"
              />
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
                variant="outlined"
                margin="normal"
                fullWidth
                type="password"
                label="Hasło"
              />
              <TextField
                name="passwordConfirm"
                value={formik.values.passwordConfirm}
                onChange={formik.handleChange}
                error={
                  formik.touched.passwordConfirm &&
                  Boolean(formik.errors.passwordConfirm)
                }
                helperText={
                  formik.touched.passwordConfirm &&
                  formik.errors.passwordConfirm
                }
                variant="outlined"
                margin="normal"
                fullWidth
                type="password"
                label="Potwierdź hasło"
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
                Utwórz konto
              </Button>
            </form>
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
