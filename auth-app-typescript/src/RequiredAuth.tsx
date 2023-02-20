import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthentication } from "./AuthenticationProvider";

type AuthProps = {
  children: React.ReactElement;
};
export const RequiredAuth = ({ children }: AuthProps) => {
  const result = useAuthentication();
  const authData = result?.authData;
  const location = useLocation();

  console.log("Require Auth says hello ", authData?.name);
  if (!authData?.name) {
    console.log("No USER!");

    //replace:replace: true => login page is removed. the logged in user is never come back
    //to the login page even if she clicked on "Back". as long as she's logged in
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
