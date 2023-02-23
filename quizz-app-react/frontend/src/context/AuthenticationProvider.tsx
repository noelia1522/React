import React, { createContext, useContext, useState, useEffect } from "react";
import { useLoader } from "./LoadContext";

type PropsType = {
  children: React.ReactElement;
};
type contextType = {
  authData: { username: string };
  onLogin: (p: {}) => void;
  onLogout: () => void;
};
// type authData = {

// }
const AuthenticationContext = createContext<contextType | undefined>(undefined);
export default function AuthenticationProvider({ children }: PropsType) {
  const [authData, setAuthData] = useState<any>(undefined);
  const loadingResult = useLoader();

  useEffect(() => {
    const getLoggedInUser = async () => {
      const response = await fetch("/users", {
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
          loadingResult?.setIsLoading(false);
          return data;
        } else {
          //if we cannot fetch data
          loadingResult?.setIsLoading(false); //should be false when no user found
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.log(error);
        return;
      }
    };
    getLoggedInUser();
  }, [loadingResult]);
  const onLogin = (value: {}) => setAuthData(value);
  const onLogout = () => setAuthData(undefined);
  return (
    <AuthenticationContext.Provider value={{ authData, onLogin, onLogout }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
export const useAuthentication = (): any => useContext(AuthenticationContext);
