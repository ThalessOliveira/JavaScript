import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: "Next.JS Essencial",
  description: "Aprendendo Next.js",
};

const font = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={font.className}>{children}</body>
    </html>
  );
}