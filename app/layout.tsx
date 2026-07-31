import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theotherealtor.com"),

  title: {
    default: "The Other Realtor | Ontario Real Estate",
    template: "%s | The Other Realtor",
  },

  description:
    "Buy, sell and invest in Ontario real estate with Theo Tajou. Serving Durham Region, Toronto, York Region, Niagara, Hamilton, London, Ottawa and communities across Ontario. Technology-driven guidance backed by local expertise.",

  keywords: [
    "The Other Realtor",
    "Theo Tajou",
    "Ontario Realtor",
    "Ontario Real Estate",
    "Century 21 Titans Realty",
    "Durham Region Realtor",
    "Whitby Realtor",
    "Oshawa Realtor",
    "Ajax Realtor",
    "Pickering Realtor",
    "Toronto Realtor",
    "York Region Realtor",
    "Hamilton Realtor",
    "Niagara Realtor",
    "London Ontario Realtor",
    "Ottawa Realtor",
    "Homes for Sale Ontario",
    "Buy a Home Ontario",
    "Sell a Home Ontario",
    "Investment Properties Ontario",
    "First Time Home Buyer",
    "Real Estate Agent Ontario",
  ],

  authors: [
    {
      name: "Theo Tajou",
      url: "https://theotherealtor.com",
    },
  ],

  creator: "Theo Tajou",

  publisher: "The Other Realtor",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://theotherealtor.com",
  },

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://theotherealtor.com",
    siteName: "The Other Realtor",

    title: "The Other Realtor | Ontario Real Estate",

    description:
      "Helping buyers, sellers and investors across Ontario make smarter real estate decisions with technology-driven guidance.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Other Realtor - Ontario Real Estate",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "The Other Realtor | Ontario Real Estate",

    description:
      "Technology-driven real estate services for buyers, sellers and investors across Ontario.",

    images: ["/og-image.jpg"],
  },

  category: "Real Estate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <body className={inter.className}>{children}</body>
    </html>
  );
}