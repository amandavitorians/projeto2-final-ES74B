import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  loading: false,
  data: [],
  error: null,
  query: {
    q: "",
    limit: 12,
  },
  token: null,
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: { ...state.query, ...action.payload } };
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "CLEAR_DATA":
      return { ...state, data: [] };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        error: null,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        user: null,
        data: [],
        error: null,
      };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
