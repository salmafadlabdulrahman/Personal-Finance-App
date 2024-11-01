'use client'

import { useSidebar } from "./SidebarContext";

const ContentWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { minimizeSidebar } = useSidebar();
  return (
    <div className={`xl:flex ${minimizeSidebar ? "gap-[6em]" : "gap-[20em]"}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
