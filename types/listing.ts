export interface Listing {
  id: string;

  mlsNumber: string;

  address: string;
  city: string;
  province: string;
  postalCode?: string;

  price: number;

  bedrooms: number;
  bathrooms: number;

  sqft?: number;

  propertyType: string;

  image: string;
  images?: string[];

  status: "For Sale" | "Sold" | "Pending";

  isFeatured: boolean;

  description?: string;

  latitude?: number;
  longitude?: number;
}