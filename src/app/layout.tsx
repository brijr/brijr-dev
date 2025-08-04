import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "brijr.dev -- bridger tower is a web developer",
  description: "a website by bridger tower for bridger tower",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-stone-950 text-stone-100">
      <body className={`${geistMono.className} antialiased`}>{children}</body>
    </html>
  );
}
