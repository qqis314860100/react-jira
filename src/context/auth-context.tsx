import * as auth from "auth-provider";
import { User } from "auth-provider";
import { FullPageLoading } from "components/lib";
import { useAsync } from "hooks/useAsync";
import { useMount } from "hooks/useMound";
import React, { useState } from "react";
import { http } from "utils/http";

interface AuthForm {
  username: string;
  password: string;
}

const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken;
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

const AuthContext = React.createContext<
  | {
      user: auth.User | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => void;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    run,
    setData: setUser,
  } = useAsync<User | null>();
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  // 初始化user
  useMount(() => {
    run(bootstrapUser());
  });

  if (isIdle || isLoading) {
    return <FullPageLoading />;
  }

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    ></AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useContext 必须在 authProvider中使用");
  }
  return context;
};
