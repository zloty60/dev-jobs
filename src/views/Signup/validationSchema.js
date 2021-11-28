import * as yup from "yup";

export const validationSchema = yup.object({
  displayName: yup
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
