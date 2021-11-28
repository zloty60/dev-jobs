import { useContext } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { indigo } from "@mui/material/colors";

import { AuthContext } from "../../../context/AuthContext";
import { loginPath, registerPath } from "../../../routes/AppRoutes";

const NavbarButton = ({ txt, marginRight, to }) => (
  <Button
    component={Link}
    to={to}
    variant="contained"
    color="primary"
    sx={{
      marginRight: marginRight,
    }}
  >
    {txt}
  </Button>
);

export function Navbar() {
  const auth = useContext(AuthContext);
  const { status, isAuth } = auth;

  if (status === "success" && isAuth) {
    return (
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: indigo[500],
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              paddingLeft: "0px !important",
              paddingRight: "0px !important",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                component={Link}
                to="/"
                variant="h6"
                sx={{ color: "#fff", textDecoration: "none" }}
              >
                Dev jobs
              </Typography>
            </Box>
            <NavbarButton txt="dodaj ogłoszenie" to={"/dodaj"} />
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  if (status === "success" && !isAuth) {
    return (
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: indigo[500],
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              paddingLeft: "0px !important",
              paddingRight: "0px !important",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                component={Link}
                to="/"
                variant="h6"
                sx={{ color: "#fff", textDecoration: "none" }}
              >
                Dev jobs
              </Typography>
            </Box>
            <NavbarButton txt="Logowanie" to={loginPath} marginRight={2} />
            <NavbarButton txt="Utwórz konto" to={registerPath} />
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: indigo[500],
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{ paddingLeft: "0px !important", paddingRight: "0px !important" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              sx={{ color: "#fff", textDecoration: "none" }}
            >
              Dev jobs
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
