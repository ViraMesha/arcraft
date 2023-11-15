import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arcraft",
  description:
    "Explore the artistry of architectural design with Arcraft. Immerse yourself in a collection of innovative structures, visionary concepts, and the latest trends in architectural craftsmanship. Uncover the intersection of form and function, where creativity meets precision. Your journey into the world of architectural excellence begins here.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-[#f3f5f8] overflow-x-clip`}>
        <Header />
        {children}
        <Footer className="bg-white py-16 md:py-24" />
      </body>
    </html>
  );
}
