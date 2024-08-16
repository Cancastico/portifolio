import type { Metadata } from "next";
import { Ubuntu, IBM_Plex_Mono } from 'next/font/google'

export const ibm = IBM_Plex_Mono({
  subsets: ['latin', "latin-ext"],
  weight: ['100', '200', '300', '400', '500', '600', '700']

})

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]

})
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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`${ibm.className} overflow-y-auto transition-all ease-in-out scroll-smooth scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-1 scrollbar scrollbar-track-transparent dark:scrollbar-track-background-dark scrollbar-thumb-primary hover:scrollbar-track-[#f1f5f9]`}>{children}</body>
    </html>
  );
}
