import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { loginPath, registerPath } from "../../../routes/AppRoutes";

export function MobileMenuDrawer({ isOpenMobileMenu, setOpenMobileMenu }) {
  return (
    <Drawer
      anchor="right"
      open={isOpenMobileMenu}
      onClose={() => setOpenMobileMenu(false)}
      sx={{
        display: { xs: "block", sm: "none" },
        width: 270,
        [`& .MuiDrawer-paper`]: {
          paddingTop: "80px",
          width: 270,
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        <ListItem disablePadding>
          <Box
            component={Link}
            to={loginPath}
            onClick={() => setOpenMobileMenu(false)}
            sx={{ color: "#000", display: "block", width: "100%" }}
          >
            <ListItemButton>
              <ListItemText primary="Logowanie" />
            </ListItemButton>
          </Box>
        </ListItem>
        <ListItem disablePadding>
          <Box
            component={Link}
            to={registerPath}
            onClick={() => setOpenMobileMenu(false)}
            sx={{ color: "#000", display: "block", width: "100%" }}
          >
            <ListItemButton>
              <ListItemText primary="Utwórz konto" />
            </ListItemButton>
          </Box>
        </ListItem>
      </List>
    </Drawer>
  );
}
