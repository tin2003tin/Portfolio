import type { Metadata } from "next";
import "./globals.css";
import { SideBar } from "@/components/sidebar/sidebar";


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created by Tin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="is-preload">
        <SideBar></SideBar>
        {children}
      </body>
    </html>
  );
}
