import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import LoadingButton from "@mui/lab/LoadingButton";
import { indigo } from "@mui/material/colors";

import { programmingLanguages } from "../../data/programmingLanguages";
import { validationSchema } from "./validationSchema";
import { addJobOffer, updateJobOffer } from "../../firebase/services/jobOffers";

const selectProps = {
  MenuProps: {
    PaperProps: {
      style: {
        maxHeight: 250,
      },
    },
  },
};

const experienceOptions = [
  {
    value: "intern",
    label: "staż",
  },
  {
    value: "junior",
    label: "junior",
  },
  {
    value: "mid",
    label: "mid",
  },
  {
    value: "senior",
    label: "senior",
  },
];

const locations = [
  {
    value: "Warszawa",
  },
  {
    value: "Kraków",
  },
  {
    value: "Wrocław",
  },
  {
    value: "Gdańsk",
  },
  {
    value: "Poznań",
  },
  {
    value: "Katowice",
  },
  {
    value: "Zdalnie",
  },
];

export function Form({
  selectedJobOffer,
  setFormSent,
  setSuccessfullyAdded,
  setError,
  id,
}) {
  const initialValues = selectedJobOffer ?? {
    jobTitle: "",
    company: "",
    location: "",
    salaryMin: "",
    salaryMax: "",
    category: "",
    experienceLevel: "",
    jobDescription: "",
    createdAt: new Date(),
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        if (selectedJobOffer) {
          await updateJobOffer(values, id);
        } else {
          const response = await addJobOffer(values);
        }

        setFormSent(true);
        setSuccessfullyAdded(true);
      } catch (e) {
        console.log(e);
        setFormSent(true);
        setError(true);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="jobTitle"
            value={formik.values.jobTitle}
            onChange={formik.handleChange}
            error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
            helperText={formik.touched.jobTitle && formik.errors.jobTitle}
            variant="outlined"
            fullWidth
            label="Nazwa stanowiska"
            sx={{ marginTop: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="company"
            value={formik.values.company}
            onChange={formik.handleChange}
            error={formik.touched.company && Boolean(formik.errors.company)}
            helperText={formik.touched.company && formik.errors.company}
            variant="outlined"
            fullWidth
            label="Nazwa firmy"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            SelectProps={selectProps}
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
            select
            variant="outlined"
            fullWidth
            label="Lokalizacja"
          >
            {locations.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="salaryMin"
            value={formik.values.salaryMin}
            onChange={formik.handleChange}
            error={formik.touched.salaryMin && Boolean(formik.errors.salaryMin)}
            helperText={formik.touched.salaryMin && formik.errors.salaryMin}
            type="number"
            variant="outlined"
            fullWidth
            label="Wynagrodzenie od"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="salaryMax"
            value={formik.values.salaryMax}
            onChange={formik.handleChange}
            error={formik.touched.salaryMax && Boolean(formik.errors.salaryMax)}
            helperText={formik.touched.salaryMax && formik.errors.salaryMax}
            type="number"
            variant="outlined"
            fullWidth
            label="Wynagrodzenie do"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            SelectProps={selectProps}
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            error={formik.touched.category && Boolean(formik.errors.category)}
            helperText={formik.touched.category && formik.errors.category}
            select
            variant="outlined"
            fullWidth
            label="Kategoria"
          >
            {programmingLanguages.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="experienceLevel"
            value={formik.values.experienceLevel}
            onChange={formik.handleChange}
            error={
              formik.touched.experienceLevel &&
              Boolean(formik.errors.experienceLevel)
            }
            helperText={
              formik.touched.experienceLevel && formik.errors.experienceLevel
            }
            select
            variant="outlined"
            fullWidth
            label="Poziom doświadczenia"
          >
            {experienceOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="jobDescription"
            value={formik.values.jobDescription}
            onChange={formik.handleChange}
            error={
              formik.touched.jobDescription &&
              Boolean(formik.errors.jobDescription)
            }
            helperText={
              formik.touched.jobDescription && formik.errors.jobDescription
            }
            multiline
            rows={10}
            fullWidth
            label="Opis ogłoszenia"
          />
        </Grid>
      </Grid>
      <LoadingButton
        type="submit"
        loading={formik.isSubmitting}
        variant="contained"
        sx={{
          marginTop: 3,
          backgroundColor: formik.isSubmitting
            ? `${indigo[200]} !important`
            : `${indigo[600]} !important`,
        }}
      >
        {id ? "zaktualizuj" : "dodaj"} ogłoszenie
      </LoadingButton>
    </form>
  );
}
