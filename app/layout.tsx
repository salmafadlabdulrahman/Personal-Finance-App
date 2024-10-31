import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./component/Sidebar";

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
        <div className="xl:flex gap-[20em]">
          <div className="hidden xl:block ">
            <Sidebar />
          </div>
          <div className="xl:grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
