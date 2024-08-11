import type { Metadata } from "next";
import ico from "@/../public/ico.svg";

import "./globals.css";

export const metadata: Metadata = {
  title: "Cancastico - Portifolio",
  description: "My Portifolio",
  icons: {
    icon: "/ico.svg", // ou use: icon: ico,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-ibmPlexMono`}>{children}</body>
    </html>
  );
}
