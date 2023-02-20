import React, { createContext, useContext, useEffect, useState } from "react";
import { useLoader } from "./LoadContext";

type AuthProps = {
  children: React.ReactNode;
};

type contextType = {
  authData: { name: string };
  onLogin: (v: {}) => any;
  onLogout: () => any;
};
const AuthenticationContext = createContext<undefined | contextType>(undefined);
export default function AuthenticationProvider({ children }: AuthProps) {
  const [authData, setAuthData] = useState({ name: "" });
  const loadingContext = useLoader();
  const setLoading = loadingContext?.setLoading;
  console.log("setloading:", setLoading);

  useEffect(() => {
    getLoggedUser();
  }, [setLoading]);
  async function getLoggedUser() {
    console.log("Getting user data...");

    const response = await fetch("/users/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      credentials: "include",
    });
    try {
      console.log(response);

      if (response.ok) {
        const data = await response.json();
        onLogin(data);
        if (setLoading) setLoading(false);

        console.log("user data arrived: ");
        console.log(data);
        return data;
      }
      if (setLoading) setLoading(false);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const onLogin = (value: any) => setAuthData(value);
  const onLogout = () => setAuthData({ name: "" });
  return (
    <AuthenticationContext.Provider value={{ authData, onLogin, onLogout }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export const useAuthentication = () => useContext(AuthenticationContext);
