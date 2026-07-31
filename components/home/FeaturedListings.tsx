import Link from "next/link";
import PropertyCard from "@/components/property/PropertyCard";
import { createClient } from "@/lib/supabase/server";

export default async function FeaturedListings() {
  const supabase = await createClient();

  const { data: listings } = await supabase
    .from("listings")
    .select("*")
    .eq("featured", true)
    .eq("status", "For Sale")
    .order("created_at", { ascending: false })
    .limit(6);

  return (
    <section className="section-padding bg-[#0f1727]">
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="mb-14 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a84c]">
            Featured Properties
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Discover Your Next Home
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            Explore featured homes across Durham Region, York Region,
            Toronto, Niagara, Hamilton, London, Ottawa and surrounding
            Ontario communities.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {listings?.map((listing) => (
            <PropertyCard
              key={listing.id}
              listing={listing}
            />
          ))}
        </div>

        {/* Button */}

        <div className="mt-14 text-center">

          <Link
            href="/properties"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#c9a84c] px-8 py-4 font-semibold text-[#0a1628] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#c9a84c]/30"
          >
            View All Properties
            <span>→</span>
          </Link>

        </div>

      </div>
    </section>
  );
}