"use client";

import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Square, MapPin } from "lucide-react";
interface Listing {
  id: string;
  address: string;
  city: string;
  province: string;
  price: number;
  bedrooms: number | null;
  bathrooms: number | null;
  sqft: number | null;
  property_type: string | null;
  image_url: string | null;
  status: string;
  slug: string;
}

interface PropertyCardProps {
  listing: Listing;
}

export default function PropertyCard({
  listing,
}: PropertyCardProps) {
  return (
    <Link
      href={`/properties/${listing.slug}`}
      className="group block overflow-hidden rounded-3xl border border-white/10 bg-[#1b2434] transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a84c]/60 hover:shadow-2xl hover:shadow-[#c9a84c]/20"
    >
      {/* IMAGE */}

      <div className="relative h-64 overflow-hidden">
        <Image
          src={
  listing.image_url ||
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
}
          alt={listing.address}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 rounded-full bg-[#c9a84c] px-4 py-1 text-xs font-bold uppercase text-[#0a1628]">
          {listing.status}
        </div>

        <div className="absolute bottom-4 left-4 rounded-xl bg-black/60 px-4 py-2 backdrop-blur-md">
          <p className="text-3xl font-extrabold tracking-tight text-white">
            ${listing.price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* CONTENT */}

      <div className="space-y-5 p-6">
        <div>
  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84c]">
    {listing.property_type}
  </p>

  <h3 className="mt-2 line-clamp-1 text-xl font-bold text-white">
    {listing.address}
  </h3>

  <div className="mt-2 flex items-center gap-2 text-sm text-gray-300">
    <MapPin size={16} className="text-[#c9a84c]" />
    <span>
      {listing.city}, {listing.province}
    </span>
  </div>
</div>

        {/* STATS */}

        <div className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl bg-[#0f1727] p-4">
          <div className="text-center">
            <BedDouble
              className="mx-auto mb-2 text-[#c9a84c]"
              size={18}
            />
            <p className="text-lg font-bold text-white">
              {listing.bedrooms}
            </p>
            <p className="text-xs text-gray-400">
              Beds
            </p>
          </div>

          <div className="text-center">
            <Bath
              className="mx-auto mb-2 text-[#c9a84c]"
              size={18}
            />
            <p className="text-lg font-bold text-white">
              {listing.bathrooms}
            </p>
            <p className="text-xs text-gray-400">
              Baths
            </p>
          </div>

          <div className="text-center">
            <Square
              className="mx-auto mb-2 text-[#c9a84c]"
              size={18}
            />
            <p className="text-lg font-bold text-white">
              {listing.sqft ?? "--"}
            </p>
            <p className="text-xs text-gray-400">
              Sq Ft
            </p>
          </div>
        </div>

        {/* BUTTON */}

        <div className="flex justify-end">
  <span className="inline-flex items-center gap-2 font-semibold text-[#c9a84c] transition-all duration-300 group-hover:translate-x-1">
    View Details
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </span>
</div>
      </div>
    </Link>
  );
}