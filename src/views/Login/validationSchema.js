import * as yup from "yup";

export const validationSchema = yup.object({
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
