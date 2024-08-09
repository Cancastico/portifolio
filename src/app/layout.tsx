import type { Metadata } from "next";
import {IBM_Plex_Mono} from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const IBM = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700"]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={IBM.className}>{children}</body>
    </html>
  );
}
