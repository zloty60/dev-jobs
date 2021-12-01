import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { editJobOfferPath } from "../../../routes/AppRoutes";

export function CreatorAction({ id, setOpenDeleteAlert }) {
  return (
    <Box
      sx={{
        marginBottom: 2,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Button
        component={Link}
        to={`${editJobOfferPath}/${id}`}
        variant="outlined"
        sx={{ marginRight: 2 }}
      >
        edytuj ogłoszenie
      </Button>
      <Button
        variant="outlined"
        color="error"
        onClick={() => setOpenDeleteAlert(true)}
      >
        usuń ogłoszenie
      </Button>
    </Box>
  );
}
