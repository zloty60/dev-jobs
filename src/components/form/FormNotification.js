import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export function FormNotification({ severity, title, description, strong }) {
  return (
    <Alert severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      <p>
        {description} <strong>{strong}</strong>
      </p>
    </Alert>
  );
}
