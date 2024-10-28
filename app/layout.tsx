import type { Metadata } from "next";
import "./globals.css";

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
      <body
      >
        {children}
      </body>
    </html>
  );
}
