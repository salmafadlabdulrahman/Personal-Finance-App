"use client";

import { createContext, useContext, useState } from "react";

interface SidebarContextType {
  minimizeSidebar: boolean;
  closeSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [minimizeSidebar, setMinimizeSidebar] = useState(false);

  const closeSidebar = () => {
    setMinimizeSidebar((val) => !val);
  };
  return (
    <SidebarContext.Provider value={{ minimizeSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook for accessing context more easily
export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
