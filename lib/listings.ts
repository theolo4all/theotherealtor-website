import { Listing } from "@/types/listing";

export const featuredListings: Listing[] = [
  {
    id: "1",

    mlsNumber: "E123456",

    address: "125 Main Street",

    city: "Whitby",

    province: "ON",

    price: 899900,

    bedrooms: 4,

    bathrooms: 3,

    sqft: 2400,

    propertyType: "Detached",

    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",

    status: "For Sale",

    isFeatured: true,
  },

  {
    id: "2",

    mlsNumber: "E654321",

    address: "18 King Avenue",

    city: "Ajax",

    province: "ON",

    price: 729900,

    bedrooms: 3,

    bathrooms: 2,

    sqft: 1800,

    propertyType: "Townhouse",

    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",

    status: "For Sale",

    isFeatured: true,
  },

  {
    id: "3",

    mlsNumber: "E888777",

    address: "44 Harbour Drive",

    city: "Oshawa",

    province: "ON",

    price: 1129000,

    bedrooms: 5,

    bathrooms: 4,

    sqft: 3100,

    propertyType: "Detached",

    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",

    status: "For Sale",

    isFeatured: true,
  },
];