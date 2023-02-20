import React, { createContext, useState, useEffect, useContext } from "react";
import { useLoader } from "./LoadContext";

type AuthProps = {
  children: React.ReactNode;
};

type contextType = {
  authData: { name: string };
  onLogin: (v: {}) => any;
  onLogout: () => any;
};

// type contextType = Required<
//   Pick<authContextType, "authData" | "onLogin" | "onLogout">
// >;
const AuthenticationContext = createContext<undefined | contextType>(undefined);

export default function AuthenticationProvider({ children }: AuthProps) {
  const [authData, setAuthData] = useState({ name: "" });
  const result = useLoader();
  const setLoading = result?.setLoading;
  console.log("setloading:", result);

  useEffect(() => {
    getLoggedUser();
  }, [setLoading]);

  //get user data
  async function getLoggedUser() {
    console.log("Getting user...");

    const response = await fetch("/users/", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });

    try {
      if (response.ok) {
        const data = await response.json();
        onLogin(data);
        if (setLoading) setLoading(false);
        console.log("setloading is: ", setLoading);
        console.log("user data arrived", data);
        return data;
      }
      if (setLoading) setLoading(false);
      console.log("setloading is: ", setLoading);

      throw new Error(response.statusText);
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