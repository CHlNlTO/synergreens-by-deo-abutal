import React from "react";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { navItems } from "@/lib/data";
import { Toaster } from "react-hot-toast";

// Define fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Synergreens - Live Long Abundantly!",
    default: "Synergreens - Premium Health & Wellness Products",
  },
  description:
    "Discover Synergreens premium health and wellness products offered by Deo Abutal. Natural ingredients, FDA registered supplements for optimal wellbeing.",
  keywords: [
    "Synergreens",
    "health supplements",
    "wellness products",
    "Deo Abutal",
    "natural supplements",
    "Philippines",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar items={navItems} />
        <div className="flex-grow">{children}</div>
        <Toaster position="bottom-center" />
        <Footer navItems={navItems} />
      </body>
    </html>
  );
}
