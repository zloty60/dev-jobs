import { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";

import { Navbar } from "../components/layout/navbar/Navbar";
import { RootView } from "../views/RootView";
import { NotFound } from "../views/NotFound";
import { Login } from "../views/Login/index";
import { Signup } from "../views/Signup/Signup";
import { AddOfferForm } from "../views/JobOfferForm/AddOfferForm";
import { EditJobOfferForm } from "../views/JobOfferForm/EditOfferForm";
import { JobOfferDetails } from "../views/JobOfferDetails/JobOfferDetails";
import { Notification } from "../views/Notification/Notification";
import { AuthContext } from "../context/AuthContext";

export function AppRoutes() {
  const { key } = useLocation();
  const auth = useContext(AuthContext);
  const { isAuth } = auth;

  return (
    <>
      <Navbar />
      <Box sx={{ marginTop: "100px", marginBottom: "50px" }}>
        <Routes>
          <Route path="/" element={<RootView />} />
          <Route path="/category/:category" element={<RootView />} />
          <Route
            path={`${jobOfferDetailsPath}/:id`}
            element={<JobOfferDetails />}
          />
          {isAuth ? (
            <>
              <Route path={addJobOfferPath} element={<AddOfferForm />} />
              <Route
                path={`${editJobOfferPath}/:id`}
                element={<EditJobOfferForm />}
              />
              <Route
                path={notificationPath}
                key={key}
                element={<Notification />}
              />
            </>
          ) : (
            <>
              <Route path={loginPath} element={<Login />} />
              <Route path={registerPath} element={<Signup />} />
            </>
          )}

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
export const jobOfferDetailsPath = "/oferta";
export const notificationPath = "/powiadomienie";
