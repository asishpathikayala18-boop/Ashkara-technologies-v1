import React, { createContext, useContext, useReducer, useEffect } from "react";
import { authApi } from "../services/adminApi";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  mustChangePassword: boolean;
}

interface AuthState {
  token: string | null;
  admin: AdminUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

type AuthAction =
  | { type: "LOGIN"; payload: { token: string; admin: AdminUser } }
  | { type: "LOGOUT" }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "UPDATE_ADMIN"; payload: Partial<AdminUser> };

const initialState: AuthState = {
  token: localStorage.getItem("ashkara_admin_token"),
  admin: (() => {
    try {
      const stored = localStorage.getItem("ashkara_admin_user");
      return stored ? JSON.parse(stored) : null;
    } catch { return null; }
  })(),
  isAuthenticated: !!localStorage.getItem("ashkara_admin_token"),
  isLoading: false,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("ashkara_admin_token", action.payload.token);
      localStorage.setItem("ashkara_admin_user", JSON.stringify(action.payload.admin));
      return { ...state, token: action.payload.token, admin: action.payload.admin, isAuthenticated: true, isLoading: false };
    case "LOGOUT":
      localStorage.removeItem("ashkara_admin_token");
      localStorage.removeItem("ashkara_admin_user");
      return { ...state, token: null, admin: null, isAuthenticated: false, isLoading: false };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "UPDATE_ADMIN": {
      const updated = { ...state.admin, ...action.payload } as AdminUser;
      localStorage.setItem("ashkara_admin_user", JSON.stringify(updated));
      return { ...state, admin: updated };
    }
    default:
      return state;
  }
}

interface AuthContextValue extends AuthState {
  login: (token: string, admin: AdminUser) => void;
  logout: () => void;
  updateAdmin: (data: Partial<AdminUser>) => void;
}

const AdminAuthContext = createContext<AuthContextValue | null>(null);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Verify token on mount
  useEffect(() => {
    if (state.token) {
      authApi.me()
        .then((res) => {
          dispatch({ type: "UPDATE_ADMIN", payload: res.data.data });
        })
        .catch(() => {
          dispatch({ type: "LOGOUT" });
        });
    }
  }, []);

  const login = (token: string, admin: AdminUser) => {
    dispatch({ type: "LOGIN", payload: { token, admin } });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const updateAdmin = (data: Partial<AdminUser>) => {
    dispatch({ type: "UPDATE_ADMIN", payload: data });
  };

  return (
    <AdminAuthContext.Provider value={{ ...state, login, logout, updateAdmin }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used inside AdminAuthProvider");
  return ctx;
}
