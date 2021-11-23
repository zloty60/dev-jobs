import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export function SelectInput({
  value,
  onChange,
  name,
  label,
  selectOptions,
  submitForm,
}) {
  const handleInput = (e) => {
    onChange(e);
    submitForm();
  };

  return (
    <TextField
      select
      fullWidth
      label={label}
      sx={{ marginBottom: "30px" }}
      value={value}
      onChange={handleInput}
      name={name}
    >
      {selectOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
