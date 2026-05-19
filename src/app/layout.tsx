import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CursorGlow } from "./cursor-glow";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bound in Shadows",
  description:
    "The official site for Bound in Shadows, a dark fantasy action game by Ofir Dror.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
