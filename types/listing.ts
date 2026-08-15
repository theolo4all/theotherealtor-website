export interface Listing {
  // Identification
  id: string;
  mlsNumber: string;

  // Status
  status: "For Sale" | "Sold" | "Pending";
  isFeatured: boolean;

  // Pricing
  price: number;
  taxes?: number;
  maintenanceFee?: number;

  // Address
  address: string;
  city: string;
  province: string;
  postalCode?: string;

  // Property Details
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  garage?: number;
  parking?: number;

  sqft?: number;
  lotSize?: string;
  yearBuilt?: number;

  // Description
  description?: string;
  features?: string[];

  // Media
  image: string;
  images?: string[];
  virtualTour?: string;

  // Location
  latitude?: number;
  longitude?: number;

  // Metadata
  listedDate?: string;
  listingAgent?: string;
}