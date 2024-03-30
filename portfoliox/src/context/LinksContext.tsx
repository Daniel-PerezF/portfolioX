import React, { createContext, useContext, useState, ReactNode } from "react";

interface LinksContextType {
  showLinks: boolean;
  toggleLinks: () => void;
}

const LinksContext = createContext<LinksContextType | undefined>(undefined);

export const useLinksContext = (): LinksContextType => {
  const context = useContext(LinksContext);
  if (!context) {
    throw new Error("useLinksContext must be used within a LinksProvider");
  }
  return context;
};

interface LinksProviderProps {
  children: ReactNode;
}

export const LinksProvider: React.FC<LinksProviderProps> = ({ children }) => {
  const [showLinks, setShowLinks] = useState(false);
  console.log("showLinks", showLinks);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <LinksContext.Provider value={{ showLinks, toggleLinks }}>
      {children}
    </LinksContext.Provider>
  );
};
