import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export function SelectInput({ label, selectOptions }) {
  return (
    <TextField
      id="outlined-select-currency"
      select
      fullWidth
      label={label}
      value="najnowsze ogłoszenia"
      sx={{ marginBottom: "30px" }}
      // value={currency}
      // onChange={handleChange}
    >
      {selectOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
