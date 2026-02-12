import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koforidua Training Center | KTC Ghana",
  description: "Official portal of the Koforidua Training Center, Ministry of Roads and Highways. Empowering infrastructure professionals with world-class technical skills.",
  keywords: ["KTC", "Koforidua Training Center", "Ghana Road Training", "Highway Engineering Ghana", "Technical Training Ghana"],
  authors: [{ name: "KTC Department of ICT" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
