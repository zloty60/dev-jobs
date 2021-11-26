import * as yup from "yup";

export const validationSchema = yup.object({
  jobTitle: yup
    .string()
    .required("Nazwa stanowiska jest wymagana")
    .max(150, "Maksymalna ilość znaków dla nazwy stanowiska to 150"),
  company: yup
    .string()
    .required("Nazwa firmy jest wymagana")
    .max(150, "Maksymalna ilość znaków dla nazwy firmy to 150"),
  location: yup.string().required("Lokalizacja jest wymagana"),
  salaryMin: yup
    .number()
    .integer("Pensja musi być liczbą całkowitą")
    .required("Dolne widełki wynagrodzenia są wymagane")
    .moreThan(0, "Pensja musi być większa od zera")
    .lessThan(
      yup.ref("salaryMax"),
      "Widełki dolne muszą być mniejsze niż widełki górne"
    ),
  salaryMax: yup
    .number()
    .integer("Dolne widełki wynagrodzenia są wymagane")
    .required("Górne widełki wynagrodzenia są wymagane")
    .moreThan(
      yup.ref("salaryMin"),
      "Widełki górne muszą być większe niż widełki dolne"
    ),
  category: yup.string().required("Kategoria jest wymagana"),
  experienceLevel: yup.string().required("Poziom doświadczenia jest wymagany"),
});
