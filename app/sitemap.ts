import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://theotherealtor.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://theotherealtor.com/about",
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: "https://theotherealtor.com/contact",
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: "https://theotherealtor.com/services",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}