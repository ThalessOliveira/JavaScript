import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projeto React",
  description: "Criando um projeto em React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
