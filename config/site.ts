/**
 * Global website configuration.
 *
 * This file contains information about Theo's personal brand.
 * It intentionally does NOT include brokerage information,
 * contact details, or SEO. Those will live in their own files.
 */

export const siteConfig = {
  owner: {
    firstName: "Theo",
    lastName: "Tajou",
    fullName: "Theo Tajou",
    brandName: "The Other Realtor",
    professionalTitle: "REALTOR®",
  },

  website: {
    url: "https://theotherealtor.com",
    title: "The Other Realtor",
    tagline: "Tech-Savvy Real Estate Partner",
  },

  location: {
    city: "Oshawa",
    province: "Ontario",
    country: "Canada",
  },

  hero: {
  badge: "Durham Region • GTA • Ontario",

  title: {
    line1: "Helping You",
    highlight: "Buy, Sell & Invest",
    line2: "With Confidence",
  },

  description:
    "Technology-driven real estate guidance for buyers, sellers and investors throughout Durham Region, the GTA and communities across Ontario.",

  primaryCTA: "Book Consultation",

  secondaryCTA: "Explore Communities",
},
} as const;