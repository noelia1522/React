import React, { useContext, useState } from "react";

type Props = {
  children: React.ReactElement;
};

type contextType = {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => any;
};
export const LoadContext = React.createContext<contextType | undefined>(
  undefined
);

export const LoadContextProvider = ({ children }: Props) => {
  console.log("inside loadcontext");

  const [isLoading, setLoading] = useState(true);
  console.log(isLoading);

  return (
    <LoadContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadContext.Provider>
  );
};

export default LoadContextProvider;

export const useLoader = () => useContext(LoadContext);