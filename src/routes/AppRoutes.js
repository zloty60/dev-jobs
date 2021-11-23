import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";

import { Navbar } from "../components/layout/navbar/Navbar";
import { RootView } from "../views/RootView";
import { NotFound } from "../views/NotFound";
import { Login } from "../views/Login";
import { Signup } from "../views/Signup";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={{ marginTop: "100px", marginBottom: "50px" }}>
        <Routes>
          <Route path="/" element={<RootView />} />
          <Route path="/category/:category" element={<RootView />} />
          <Route path={loginPath} element={<Login />} />
          <Route path={registerPath} element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export const loginPath = "/logowanie";
export const registerPath = "/utworz-konto";
export const categoryPath = "/category";
