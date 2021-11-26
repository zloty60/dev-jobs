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

export function useFirestoreDoc(query, docId) {
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
        const doc = await query(docId).get();
        if (doc.exists) {
          dispatch({ type: "success", payload: doc.data() });
        } else {
          dispatch({ type: "success", payload: null });
        }
      } catch (e) {
        dispatch({ type: "error", payload: e.message });
      }
    };

    fetchData();
  }, [query, docId]);

  return state;
}
