import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";

import { Navbar } from "../components/layout/navbar/Navbar";
import { RootView } from "../views/RootView";
import { NotFound } from "../views/NotFound";
import { Login } from "../views/Login";
import { Signup } from "../views/Signup";
import { OfferForm } from "../views/JobOfferForm/OfferForm";
import { EditJobOfferForm } from "../views/JobOfferForm/EditOfferForm";

export function AppRoutes() {
  return (
    <>
      <Navbar />
      <Box sx={{ marginTop: "100px", marginBottom: "50px" }}>
        <Routes>
          <Route path="/" element={<RootView />} />
          <Route path="/category/:category" element={<RootView />} />
          <Route path={loginPath} element={<Login />} />
          <Route path={registerPath} element={<Signup />} />
          <Route path={addJobOfferPath} element={<OfferForm />} />
          <Route
            path={`${editJobOfferPath}/:id`}
            element={<EditJobOfferForm />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </>
  );
}

export const loginPath = "/logowanie";
export const registerPath = "/utworz-konto";
export const categoryPath = "/category";
export const addJobOfferPath = "/dodaj";
export const editJobOfferPath = "/edytuj";
