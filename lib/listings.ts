import { Listing } from "@/types/listing";

export const featuredListings: Listing[] = [
  {
    id: "1",
    mlsNumber: "E123456",

    status: "For Sale",
    isFeatured: true,

    price: 899900,
    taxes: 4875,

    address: "125 Main Street",
    city: "Whitby",
    province: "ON",
    postalCode: "L1R 2A5",

    propertyType: "Detached",

    bedrooms: 4,
    bathrooms: 3,
    garage: 2,
    parking: 4,

    sqft: 2400,
    lotSize: "40 x 110 ft",
    yearBuilt: 2018,

    description:
      "Beautiful detached family home located in one of Whitby's most desirable communities. Featuring an open-concept layout, modern kitchen with quartz countertops, spacious bedrooms, finished basement and a large backyard perfect for entertaining.",

    features: [
      "Finished Basement",
      "Quartz Countertops",
      "Double Garage",
      "Hardwood Floors",
      "Large Backyard",
      "Central Air Conditioning",
      "Open Concept",
      "Nearby Schools",
    ],

    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",

    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
    ],

    latitude: 43.8971,
    longitude: -78.9429,

    listedDate: "2026-07-25",
    listingAgent: "Theo Tajou",
  },

  {
    id: "2",
    mlsNumber: "E654321",

    status: "For Sale",
    isFeatured: true,

    price: 729900,
    taxes: 3920,

    address: "18 King Avenue",
    city: "Ajax",
    province: "ON",
    postalCode: "L1S 5K4",

    propertyType: "Townhouse",

    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    parking: 2,

    sqft: 1800,
    lotSize: "22 x 95 ft",
    yearBuilt: 2020,

    description:
      "Modern freehold townhouse offering spacious living, upgraded finishes, a bright open-concept main floor and excellent access to schools, parks, shopping and Highway 401.",

    features: [
      "Freehold",
      "Modern Kitchen",
      "Quartz Counters",
      "Walk-in Closet",
      "Finished Basement",
      "Large Deck",
      "Family Friendly",
    ],

    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",

    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    ],

    latitude: 43.8509,
    longitude: -79.0204,

    listedDate: "2026-07-22",
    listingAgent: "Theo Tajou",
  },

  {
    id: "3",
    mlsNumber: "E888777",

    status: "For Sale",
    isFeatured: true,

    price: 1129000,
    taxes: 6120,

    address: "44 Harbour Drive",
    city: "Oshawa",
    province: "ON",
    postalCode: "L1H 7K5",

    propertyType: "Detached",

    bedrooms: 5,
    bathrooms: 4,
    garage: 2,
    parking: 6,

    sqft: 3100,
    lotSize: "55 x 130 ft",
    yearBuilt: 2021,

    description:
      "Luxury detached home near the waterfront featuring premium finishes, gourmet kitchen, spacious bedrooms, home office, finished basement and a beautifully landscaped backyard.",

    features: [
      "Waterfront Nearby",
      "Luxury Kitchen",
      "Finished Basement",
      "Home Office",
      "Large Backyard",
      "Double Garage",
      "Smart Home",
      "Premium Appliances",
    ],

    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",

    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    ],

    latitude: 43.8975,
    longitude: -78.8658,

    listedDate: "2026-07-18",
    listingAgent: "Theo Tajou",
  },
];