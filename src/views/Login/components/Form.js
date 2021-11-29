import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { indigo } from "@mui/material/colors";

export function Form({ formik }) {
  return (
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
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        label="Hasło"
      />
      <LoadingButton
        type="submit"
        fullWidth
        size="large"
        loading={formik.isSubmitting}
        variant="contained"
        sx={{
          marginTop: 2,
          marginBottom: 1,
          backgroundColor: formik.isSubmitting
            ? `${indigo[200]} !important`
            : `${indigo[600]} !important`,
        }}
      >
        Zaloguj się
      </LoadingButton>
    </form>
  );
}
