import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { indigo } from "@mui/material/colors";

const NavbarButton = ({ txt, marginRight }) => (
  <Button
    variant="contained"
    color="primary"
    sx={{
      marginRight: marginRight,
      backgroundColor: indigo[600],
      "&:hover": { backgroundColor: indigo[700] },
    }}
  >
    {txt}
  </Button>
);

export function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: indigo[500] }}>
      <Container>
        <Toolbar
          sx={{ paddingLeft: "0px !important", paddingRight: "0px !important" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="h1">
              Dev jobs
            </Typography>
          </Box>
          <NavbarButton txt="Logowanie" marginRight={2} />
          <NavbarButton txt="Rejestracja" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
