/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";

import './globals.css';

export const metadata: Metadata = {
  title: 'Cancastico - Portifolio',
  description: 'My Portfolio',
  icons: {
    icon: '/ico.svg', // Aqui não há problema, pode ser mantido
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={` font-ibmPlexMono overflow-y-auto transition-all ease-in-out scroll-smooth scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-1 scrollbar scrollbar-track-transparent dark:scrollbar-track-background-dark scrollbar-thumb-primary hover:scrollbar-track-[#f1f5f9]`}
      >
        {children}
      </body>
    </html>
  );
}
