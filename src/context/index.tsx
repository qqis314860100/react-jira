import React, { ReactNode } from "react";
import { AuthProvider } from "./auth-context";

function AppProvider({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default AppProvider;
