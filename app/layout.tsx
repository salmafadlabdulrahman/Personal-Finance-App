import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import MiniSidebar from "./components/MiniSidebar";
import { SidebarProvider } from "./SidebarContext";
import ContentWrapper from "./ContentWrapper";

export const metadata: Metadata = {
  title: "Manage your money & expenses",
  description: "With the personal finance app you can mange your money easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <ContentWrapper>
            <div className="hidden xl:block">
              <Sidebar />
            </div>
            <div className="xl:grow">{children}</div>
            <div className="xl:hidden">
              <MiniSidebar />
            </div>
          </ContentWrapper>
        </SidebarProvider>
      </body>
    </html>
  );
}
