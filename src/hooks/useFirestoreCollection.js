/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "idle":
      return { status: "idle", data: null, error: null };
    case "loading":
      return { status: "loading", data: null, error: null };
    case "success":
      return { status: "success", data: action.payload, error: null };
    case "error":
      return { status: "error", data: null, error: action.payload };
    default:
      throw new Error("invalid action");
  }
};

export function useFirestoreCollection(
  query,
  where,
  nextWhere,
  orderBy,
  limit
) {
  const initialState = {
    status: "idle",
    data: null,
    error: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "loading" });
      try {
        const querySnapshot = await query(where, nextWhere, orderBy);
        const data = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        dispatch({ type: "success", payload: data });
      } catch (e) {
        dispatch({ type: "error", payload: e.message });
      }
    };

    fetchData();
  }, [
    query,
    JSON.stringify(where),
    JSON.stringify(nextWhere),
    JSON.stringify(orderBy),
  ]);

  return state;
}
