import { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import { indigo } from "@mui/material/colors";

import { addJobOfferPath, myOffersPath } from "../../../routes/AppRoutes";
import { signOutUser } from "../../../firebase/services/auth";

export function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title="Moje konto">
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <Avatar sx={{ width: 40, height: 40, backgroundColor: indigo[700] }}>
            M
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <MenuLink
            path={addJobOfferPath}
            txt="Dodaj ogłoszenie"
            icon={<AddCircleOutlineIcon fontSize="small" />}
          />
        </MenuItem>
        <MenuItem>
          <MenuLink
            path={myOffersPath}
            txt="Moje ogłoszenia"
            icon={<AssignmentIcon fontSize="small" />}
          />
        </MenuItem>
        <MenuItem onClick={signOutUser}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Wyloguj
        </MenuItem>
      </Menu>
    </>
  );
}

const MenuLink = ({ path, txt, icon }) => {
  return (
    <Box
      component={Link}
      to={path}
      sx={{
        color: "#000000",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <Box sx={{ opacity: "0.8" }}>{txt}</Box>
    </Box>
  );
};
