import type { Metadata } from "next";

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
        <body className={`font-ibmPlexMono overflow-y-auto transition-all ease-in-out scroll-smooth scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-1 scrollbar scrollbar-track-transparent dark:scrollbar-track-background-dark scrollbar-thumb-primary hover:scrollbar-track-[#f1f5f9]`}>{children}</body>

    </html>
  );
}
