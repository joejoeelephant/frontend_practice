import React, { createContext, useContext, useState } from 'react';

interface CurrentURLContextType {
  currentURL: string;
  setCurrentURL: React.Dispatch<React.SetStateAction<string>>;
}

const CurrentURLContext = createContext<CurrentURLContextType | undefined>(undefined);

export const useCurrentURL = () => {
  const context = useContext(CurrentURLContext);
  if (!context) {
    throw new Error("useCurrentURL must be used within a CurrentURLProvider");
  }
  return context;
};


export const CurrentURLProvider: React.FC<{children: React.ReactNode}> = ({ children } ) => {
    const [currentURL, setCurrentURL] = useState<string>("home");
  
    return (
      <CurrentURLContext.Provider value={{ currentURL, setCurrentURL }}>
        {children}
      </CurrentURLContext.Provider>
    );
};
  