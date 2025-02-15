"use client";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Prof. Mokhter Ahmad Portfolio",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="home" className={inter.className}>
        <Navbar />
        <div className="st-height-b80 st-height-lg-b80"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}


