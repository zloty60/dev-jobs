import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import { deleteJobOffer } from "../../firebase/services/jobOffers";

export function DeleteOfferAlert({
  open,
  setOpenDeleteAlert,
  id,
  setOfferDeleted,
}) {
  const handleDeleteJobOffer = async () => {
    try {
      await deleteJobOffer(id);
      setOfferDeleted(true);
    } catch (error) {
      throw error;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpenDeleteAlert(false)}
      aria-labelledby="delete-alert-dialog-title"
      aria-describedby="delete-alert-dialog-description"
    >
      <DialogTitle>Czy na pewno chcesz usunąć to ogłoszenie?</DialogTitle>
      <DialogActions>
        <Button onClick={() => setOpenDeleteAlert(false)}>Nie</Button>
        <Button color="error" onClick={handleDeleteJobOffer}>
          Usuń
        </Button>
      </DialogActions>
    </Dialog>
  );
}
