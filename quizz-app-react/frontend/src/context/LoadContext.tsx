import React, { useState, useContext, createContext } from "react";

type PropsType = {
  children: React.ReactElement;
};
type contextType = {
  isLoading: boolean;
  setIsLoading: (p: boolean) => void;
  error: string | null;
  setError: (value: string | null) => void;
};
export const LoadContext = createContext<contextType | undefined>(undefined);
export default function LoadContextProvider({ children }: PropsType) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <LoadContext.Provider value={{ isLoading, setIsLoading, error, setError }}>
      {children}
    </LoadContext.Provider>
  );
}
export const useLoader = () => useContext(LoadContext);