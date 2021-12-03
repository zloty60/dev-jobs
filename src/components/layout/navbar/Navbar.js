import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { indigo } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { AuthContext } from "../../../context/AuthContext";
import { loginPath, registerPath } from "../../../routes/AppRoutes";
import { MobileMenuDrawer } from "./MobileMenuDrawer";
import { AccountMenu } from "./AccountMenu";

const NavbarButton = ({ txt, marginRight, to, sx }) => (
  <Button
    component={Link}
    to={to}
    variant="contained"
    color="primary"
    sx={{
      marginRight: marginRight,
      ...sx,
    }}
  >
    {txt}
  </Button>
);

export function Navbar() {
  const auth = useContext(AuthContext);
  const { status, isAuth, userProfile } = auth;
  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false);

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
            <NavbarButton
              sx={{ display: { xs: "none", sm: "block" } }}
              txt="dodaj ogłoszenie"
              to={"/dodaj"}
            />
            <AccountMenu firstLetter={userProfile.displayName[0]} />
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
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setOpenMobileMenu(!isOpenMobileMenu)}
                color="inherit"
              >
                {isOpenMobileMenu ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <MobileMenuDrawer
                isOpenMobileMenu={isOpenMobileMenu}
                setOpenMobileMenu={setOpenMobileMenu}
              />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <NavbarButton txt="Logowanie" to={loginPath} marginRight={2} />
              <NavbarButton txt="Utwórz konto" to={registerPath} />
            </Box>
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
