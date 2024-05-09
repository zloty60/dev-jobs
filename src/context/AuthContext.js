import React, { useEffect, useReducer, createContext } from "react";

import { listenToAuthState } from "../firebase/services/auth";

export const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "idle":
      return { status: "idle", isAuth: false, userProfile: null };
    case "START_SET_USER_PROFILE":
      return { status: "loading", isAuth: false, userProfile: null };
    case "START_SET_USER_PROFILE_SUCCESS":
      return { status: "success", isAuth: true, userProfile: action.payload };
    case "CLEAR_SET_USER_PROFILE":
      return { status: "success", isAuth: false, userProfile: null };
    case "error":
      return { status: "error", data: undefined, error: action.payload };
    default:
      throw new Error("invalid action");
  }
};

const initialState = {
  status: "idle",
  isAuth: false,
  userProfile: null,
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const unsubscribe = listenToAuthState((user) => {
      if (user) {
        dispatch({ type: "START_SET_USER_PROFILE" });
        dispatch({
          type: "START_SET_USER_PROFILE_SUCCESS",
          payload: {
            displayName: user.displayName,
            email: user.email,
            id: user.uid,
          },
        });
      } else {
        dispatch({ type: "CLEAR_SET_USER_PROFILE" });
      }
    });
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}
