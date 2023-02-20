import React from "react";
import { useContext, useState } from "react";

type MyContextProps = {
  children: React.ReactNode;
};
type contextType = {
  myUser: string;
  user: {
    firstname: string;
    lastname: string;
    age: number;
    country: string;
  };
};
const MyContext = React.createContext<undefined | contextType>(undefined);

const MyContextProvider = ({ children }: MyContextProps) => {
  const myUser = "Alejandra";
  const user = {
    firstname: "Helen",
    lastname: "Jackson",
    age: 27,
    country: "spain",
  };

  return (
    <MyContext.Provider value={{ user, myUser }}>{children}</MyContext.Provider>
  );
};
export default MyContextProvider;

export const Userconsumer = () => useContext(MyContext);