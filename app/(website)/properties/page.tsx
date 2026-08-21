import PropertySearch from "@/components/property/PropertySearch";
import { createClient } from "@/lib/supabase/server";

export default async function PropertiesPage() {
  const supabase = await createClient();

  const { data: listings, error } = await supabase
    .from("listings")
    .select("*")
    .eq("status", "For Sale")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading properties:", error);
  }

  return (
    <div className="min-h-screen bg-[#0a1628] pt-20 text-white">

      {/* =========================
          HERO
      ========================== */}

      <section className="bg-[#0a1628] px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a84c] sm:text-sm">
              Properties
            </span>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Find Your Next Home
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Browse available properties across Durham Region,
              Toronto, and communities throughout Ontario.
            </p>

          </div>

        </div>
      </section>

      {/* =========================
          PROPERTY SEARCH
      ========================== */}

      <section className="bg-[#0f1727] px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">

          {listings && listings.length > 0 ? (
            <PropertySearch listings={listings} />
          ) : (
            <div className="rounded-3xl border border-white/10 bg-[#111d31] px-6 py-16 text-center shadow-xl">

              <div className="mx-auto max-w-xl">

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a84c]">
                  Properties
                </span>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  No Properties Currently Available
                </h2>

                <p className="mt-4 leading-7 text-gray-400">
                  New properties will appear here as they become
                  available.
                </p>

              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}