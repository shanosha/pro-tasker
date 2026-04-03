import { createContext, useContext, useMemo, useState } from "react";

const LoadingContext = createContext({
  isLoading: false,
  startLoading: () => {},
  stopLoading: () => {},
});

export function LoadingProvider({ children }) {
  const [loadingCount, setLoadingCount] = useState(0);

  const isLoading = loadingCount > 0;

  const startLoading = () => setLoadingCount((curr) => curr + 1);
  const stopLoading = () => setLoadingCount((curr) => {
    return Math.max(0, curr - 1)    
  });

  const value = useMemo(
    () => ({ isLoading, startLoading, stopLoading }),
    [isLoading]
  );

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
