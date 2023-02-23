import React from "react";
import { useAuthentication } from "./context/AuthenticationProvider";
import { Navigate } from "react-router-dom";

type PropsType = {
  children: React.ReactElement;
};
export default function RequiredAuth({ children }: PropsType) {
  const authResult = useAuthentication();
  // setTimeout(() => {

  if (!authResult?.authData.name) {
    console.log("No USER!!!!!");
    return <Navigate to="/login" replace />;
  }
  // }, 1000);
  return children;
}
