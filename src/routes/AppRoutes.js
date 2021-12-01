import { useContext } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";

import { Navbar } from "../components/layout/navbar/Navbar";
import { RootView } from "../views/RootView";
import { NotFound } from "../views/NotFound";
import { Login } from "../views/Login";
import { Signup } from "../views/Signup";
import { AddOfferForm } from "../views/JobOfferForm/AddOfferForm";
import { EditJobOfferForm } from "../views/JobOfferForm/EditOfferForm";
import { JobOfferDetails } from "../views/JobOfferDetails";
import { Notification } from "../views/Notification/Notification";
import { AuthContext } from "../context/AuthContext";

function RequireAuth({ children, redirectTo }) {
  const auth = useContext(AuthContext);
  const { isAuth, status } = auth;

  if (status === "success") {
    return isAuth ? children : <Navigate to={redirectTo} />;
  }

  return null;
}

export function AppRoutes() {
  const { key } = useLocation();
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
          <Route
            path={addJobOfferPath}
            element={
              <RequireAuth redirectTo={loginPath}>
                <AddOfferForm />
              </RequireAuth>
            }
          />
          <Route
            path={`${editJobOfferPath}/:id`}
            element={
              <RequireAuth redirectTo={loginPath}>
                <EditJobOfferForm />
              </RequireAuth>
            }
          />
          <Route path={loginPath} element={<Login />} />
          <Route path={registerPath} element={<Signup />} />
          <Route path={notificationPath} key={key} element={<Notification />} />
          <Route path={notFoundPath} element={<NotFound />} />
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
export const notFoundPath = "/not-found";
