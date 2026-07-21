import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theo Tajou | The Other Realtor - Durham Region Real Estate",
  description: "Tech-savvy real estate agent serving Durham Region, Oshawa & all of Ontario. Buyers, sellers & leasing. Century 21 Titans Realty.",
  keywords: "real estate, Oshawa, Durham Region, Toronto, Ontario, Century 21, Theo Tajou, buy home, sell home, lease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
