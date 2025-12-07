import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Toaster} from "react-hot-toast";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MASHOP - best clothes",
  description: "MASHOP is craeted by Masoomeh Rezaei",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <div className="mx-auto sm:px-0 p-4 sm:max-w-xl md:max-w-xl lg:max-w-3xl xl:max-w-7xl ">
           <Navbar/> {children} <Footer/>
        </div>
          <Toaster
              position="bottom-right"
              reverseOrder={true}
          />
      </body>
    </html>
  );
}
