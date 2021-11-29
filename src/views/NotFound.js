import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

export function NotFound() {
  const auth = useContext(AuthContext);
  const { isAuth, status } = auth;

  if (!isAuth && status === "success") {
    return <p>nic nie znaleziono</p>;
  }

  if (isAuth && status === "success") {
    return <p>nic nie znaleziono</p>;
  }

  return null;
}
