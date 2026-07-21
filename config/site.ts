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
} as const;