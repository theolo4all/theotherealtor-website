"use client";

import { useMemo, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard";

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

interface PropertySearchProps {
  listings: Listing[];
}

export default function PropertySearch({
  listings,
}: PropertySearchProps) {
  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("All");
  const [bedrooms, setBedrooms] = useState("Any");
  const [maxPrice, setMaxPrice] = useState("Any");
  const [sort, setSort] = useState("Newest");

  const propertyTypes = useMemo(() => {
    const types = listings
      .map((listing) => listing.property_type)
      .filter(Boolean) as string[];

    return ["All", ...Array.from(new Set(types))];
  }, [listings]);

  const filteredListings = useMemo(() => {
    let results = listings.filter((listing) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        listing.address.toLowerCase().includes(searchValue) ||
        listing.city.toLowerCase().includes(searchValue);

      const matchesType =
        propertyType === "All" ||
        listing.property_type === propertyType;

      const matchesBedrooms =
        bedrooms === "Any" ||
        (listing.bedrooms !== null &&
          listing.bedrooms >= Number(bedrooms));

      const matchesPrice =
        maxPrice === "Any" ||
        listing.price <= Number(maxPrice);

      return (
        matchesSearch &&
        matchesType &&
        matchesBedrooms &&
        matchesPrice
      );
    });

    results = [...results].sort((a, b) => {
      if (sort === "Price Low") {
        return a.price - b.price;
      }

      if (sort === "Price High") {
        return b.price - a.price;
      }

      return 0;
    });

    return results;
  }, [
    listings,
    search,
    propertyType,
    bedrooms,
    maxPrice,
    sort,
  ]);

  const clearFilters = () => {
    setSearch("");
    setPropertyType("All");
    setBedrooms("Any");
    setMaxPrice("Any");
    setSort("Newest");
  };

  return (
    <div className="space-y-8">

      {/* =========================
          FILTER PANEL
      ========================== */}

      <div className="rounded-3xl border border-white/10 bg-[#111d31] p-5 shadow-xl sm:p-6">

        <div className="mb-5">
          <h2 className="text-xl font-bold text-white">
            Search Properties
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Narrow your search by location, property type, bedrooms,
            or price.
          </p>
        </div>

        {/* Filters */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {/* Search */}

          <div className="lg:col-span-2">
            <label
              htmlFor="property-search"
              className="mb-2 block text-sm font-semibold text-white"
            >
              Search
            </label>

            <input
              id="property-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="City or address..."
              className="h-12 w-full rounded-xl border border-white/10 bg-[#0a1628] px-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]"
            />
          </div>

          {/* Property Type */}

          <div>
            <label
              htmlFor="property-type"
              className="mb-2 block text-sm font-semibold text-white"
            >
              Property Type
            </label>

            <select
              id="property-type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="h-12 w-full rounded-xl border border-white/10 bg-[#0a1628] px-4 text-sm text-white outline-none transition focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]"
            >
              {propertyTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Bedrooms */}

          <div>
            <label
              htmlFor="bedrooms"
              className="mb-2 block text-sm font-semibold text-white"
            >
              Bedrooms
            </label>

            <select
              id="bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="h-12 w-full rounded-xl border border-white/10 bg-[#0a1628] px-4 text-sm text-white outline-none transition focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]"
            >
              <option value="Any">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          {/* Maximum Price */}

          <div>
            <label
              htmlFor="max-price"
              className="mb-2 block text-sm font-semibold text-white"
            >
              Max Price
            </label>

            <select
              id="max-price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="h-12 w-full rounded-xl border border-white/10 bg-[#0a1628] px-4 text-sm text-white outline-none transition focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]"
            >
              <option value="Any">Any</option>
              <option value="500000">$500K</option>
              <option value="750000">$750K</option>
              <option value="1000000">$1M</option>
              <option value="1250000">$1.25M</option>
              <option value="1500000">$1.5M</option>
              <option value="2000000">$2M</option>
            </select>
          </div>
        </div>

        {/* Results / Sort */}

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-gray-400">
            Showing{" "}
            <span className="font-semibold text-white">
              {filteredListings.length}
            </span>{" "}
            {filteredListings.length === 1
              ? "property"
              : "properties"}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

            <select
              aria-label="Sort properties"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-11 rounded-xl border border-white/10 bg-[#0a1628] px-4 text-sm text-white outline-none transition focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]"
            >
              <option value="Newest">Newest</option>
              <option value="Price Low">
                Price: Low to High
              </option>
              <option value="Price High">
                Price: High to Low
              </option>
            </select>

            <button
              type="button"
              onClick={clearFilters}
              className="h-11 rounded-xl border border-[#c9a84c]/60 px-5 text-sm font-semibold text-[#c9a84c] transition hover:bg-[#c9a84c] hover:text-[#0a1628]"
            >
              Clear Filters
            </button>

          </div>
        </div>
      </div>

      {/* =========================
          RESULTS
      ========================== */}

      {filteredListings.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredListings.map((listing) => (
            <PropertyCard
              key={listing.id}
              listing={listing}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-white/10 bg-[#111d31] px-6 py-16 text-center shadow-xl">

          <h2 className="text-2xl font-bold text-white">
            No properties found
          </h2>

          <p className="mx-auto mt-3 max-w-md text-gray-400">
            Try changing your search or removing some filters.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-xl bg-[#c9a84c] px-6 py-3 font-semibold text-[#0a1628] transition hover:bg-[#e8d5a3]"
          >
            Clear Filters
          </button>

        </div>
      )}
    </div>
  );
}