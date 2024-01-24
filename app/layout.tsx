import type { Metadata } from "next";
import { Esteban } from "next/font/google";
import "./globals.css";

const esteban = Esteban({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Read a poem",
  description: "Why not read a poem today?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={esteban.className}>{children}</body>
    </html>
  );
}
